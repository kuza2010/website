import Vue from 'vue'
import Chakra from '@chakra-ui/vue'
import {
    faBlog,
    faEnvelopeOpen,
    faExternalLinkAlt,
    faHamburger,
    faHome,
    faScrewdriver,
    faSnowplow,
    faUserGraduate
} from '@fortawesome/free-solid-svg-icons'
import customTheme from '../config/custom-theme.js'
import customIcon from '~/config/custom-icon'

Vue.use(Chakra, {
    extendTheme: customTheme,
    icons: {
        iconSet: {
            faHamburger,
            faUserGraduate,
            faBlog,
            faScrewdriver,
            faExternalLinkAlt,
            faEnvelopeOpen,
            faSnowplow,
            faHome
        },
        iconPack: 'fa',
        extend: {
            ...customIcon
        }
    }
})
