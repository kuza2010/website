<template>
    <c-box id="app" :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <a-d-navbar v-if="header"/>
        <c-flex
            class="app-layout"
            flex-direction="column"
            :pt="[4, 24]"
        >
            <slot/>
        </c-flex>
        <a-d-footer v-if="footer"/>
    </c-box>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'
import ADNavbar from '~/components/navbar/ADNavbar'
import ADFooter from '~/components/footer/ADFooter'

export default {
    name: 'AppLayout',
    components: {
        CFlex,
        CBox,
        ADNavbar,
        ADFooter
    },
    inject: ['$chakraColorMode'],
    props: {
        header: {
            type: Boolean,
            required: false,
            default: false
        },
        footer: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
