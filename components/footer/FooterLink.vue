<template>
    <c-flex
        mx="4"
        rounded="0.25rem"
        align-items="center"
        :w="size"
        :h="size"
    >
        <c-button
            :class="colorMode === 'dark'? 'footer-link-dark' :'footer-link-light'"
            border="none" cursor="pointer"
        >
            <c-link
                :href="href"
                class="no-active-border"
                mx="auto" is-external
            >
                <c-icon
                    :name="icon" :size="iconSize"
                    fill="primary"
                />
            </c-link>
        </c-button>
    </c-flex>
</template>

<script>
import { CButton, CFlex, CIcon, CLink } from '@chakra-ui/vue'

export default {
    name: 'FooterLink',
    components: {
        CButton,
        CIcon,
        CLink,
        CFlex
    },
    inject: ['$chakraColorMode'],
    props: {
        href: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        iconSize: {
            type: String,
            required: false,
            default: '25px'
        },
        size: {
            type: String,
            required: false,
            default: '40px'
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style lang="scss">

.no-active-border{
    &:active {
        outline: none;
        box-shadow: none;
        border: none;
    }
}

</style>
