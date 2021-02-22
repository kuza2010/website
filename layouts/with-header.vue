<template>
    <chakra-theme-wrapper>
        <app-layout header>
            <nuxt/>
        </app-layout>
    </chakra-theme-wrapper>
</template>

<script>
import ChakraThemeWrapper from '~/components/helpers/ChakraThemeWrapper'
import AppLayout from '~/components/AppLayout'

export default {
    name: 'ErrorLayout',
    components: {
        AppLayout,
        ChakraThemeWrapper
    }
}
</script>

<style scoped>

</style>
