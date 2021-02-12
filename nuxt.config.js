import pkg from './package.json'
import customTheme from './config/custom-theme.js'
import sortedPosts from './plugins/blog_grabber.server'

export default {
    head: {
        title: pkg.name,
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
                href: '/favicon.ico'
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
    plugins: [
        'plugins/common',
        'plugins/blog_grabber.server.js' // only server-side
    ],
    components: true,
    publicRuntimeConfig: {
        sortedPosts
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
