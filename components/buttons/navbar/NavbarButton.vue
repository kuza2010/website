<template>
    <!-- render button with text -->
    <c-pseudo-box v-if="!icon"
                  as="button"
                  border="0" p="0.75rem"
                  color="white"
                  rounded="0.5rem"
                  background="none" font-weight="600"
                  font-size="20px" line-height="24px"
                  :class="colorMode === 'dark'? 'navbar-btn-dark' :'navbar-btn-light'"
    >
        {{ text }}
    </c-pseudo-box>
    <!-- render button with icon -->
    <c-pseudo-box v-else
                  as="button"
                  border="0" p="0.75rem"
                  color="white"
                  rounded="0.5rem" transition="opacity 0.5s"
                  background="none" font-weight="600"
                  font-size="20px" line-height="24px"
                  :class="colorMode === 'dark'? 'navbar-btn-dark' :'navbar-btn-light'"
                  @click="onButtonClick"
    >
        {{ text }}
        <c-icon
            :name="icon"
            :color="color"
            :aria-label="ariaLabel || icon"
            :size="iconSize"
        />
    </c-pseudo-box>
</template>

<script lang="js">
import { CIcon, CPseudoBox } from '@chakra-ui/vue'

export default {
    name: 'NavbarButton',
    components: {
        CPseudoBox,
        CIcon
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
        color: {
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

<style lang="scss">

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
