export const state = () => ({
    current_track_id: undefined,
    current_album_id: undefined,
    albums: [],

    is_syncing: false
})

export const mutations = {
    cacheAlbum(state, album) {
        state.albums = state.albums.filter(cached_album => cached_album._id !== album._id);
        state.albums.push(album);
    },
    selectAlbum(state, album_id) {
        state.current_album_id = album_id;
    },
    selectTrack(state, track_id) {
        state.current_track_id = track_id;
    },
    isSyncing(state, value) {
        state.is_syncing = value;
    }
}

export const actions = {
    async syncAlbums({ state, commit }) {
        // 🛂 Prevent multiple *expensive* sync at the same time
        if (state.is_syncing) return;
        commit('isSyncing', true)

        let ids = await this.$http.$get(`${process.env.BACKEND_URL}/library/albums_ids`);
        // 💡 if diff <= 3 we can cherry pick missing ones.
        if (ids.length - state.albums.length <= 3) {
            // TODO: get album/album_id
        }
        else {
            let albums = await this.$http.$get(`${process.env.BACKEND_URL}/library/albums`);
            albums.forEach(album => commit('cacheAlbum', album));
        }

        commit('isSyncing', false)
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