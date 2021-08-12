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
     * @description Initialize audio engine based the html audio.
     * @param {object}
     */
    audio_player: undefined,
    initialize: function (html_audio_player) {
        html_audio_player.onloadedmetadata = (e) => {
            // 💡 Find a use for this ?
            // var media_stream = new MediaStream(html_audio_player.captureStream())
            // const source = this.getAudioContext().createMediaStreamSource(media_stream);

            this.audio_player = {
                audio_source: html_audio_player,
                is_playing: false,
                time_start: 0,
                time_end: 0,
                current_time: 0,
            }
        };
    },

    reload: function () {
        this.audio_player.audio_source.load();
    },

    /**
     * @description Start audio player.
     */
    play: function () {
        this.audio_player.audio_source.play();
        this.audio_player.is_playing = true;

        // 💡 Time tracker
        this.last_tick = this.getAudioContext().currentTime;
        this.timeTracker();
    },
    pause: function () {
        this.audio_player.audio_source.pause();
        this.audio_player.is_playing = false;
    },
    playPause: function () {
        if (this.audio_player.is_playing)
            this.pause();
        else
            this.play();
    },

    timeTracker: function () {
        let tick = this.getAudioContext().currentTime;
        this.audio_player.current_time += tick - this.last_tick;
        this.last_tick = tick;

        // 🏷️ Trigger point
        // if (this.audio_player.current_time >= audio_player.time_end) {
        //     this.pause();
        //     this.audio_player.current_time = audio_player.time_start;
        //     if (this.isLooping()) this.play();
        // }

        if (this.audio_player.is_playing)
            requestAnimationFrame(function () { this.timeTracker() }.bind(this));
    },

    seek: function (seeked_time) {
        // calc time
        // change src
        this.audio_player.audio_source.src = "https://tanabata.tina.cafe/supersouvenirs/stream/60";
        // autoplay

        // this.pause();
        // this.audio_players.forEach((audio_player) => {
        //     if (seeked_time < audio_player.duration)
        //         audio_player.current_time = seeked_time;
        // });
        // this.play();
    },
}

export default ({ app }, inject) => {
    inject('audio', audio)
}