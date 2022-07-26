import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'landing',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {charset: 'utf-8'},
            {
                name: 'viewport',
                content:
                    'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
            },
            {hid: 'description', name: 'description', content: ''},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap',
            },
        ],
    },
    css: ['@/assets/style/main.scss', '@/assets/style/reset.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/style/theme.scss";',
                },
            },
        },
    },

    buildModules:['@pinia/nuxt'],

    typescript: {
        typeCheck: true,
    },
})
