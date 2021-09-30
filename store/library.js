export const state = () => ({
    current_track_id: "61538338fb0cb153bc4f7fdd",
    current_album_id: "",
    albums: []
})

export const mutations = {
    cacheAlbum(state, album) {
        state.albums.push(album);
    },
    selectAlbum(state, album_id) {
        state.current_album_id = album_id;
    },
    selectTrack(state, track_id) {
        state.current_track_id = track_id;
    }
}

export const actions = {
    async retrieveAlbum({ commit }, album_id) {
        let album = await this.$http.$get(`${process.env.BACKEND_URL}/library/album/${album_id}`);
        commit('cacheAlbum', album);
    }
}

export const getters = {
    current_track: (state, getters) => {
        return getters.current_album.track_list?.find(track => track._id === state.current_track_id) || {};
    },
    current_album: state => {
        return state.albums.find(album => album._id === state.current_album_id) || {};
    }
}