<template>
    <c-box :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <a-d-navbar/>
        <c-flex :pt="[4, 24]"
                max-w="1150px" w="100%"
                mr="auto" ml="auto"
                flex-direction="column"
        >
            <slot/>
        </c-flex>
        <a-d-footer/>
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
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
