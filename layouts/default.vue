<template>
    <chakra-theme-wrapper>
        <c-box class="app">
            <navbar/>
            <nuxt/>
        </c-box>
    </chakra-theme-wrapper>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import ChakraThemeWrapper from '~/components/chakra/ChakraThemeWrapper'
import Navbar from '~/components/navbar/Navbar'

export default {
    name: 'App',
    components: {
        ChakraThemeWrapper,
        CBox,
        Navbar
    }
}
</script>
