<template>
    <c-flex m="0 1rem" flex-direction="column"
            align-items="center"
    >
        <c-box :mt="[6,12]">
            <c-heading mt="0" :mb="[4,8]"
                       text-align="center" mx="auto"
            >
                About me
            </c-heading>
            <c-stack text-align="justify">
                <c-text :font-size="['md','lg']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae venenatis nulla. Duis
                    pellentesque
                    sapien consequat nulla pharetra, ornare feugiat eros accumsan. Class aptent taciti sociosqu ad
                    litora
                    torquent per conubia nostra, per inceptos himenaeos. Integer rhoncus congue elementum. Curabitur
                    pellentesque aliquam sem, sed auctor massa condimentum eget. Donec tincidunt eget quam nec
                    elementum.
                </c-text>
                <c-text :font-size="['md','lg']">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae venenatis nulla. Duis
                    pellentesque sapien consequat nulla pharetra, ornare feugiat eros accumsan. Class aptent taciti
                    sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos. Integer rhoncus congue elementum.
                    Curabitur
                    pellentesque aliquam sem, sed auctor massa condimentum eget. Donec tincidunt eget quam nec
                    elementum.
                </c-text>
                <c-heading as="h4" size="lg">
                    Get in touch
                </c-heading>
                <c-text :font-size="['md','lg']" mt="0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae venenatis nulla. Duis
                    pellentesque sapien consequat nulla pharetra, ornare feugiat eros accumsan.
                </c-text>
                <c-flex :font-size="['lg','xl']"
                        ml="auto" flex-direction="column"
                >
                    <c-box>
                        📭
                        <c-link :style="linkStyle" :href="`mailto:${myEmail}`"
                                :class="colorMode === 'dark'? 'link-dark' :'link-light'"
                        >
                            {{ myEmail }}
                        </c-link>
                    </c-box>
                    <c-box>
                        🦑
                        <c-link :style="linkStyle" :href="myGithub"
                                :class="colorMode === 'dark'? 'link-dark' :'link-light'"
                        >
                            @kuza2010
                        </c-link>
                    </c-box>
                </c-flex>
            </c-stack>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import { CBox, CLink, CFlex, CStack, CHeading, CText } from '@chakra-ui/vue'

export default {
    name: 'About',
    components: {
        CBox,
        CLink,
        CFlex,
        CText,
        CHeading,
        CStack
    },
    inject: ['$chakraColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        myEmail () {
            return this.$config.email
        },
        myGithub () {
            return this.$config.github
        },
        linkStyle () {
            return {
                'font-weight': '600',
                'letter-spacing': '-1px'
            }
        }
    }
}
</script>

// https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/
<style scoped lang="scss">

.link-light {
    overflow: hidden;
    background: linear-gradient(to right, var(--info-bold), var(--info-bold) 50%, var(--black-accent) 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none;

    &:hover {
        background-position: 0 100%;
    }

    & :visited {
        color: var(--text-black) !important;
    }

    & :active {
        color: var(--text-black) !important
    }

}

.link-dark {
    overflow: hidden;
    background: linear-gradient(to right, var(--warning-bold), var(--warning-bold) 50%, var(--text-light) 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 275ms ease;
    text-decoration: none;

    &:hover {
        background-position: 0 100%;
    }

    & :visited {
        color: var(--text-light) !important;
    }

    & :active {
        color: var(--text-light) !important
    }

}

</style>
