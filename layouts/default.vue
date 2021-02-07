<template>
    <chakra-theme-wrapper>
        <app-layout>
            <nuxt/>
        </app-layout>
    </chakra-theme-wrapper>
</template>

<script lang="js">
import ChakraThemeWrapper from '~/components/helpers/ChakraThemeWrapper'
import AppLayout from '~/components/AppLayout'

export default {
    name: 'App',
    components: {
        AppLayout,
        ChakraThemeWrapper
    }
}
</script>
