<template>
    <c-pseudo-box
        as="button"
        border="0" p="0.75rem"
        color="white"
        rounded="0.5rem" transition="opacity 0.5s"
        animation="0.8s linear infinite rotate"
        background="none" font-weight="600"
        font-size="20px" line-height="24px"
        :class="colorMode === 'dark'? 'navbar-btn-dark' :'navbar-btn-light'"
    >
        {{ text }}
    </c-pseudo-box>
</template>

<script lang="js">
import { CPseudoBox } from '@chakra-ui/vue'

export default {
    name: 'NavbarButton',
    components: { CPseudoBox },
    inject: ['$chakraColorMode'],
    props: {
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}

</script>

<style scoped lang="scss">

button {
    cursor: pointer;

    &:focus {
        outline: none;
        border: 0;
    }

    &:active {
        outline: none;
        background: var(--transparent-white-15) !important;
        border: 0;
    }
}

.navbar-btn-dark {
    &:hover {
        background-color: var(--primary-black);
        color: white;
    }
}

.navbar-btn-light {
    &:hover {
        background-color: var(--marigold-hover);
        color: white;
    }
}
</style>
