var audio = {
    /**
     * @description Return audio context or create one if none.
     * @returns {object} AudioContext
     */
    getAudioContext: function () {
        if (this.audio_context == undefined)
            this.audio_context = new (window.AudioContext || window.webkitAudioContext)();
        return this.audio_context;
    },

    /**
     * @description The master node is the final node to connect every others components' node before audio output.
     *              Return master gain or create one if none.
     * @returns {object} GainNode
     */
    getMasterNode: function () {
        if (this.master_node == undefined) {
            this.master_node = this.getAudioContext().createGain();
            this.master_node.connect(this.getAudioContext().destination);
        }
        return this.master_node;
    },

    /**
     * @description Create as many audio players as there are given sources.
     * @param {array} [sources=[]]
     */
    audio_players: [],
    initPlayers: function (sources = []) {
        var promises = [];
        sources.forEach((src, index) => {
            let promise = new Promise((resolve, reject) => {
                window.fetch(src)
                    .then(response => response.arrayBuffer())
                    .then(array_buffer => this.getAudioContext().decodeAudioData(array_buffer))
                    .then(audio_buffer => {
                        let audio_node = this.getAudioContext().createGain();
                        audio_node.connect(this.getMasterNode());
                        let audio_player = {
                            audio_buffer: audio_buffer,
                            duration: audio_buffer.duration,
                            is_playing: false,
                            is_looping: false,
                            time_start: 0,
                            time_end: audio_buffer.duration,
                            current_time: 0,
                            audio_node: audio_node
                        };
                        this.audio_players[index] = audio_player;
                        resolve();
                    })
                    .catch(error => reject(error));
            });
            promises.push(promise);
        })
        return Promise.all(promises);
    },

    /**
     * @description Start all audio players at the same time.
     */
    play: function () {
        this.audio_players.forEach((audio_player) => {
            if (!audio_player.is_playing) {
                const source = this.getAudioContext().createBufferSource();
                source.buffer = audio_player.audio_buffer;
                source.connect(audio_player.audio_node);
                source.start(0, audio_player.current_time, audio_player.duration);
                audio_player.is_playing = true;
                audio_player.audio_source = source;
            }
        })

        // 💡 Making only one time tracker as player are always playing at the same time
        this.last_tick = this.getAudioContext().currentTime;
        this.timeTracker();
    },

    pause: function () {
        this.audio_players.forEach((audio_player) => {
            if (audio_player.is_playing) {
                audio_player.audio_source.stop();
                audio_player.is_playing = false;
            }
        })
    },

    playPause: function () {
        if (this.isPlaying())
            this.pause();
        else
            this.play();
    },

    timeTracker: function () {
        let tick = this.getAudioContext().currentTime;
        this.audio_players.forEach(audio_player => { audio_player.current_time += tick - this.last_tick });
        this.last_tick = tick;

        // 🏷️ Trigger point
        if (this.audio_players.every(audio_player => audio_player.current_time >= audio_player.time_end)) {
            this.pause();
            this.audio_players.forEach(audio_player => { audio_player.current_time = audio_player.time_start });
            if (this.isLooping()) this.play();
        }

        if (this.isPlaying())
            requestAnimationFrame(function () { this.timeTracker() }.bind(this));
    },

    loop: function (enable) {
        this.audio_players.forEach((audio_player) => {
            audio_player.is_looping = enable == undefined ? audio_player.is_looping ? false : true : enable;
        })
    },

    setRange: function (start, end) {
        this.audio_players.forEach((audio_player) => {
            if (start) {
                audio_player.time_start = start;
                this.audio_players.forEach((audio_player) => {
                    audio_player.current_time = Math.max(audio_player.current_time, start)
                })
            }
            if (end) audio_player.time_end = end;
        })
    },
    resetRange: function () {
        this.audio_players.forEach((audio_player) => {
            audio_player.time_start = 0;
            audio_player.time_end = audio_player.duration;
        })
    },

    seek: function (seeked_time) {
        this.pause();
        this.audio_players.forEach((audio_player) => {
            if (seeked_time < audio_player.duration)
                audio_player.current_time = seeked_time;
        });
        this.play();
    },

    switchSource: function (index) {
        this.audio_players.forEach((audio_player, player_index) => {
            audio_player.audio_node.gain.value = player_index == index ? 1 : 0;
        })
    },

    isPlaying: function () {
        return this.audio_players.some(audio_player => audio_player.is_playing);
    },
    isLooping: function () {
        return this.audio_players.some(audio_player => audio_player.is_looping);
    },

    /**
     * @description Return data from the selected player on the selected channel (0: left , 1: right)
     * @param {number} [player_index=0]
     * @param {number} [channel=0]
     * @returns {Float32Array}
     */
    getAudioData: function (player_index = 0, channel = 0) {
        return this.audio_players[player_index].audio_buffer.getChannelData(channel);
    }
}

export default ({ app }, inject) => {
    inject('audio', audio)
}