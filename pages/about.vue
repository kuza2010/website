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
                    I spend my free time doing sport, cooking, listening to music and enjoying time with my closest
                    friends and
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
                    key: '1997',
                    isAdditional: false
                },
                {
                    text: 'Went to school and meet friends who helps me if I need it.',
                    tagText: 'School',
                    year: '2004',
                    key: '2004',
                    isAdditional: false
                },
                {
                    text: 'My parents gets first computer. It was Windows XP. I have used PC a lot, but not for programming, just playing.',
                    tagText: 'Baby step',
                    year: '2005',
                    key: '2005',
                    isAdditional: false
                },
                {
                    text: 'Only in 2007 I have started to use the internet. But I have no idea what was going on, just surfing.',
                    tagText: 'Internet',
                    year: '2007',
                    key: '2007',
                    isAdditional: true
                },
                {
                    text: 'My parents gave me my first phone - Sony Xperia K550i. With 128 Mb build in memory!!!',
                    tagText: 'Phone',
                    year: '2008',
                    key: '2008',
                    isAdditional: true
                },
                {
                    text: 'I was well known gamer, CS Source, CS Go and eventually Dota2. I have a local team! Good old days :)',
                    tagText: 'Game',
                    year: '2012',
                    key: '2012',
                    isAdditional: true
                },
                {
                    year: '2013-2015',
                    text: 'At about high school I have started to learn programming. Nothing interesting, just school-work and simple HTML. At that time I could not realize that it will become my profession.',
                    key: '2013-2015',
                    tagText: 'High school',
                    isAdditional: false
                },
                {
                    year: '2018',
                    text: 'In summer 2018 some company took a chance and hired me as a C# junior developer. I have worked there for 3 months and left the company at the beginning of spring.  I have recognized, that I dont like C#...',
                    tagText: 'First work',
                    key: '2015-2019',
                    isAdditional: true
                },
                {
                    year: '2015-2019',
                    text: 'Study at university for Information Technology. I have taken some Java courses and taught myself hard. In 2019 I have graduated with a bachelors degree.',
                    tagText: 'University',
                    key: '2015-2019',
                    isAdditional: false
                },
                {
                    year: '2018 - Present',
                    text: 'Currently I am working and studying at university, it takes a lot of my time and energy. But I am absolutely happy with it. I have tried many different projects and got valuable experience.',
                    tagText: 'Work hard',
                    key: '2020',
                    isAdditional: false
                },
                {
                    year: '2020',
                    text: 'Became interested in the Javascript language and front-end development. Understood that I want to be an full-stack engineer.',
                    tagText: 'Java Script',
                    key: '2020',
                    isAdditional: true
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
