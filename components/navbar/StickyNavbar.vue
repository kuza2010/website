<template>
    <nav>
        <c-flex
            overflow="hidden"
            pos="fixed"
            z-index="9999"
            top="0"
            w="100%"
            class="navbar"
            :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
        >
            <c-box mr="auto" ml="auto"
                   max-w="1150px" w="100%"
            >
                <slot/>
            </c-box>
        </c-flex>
    </nav>
</template>

<script lang="js">
import { CBox, CFlex } from '@chakra-ui/vue'

export default {
    name: 'StickyNavBar',
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

<style scoped lang="css">

.navbar {
    backdrop-filter: saturate(180%) blur(20px);
}
</style>
