export const state = () => ({
    current_track: {
        "_id": "6152db59fb0cb153bc4ecfc5",
        "title": "01.Feather [Nujabes featuring Cise Starr & Akin from CYNE]",
        "duration": 175.44997732426305
    },
    current_album_id: "",
    albums: []
})

export const mutations = {
    async retrieveAlbum(state, album_id) {
        // state.albums.push(await this.$http.$get(`${process.env.BACKEND_URL}/library/album/${album_id}`));
    },
    selectAlbum(state, album_id) {
        state.current_album_id = album_id;
    }
}

export const actions = {
    //retrieve album
    // https://vuex.vuejs.org/guide/actions.html#dispatching-actions


    // logout({ commit }) {
    //     commit('setUser', undefined);
    //     commit('setToken', undefined);
    // }
}

export const getters = {
    current_track: state => {
        return state.current_track;
    },
    current_album: state => {
        console.log(state.albums);
        return state.albums[state.current_album_id] || {};
    }
}