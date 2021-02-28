import * as http from 'http'
import getNowPlaying from '../plugins/spotify.server'

export default {
    path: '/api/current-track',
    async handler (request, response) {
        const res = await getNowPlaying()
        let track = {}

        if (res.status === http.STATUS_CODES[204] || !res.ok) {
            track = {
                isEmpty: true,
                track: null,
                artists: [],
                href: null
            }
        } else {
            const { item } = await res.json()

            track = {
                isEmpty: false,
                track: item.name,
                artists: item.artists.map(artist => artist.name).join(', '),
                href: item.external_urls.spotify
            }
        }

        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
        response.write(JSON.stringify(track))
        response.end()
    }
}
