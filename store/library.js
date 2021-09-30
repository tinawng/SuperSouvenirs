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
    async syncAlbums({ state, commit }) {
        // FIXME: Called twice ?

        let ids = await this.$http.$get(`${process.env.BACKEND_URL}/library/albums_ids`);
        // 💡 if diff <= 3 we can cherry pick missing ones.
        if (ids - state.albums.length <= 3) {
            // TODO: get album/album_id
        }
        else {
            let albums = await this.$http.$get(`${process.env.BACKEND_URL}/library/albums`);
            albums = albums.filter(album => state.albums.find(cached_album => cached_album._id != album._id));
            albums.forEach(album => commit('cacheAlbum', album));
        }
    },

    async retrieveAlbum({ commit }, album_id) {
        let album = await this.$http.$get(`${process.env.BACKEND_URL}/library/album/${album_id}`);
        commit('cacheAlbum', album);
    }
}

export const getters = {
    albums: (state) => {
        return state.albums;
     },
    current_track: (state, getters) => {
        return getters.current_album.track_list?.find(track => track._id === state.current_track_id) || {};
    },
    current_album: (state) => {
        return state.albums.find(album => album._id === state.current_album_id) || {};
    }
}