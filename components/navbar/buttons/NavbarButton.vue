<template>
    <!-- render button with text -->
    <c-pseudo-box
        as="button"
        border="0"
        p="0.75rem"
        rounded="md"
        background="none"
        font-size="20px"
        line-height="24px"
        :class="colorMode === 'dark'? 'navbar-btn-dark' :'navbar-btn-light'"
        @click.native="onButtonClick"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <c-icon
            v-if="iconLeft"
            :name="iconLeft"
            pr="1"
            :color="color"
            :aria-label="ariaLabel || iconLeft"
            :size="iconSize"
        />
        {{ text }}
        <c-icon
            v-if="iconRight"
            :name="iconRight"
            :color="color"
            :aria-label="ariaLabel || iconRight"
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
        iconRight: {
            type: String,
            default: '',
            required: false
        },
        iconLeft: {
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
    data () {
        return {
            hover: false
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    watch: {
        hover (newValue) {
            this.$emit('onHover', newValue)
        }
    },
    methods: {
        onButtonClick (event) {
            this.$emit('onButtonClick', event)
        }
    }
}

</script>
