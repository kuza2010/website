<template>
    <c-flex :w="size" :h="size"
            align-items="center" rounded="0.25rem"
            mx="4"
    >
        <c-button :class="colorMode === 'dark'? 'footer-link-dark' :'footer-link-light'"
                  border="none" cursor="pointer"
        >
            <c-link :href="href"
                    class="no-active-border"
                    mx="auto" is-external
            >
                <c-icon :name="icon" :size="iconSize"
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

<style scoped lang="scss">

.no-active-border{
    &:active {
        outline: none;
        box-shadow: none;
        border: none;
    }
}

.footer-link-dark {
    background: var(--black-accent);
    border: 1px solid var(--black-accent);

    &:hover {
        background: var(--primary-black);
        border: 1px solid var(--text-light);
    }
}

.footer-link-light {
    background: var(--purple-900);

    &:hover {
        background: var(--purple-600);
    }
}

</style>
