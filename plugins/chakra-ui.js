import Vue from 'vue'
import Chakra from '@chakra-ui/vue'

import { faBlog, faHamburger, faScrewdriver, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import customTheme from '../config/custom-theme.js'

Vue.use(Chakra, {
    extendTheme: customTheme,
    icons: {
        iconSet: {
            faHamburger,
            faUserGraduate,
            faBlog,
            faScrewdriver
        },
        iconPack: 'fa'
    }
})
