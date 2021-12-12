<template>
    <c-box id="app" :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <a-d-navbar v-if="header"/>
        <c-flex
            :pt="[4, 24]"
            max-w="1150px" w="100%"
            mr="auto" ml="auto"
            flex-direction="column"
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
