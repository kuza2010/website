import getNowPlaying from '../plugins/spotify.server'

const DEFAULT_RESPONSE = {
    isEmpty: true,
    track: null,
    href: null,
    artists: []
}

export default {
    path: '/api/current-track',
    async handler (request, response) {
        let track = { ...DEFAULT_RESPONSE }

        try {
            const res = await getNowPlaying()
            const { item } = res

            track = {
                isEmpty: false,
                track: item.name,
                artists: item.artists.map(artist => artist.name).join(', '),
                href: item.external_urls.spotify
            }
        } catch (e) {
            // ignore
        }

        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
        response.write(JSON.stringify(track))
        response.end()
    }
}
