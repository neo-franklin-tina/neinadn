import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: '#neinadn',
        description: 'Not Every Idea Needs A Domain Name',
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bungee&display=swap' },

            { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
            { rel: 'manifest', href: '/img/site.webmanifest' },
        ]
    },
    css: [
        '~/assets/css/app.css'
    ],
    components: [
        '~/components'
    ]
})
