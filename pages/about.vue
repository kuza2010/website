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
            <c-stack
                text-align="justify"
                :mx="[0,6,0]"
            >
                <c-text :font-size="['md','lg']">
                    Hi there! I'm Artyom Danilin. I'm a developer,
                    <span :style="{'text-decoration': 'line-through'}">budding writer</span>
                    and open source lover. I'm a second year master at
                    <link-with-icon icon="external-link-alt"
                                    text="NNSTU"
                                    to="#" is-external-link
                    />
                    I work at MERA-NN company in Nizhny Novgorod as a software developer 👨‍💻<br>
                </c-text>
                <c-text :font-size="['md','lg']">
                    Programming is my addiction. I've been programming since high school.
                    At university I had a deal with C/C++/C# but some time later I got an interest in Java language.
                    Now I continue working with Java and studying some frontend stuff. I am going to be a
                    <span :style="{ 'font-weight': 'bold'}">full-stack developer</span>
                </c-text>
                <c-text>
                    I grew up here in Nizhny Novgorod, went to school, graduating with a beholders degree in Computer
                    Engineering.
                    I spend my free time doing sport, cooking, listening to music and enjoying time with my closest friends and
                    family.
                </c-text>
                <c-heading as="h4" size="lg">
                    Get in touch
                </c-heading>
                <c-text :font-size="['md','lg']" mt="0">
                    I hope I picked up a good color scheme for my site and your eyes don't hurt.
                    If there is anything you would like to talk about please, feel free and drop me a message by email.
                    It's a big pleasure to hear you!
                </c-text>
                <c-flex :font-size="['lg','xl']"
                        :ml="['0', 'auto']" flex-direction="column"
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
            <a-d-timeline :timelines="timeline"/>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import { CBox, CLink, CFlex, CStack, CHeading, CText } from '@chakra-ui/vue'
import ADTimeline from '~/components/timeline/ADTimeline'
import LinkWithIcon from '~/components/common/LinkWithIcon'

export default {
    name: 'About',
    components: {
        LinkWithIcon,
        ADTimeline,
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
        timeline () {
            return [
                {
                    text: 'Start my journey in Nizhny Novgorod.',
                    tagText: 'Life started',
                    year: '1997',
                    key: '1997-born',
                    align: 'left'
                },
                {
                    text: '',
                    tagText: 'baby step baby step  step',
                    year: '2004',
                    key: '2004-phone',
                    align: 'right'
                },
                {
                    year: '2020',
                    text: 'Text text text',
                    align: 'left',
                    key: '2023-text',
                    tagText: 'baby step'
                },
                {
                    year: '2022',
                    text: 'Text text text',
                    align: 'right',
                    tagText: 'baby step baby step  step',
                    key: '2024-text'
                },
                {
                    year: '2020',
                    text: 'Text text text',
                    align: 'left',
                    key: '2025-text',
                    tagText: 'baby step'
                },
                {
                    year: '2022',
                    text: 'Text text text',
                    align: 'right',
                    tagText: 'baby step baby step  step',
                    key: '2026-text'
                },
                {
                    year: '2020',
                    text: 'Text text text',
                    align: 'left',
                    key: '2027-text',
                    tagText: 'baby step'
                },
                {
                    year: '2022',
                    text: 'Text text text',
                    align: 'right',
                    tagText: 'baby step baby step  step',
                    key: '2028-text'
                }
            ]
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
