<template>
    <nav :style="navStyle"
         :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
    >
        <c-flex mr="auto" ml="auto"
                max-w="1150px" w="100%"
                p="1rem" align-items="center"
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
    inject: ['$chakraColorMode', '$toggleColorMode'],
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
        },
        navStyle () {
            if (this.stickyBottom) {
                return { bottom: 0 }
            }
            return { top: 0 }
        }
    }
}
</script>

<style scoped lang="css">

nav {
    backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    position: fixed;
    z-index: 9999;
    width: 100%;
}
</style>
