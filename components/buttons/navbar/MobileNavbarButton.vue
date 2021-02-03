<template>
    <c-pseudo-box
        as="button"
        border="0" p="0.25rem"
        color="white"
        rounded="0.5rem" transition="opacity 0.5s"
        background="none" font-weight="300"
        font-size="12px" line-height="24px"
        :class="colorMode === 'dark'? 'navbar-btn-dark' :'navbar-btn-light'"
        @click="onButtonClick"
    >
        <c-flex flex-direction="column"
                align-items="center" justify-content="center"
        >
            <c-icon
                :name="icon"
                :aria-label="ariaLabel || icon"
                :size="iconSize"
                p="0.25rem"
            />
            {{ text }}
        </c-flex>
    </c-pseudo-box>
</template>

<script>
import { CFlex, CIcon, CPseudoBox } from '@chakra-ui/vue'

export default {
    name: 'MobileNavbarButton',
    components: {
        CPseudoBox,
        CIcon,
        CFlex
    },
    inject: ['$chakraColorMode'],
    props: {
        text: {
            type: String,
            default: '',
            required: false
        },
        icon: {
            type: String,
            default: '',
            required: false
        },
        iconSize: {
            type: String,
            default: '24px',
            required: false
        },
        ariaLabel: {
            type: String,
            default: '',
            required: false
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    methods: {
        onButtonClick (event) {
            this.$emit('onButtonClick', event)
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
