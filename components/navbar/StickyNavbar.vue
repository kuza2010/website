<template>
    <c-flex overflow="hidden" pos="fixed"
            top="0" w="100%"
            :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
    >
        <slot/>
    </c-flex>
</template>

<script lang="js">
import { CFlex } from '@chakra-ui/vue'

export default {
    name: 'StickyNavBar',
    components: { CFlex },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
