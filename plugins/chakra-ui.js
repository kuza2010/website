import Vue from 'vue'
import Chakra from '@chakra-ui/vue'

import customTheme from '../config/custom-theme.js'

Vue.use(Chakra, {
    extendTheme: customTheme
})
