export default {
    methods: {
        minDuration: function(secondes) {
            return `${Math.round(secondes/60)}min`
        },

        minSecDuration: function(secondes) {
            return `${Math.floor(secondes/60)}min${Math.floor(secondes%60)}`
        }
    }
}