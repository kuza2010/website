<template>
    <chakra-theme-wrapper>
        <c-box class="app">
            <nav-bar/>
            <nuxt/>
        </c-box>
    </chakra-theme-wrapper>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import NavBar from '~/components/navbar'
import ChakraThemeWrapper from '~/components/chakra/ChakraThemeWrapper'

export default {
    name: 'App',
    components: {
        ChakraThemeWrapper,
        NavBar,
        CBox
    }
}
</script>
