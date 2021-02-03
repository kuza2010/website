<template>
    <c-box :class="colorMode === 'dark'? 'dark-mode' :'light-mode'">
        <c-flex max-w="1150px" w="100%"
                mr="auto" ml="auto"
                flex-direction="column"
        >
            <slot/>
        </c-flex>
    </c-box>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'

export default {
    name: 'Container',
    components: {
        CFlex,
        CBox
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
