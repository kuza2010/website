<template>
    <nav
        :style="stickyBottom ? {bottom: 0} : {top: 0}"
        :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
    >
        <c-flex
            max-w="1150px" w="100%"
            align-items="center"
            :justify-content="justifyContent"
        >
            <slot/>
        </c-flex>
    </nav>
</template>

<script lang="js">
import { CFlex } from '@chakra-ui/vue'

export default {
    name: 'StickyNavBar',
    components: {
        CFlex
    },
    inject: ['$chakraColorMode'],
    props: {
        stickyBottom: {
            type: Boolean,
            default: false,
            required: false
        },
        justifyContent: {
            type: String,
            default: 'flex-end',
            required: false
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
