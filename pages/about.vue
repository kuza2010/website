<template>
    <c-flex
        m="0 1rem"
        flex-direction="column"
        align-items="center"
    >
        <c-box :mt="[6,12]">
            <c-heading
                :mb="[4,8]"
                mt="0" mx="auto"
                text-align="center"
            >
                About me
            </c-heading>
            <c-stack
                :mx="[0,6,0]"
                text-align="justify"
            >
                <c-text :font-size="['md','lg']">
                    Hi there! I'm Artyom Danilin. I'm a developer,
                    <span :style="{'text-decoration': 'line-through'}">budding writer</span>
                    and open source lover. I work in Nizhny Novgorod as a software developer. Always open to new
                    interesting projects. 👨‍💻<br>
                </c-text>
                <c-text :font-size="['md','lg']">
                    Programming is my addiction. I've been programming since high school.
                    At university I had a deal with C/C++/C# but some time later I got an interest in Java language.
                    Now I continue working with Java and studying some frontend stuff. I am going to be a
                    <span :style="{ 'font-weight': 'bold'}">full-stack developer.</span>
                </c-text>
                <c-text :font-size="['md','lg']">
                    I grew up here in Nizhny Novgorod, went to school, graduating with a beholders degree in Computer
                    Engineering. I spend my free time doing sport, cooking, listening to music and enjoying time with
                    my closest friends and family. Head over to my
                    <link-with-icon
                        icon="external-link-alt"
                        text="LinkedIn"
                        :to="myLinkedIn" is-external-link
                    />
                    , if you have something for me.
                </c-text>
                <c-heading as="h4" size="lg">
                    Get in touch
                </c-heading>
                <c-text :font-size="['md','lg']" mt="0">
                    I hope I picked up a good color scheme for my site and your eyes don't hurt.
                    If there is anything you would like to talk about please, feel free and drop me a message by email.
                    It's a big pleasure to hear you!
                </c-text>
                <c-flex
                    :font-size="['lg','xl']"
                    :ml="['0', 'auto']" flex-direction="column"
                >
                    <c-box>
                        📭
                        <a-d-text-link
                            :style="linkStyle"
                            :href="`mailto:${myEmail}`"
                            :text="myEmail"
                        />
                    </c-box>
                    <c-box>
                        🦑
                        <a-d-text-link
                            :style="linkStyle"
                            :href="myGithub"
                            text="@kuza2010"
                        />
                    </c-box>
                </c-flex>
            </c-stack>
            <a-d-timeline :timelines="timeline"/>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import { CBox, CFlex, CStack, CHeading, CText } from '@chakra-ui/vue'
import ADTimeline from '~/components/timeline/ADTimeline'
import LinkWithIcon from '~/components/common/LinkWithIcon'
import ADTextLink from '~/components/common/ADTextLink'
import timeline from '~/static/json/timeline.json'

export default {
    name: 'About',
    components: {
        ADTextLink,
        LinkWithIcon,
        ADTimeline,
        CBox,
        CFlex,
        CText,
        CHeading,
        CStack
    },
    inject: ['$chakraColorMode'],
    asyncData ({ params }) {
        return { timeline }
    },
    head () {
        return {
            title: 'About me - Artyom Danilin'
        }
    },
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
        myLinkedIn () {
            return this.$config.linkedIn
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

<style scoped lang="scss">

</style>
