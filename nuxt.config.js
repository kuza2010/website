import pkg from './package.json'
import customTheme from './config/custom-theme.js'
import sortedPosts from './plugins/blog_grabber.server'
import myHistory from './timeline-data'

export default {
    head: {
        title: pkg.author,
        htmlAttrs: { lang: 'en' },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicons/favicon.ico'
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
            }
        ]
    },
    css: [
        'normalize.css/normalize.css',
        '@assets/global-defined-styles.css'
    ],
    env: {
        clientId: process.env.CLIENT_ID || null,
        clientSecret: process.env.CLIENT_SECRET || null,
        refreshToken: process.env.REFRESH_TOKEN || null
    },
    serverMiddleware: [
        'api/current-track'
    ],
    plugins: [
        'plugins/chakra-ui',
        'plugins/directives',
        'plugins/blog_grabber.server.js' // only server-side
    ],
    components: true,
    publicRuntimeConfig: {
        sortedPosts,
        myHistory,
        email: 'kyza20106@yandex.ru',
        github: 'https://github.com/kuza2010',
        linkedIn: 'https://www.linkedin.com/in/artyom-danilin/',
        apiBaseUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : process.env.API_BASE_URL
    },
    buildModules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/mdx'
    ],
    modules: [
        '@chakra-ui/nuxt',
        '@nuxtjs/emotion'
    ],
    build: {},
    // Chakra UI
    chakra: {
        extendTheme: customTheme,
        autoImport: true
    }
}
