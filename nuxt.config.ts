import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: '#neinadn',
        description: 'Not Every Idea Needs A Domain Name',
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bungee&display=swap' }
        ]
    },
    css: [
        '~/assets/css/app.css'
    ],
    components: [
        '~/components'
    ]
})
