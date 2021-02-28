import fetch from 'node-fetch'

const {
    CLIENT_ID: clientId,
    CLIENT_SECRET: clientSecret,
    REFRESH_TOKEN: refreshToken
} = process.env

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const NOW_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=RU'
const ACCESS_ENDPOINT = 'https://accounts.spotify.com/api/token'

async function _getAccessToken () {
    const r = await fetch(ACCESS_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        })
    })

    if (r.ok) {
        return r.json()
    }
    throw new Error('Cant retrieve access token')
}

async function getNowPlaying () {
    const { access_token: accessToken } = await _getAccessToken()

    return fetch(NOW_PLAYED_ENDPOINT, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export default getNowPlaying
