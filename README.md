# danilin-website.vercel.app

A personal website built using Vue, Nuxt.js, Chakra UI. Used MDX for blogs, Context Api for app theme. Feel free to copy
and use.

## Set up environment variables

To run it on your machine you need to provide some environment variables. These variables will use for fetching your
current playing track from Spotify. So, the variables:

- CLIENT_ID your client id, find it [here](https://developer.spotify.com/dashboard/applications)
- CLIENT_SECRET your client secret, find it [here](https://developer.spotify.com/dashboard/applications)
- REFRESH_TOKEN a permanent refresh token, for more information
  see [Spotify token](https://khalilstemmler.com/articles/tutorials/getting-the-currently-playing-song-spotify/)

___
Example:

- CLIENT_SECRET=AQDo...K8
- CLIENT_ID=8eb...qk
- REFRESH_TOKEN=09M...wt1

## Run on local machine

```bash
git clone https://github.com/kuza2010/website.git
cd website
npm install
# make sure that you have provided env variables 
npm dev
```

___

## Built using:

[![](https://img.shields.io/badge/-Vercel-red?style=for-the-badge&color=000&logo=vercel)](https://vercel.com/)
[![](https://img.shields.io/badge/-Nuxt.js-red?style=for-the-badge&color=4d2b84&logo=javascript&logoColor=00c58e)](https://nuxtjs.org/)
[![](https://img.shields.io/badge/-Chakra%20UI-red?style=for-the-badge&color=4d2b84&logo=chakra-ui&logoColor=319795)](https://vue.chakra-ui.com/)
[![](https://img.shields.io/badge/-Vue-red?style=for-the-badge&color=42b983&logo=vuejs&logoColor=4FC08D)](https://vuejs.org/)
[![](https://img.shields.io/badge/-MDX-red?style=for-the-badge&color=fcb42d)](https://mdxjs.com/)
