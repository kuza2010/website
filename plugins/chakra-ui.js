import Vue from 'vue'
import Chakra from '@chakra-ui/vue'
import {
    faBlog,
    faCoffee,
    faEnvelopeOpen,
    faExternalLinkAlt,
    faHamburger,
    faHighlighter,
    faHome,
    faScrewdriver,
    faSnowplow,
    faUserGraduate,
    faSleigh
} from '@fortawesome/free-solid-svg-icons'
import customTheme from '../config/custom-theme.js'
import customIcon from '~/config/custom-icon'

Vue.use(Chakra, {
    extendTheme: customTheme,
    icons: {
        iconSet: {
            faBlog,
            faHome,
            faSleigh,
            faCoffee,
            faSnowplow,
            faHamburger,
            faHighlighter,
            faScrewdriver,
            faUserGraduate,
            faEnvelopeOpen,
            faExternalLinkAlt
        },
        iconPack: 'fa',
        extend: {
            ...customIcon
        }
    }
})
