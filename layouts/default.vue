<template>
    <chakra-theme-wrapper>
        <c-box class="app">
            <a-d-navbar/>
            <nuxt/>
            <a-d-footer/>
        </c-box>
    </chakra-theme-wrapper>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import ChakraThemeWrapper from '~/components/helpers/ChakraThemeWrapper'
import ADNavbar from '~/components/navbar/ADNavbar'
import ADFooter from '~/components/footer/ADFooter'

export default {
    name: 'App',
    components: {
        ADFooter,
        ChakraThemeWrapper,
        CBox,
        ADNavbar
    }
}
</script>
