<template>
    <c-flex :pt="[4, 24]" :flex-direction="['column-reverse', 'row']"
            m=" 0 1rem" justify-content="space-between"
    >
        <c-box :mr="[0,12]" :mt="[2,12]">
            <c-heading :font-size="['2rem', '2.6rem']"
                       mt="0"
            >
                Hey! I'm Artyom Danilin. I'm a software engineer and NNSTU student.
            </c-heading>
            <c-text font-weight="normal"
                    class="github-text-secondary"
                    color="textSecondary"
                    :font-size="['1rem', '1.25rem', '1.3rem']"
            >
                In 2018 I successfully graduated from
                <link-with-icon icon="external-link-alt" text="NNSTU"
                                to="#" is-external-link
                />
                with bachelor's degree and continue my education as a master. I am very keen on programming, dedicate to
                be a full-stack engineer 📚. Here in my personal slice of the internet you can get to know me better.
            </c-text>
            <c-button-group spacing="4">
                <a-d-button size="lg">
                    <c-text font-size="lg" mr="5px">
                        🏆
                    </c-text>
                    My stuff
                </a-d-button>
                <a-d-button size="lg">
                    <c-text font-size="lg" mr="5px">
                        🎙️
                    </c-text>
                    Give feedback
                </a-d-button>
            </c-button-group>
        </c-box>
        <c-box :mb="[4,0]" :mt="[2,12]">
            <c-image :rounded="['full', 16]"
                     :src="'./me.jpg'"
                     :m="['auto']"
                     :w="['3xs', 'sm']"
                     alt="The best developer"
                     display="block" ignore-fallback
            />
        </c-box>
    </c-flex>
</template>

<script>
import { CBox, CButton, CButtonGroup, CFlex, CHeading, CImage, CText } from '@chakra-ui/vue'
import LinkWithIcon from '~/components/text/LinkWithIcon'
import MyButton from '~/components/buttons/ADButton'
import ADButton from '~/components/buttons/ADButton'

export default {
    name: 'Summary',
    components: {
        ADButton,
        MyButton,
        LinkWithIcon,
        CFlex,
        CBox,
        CImage,
        CHeading,
        CText,
        CButton,
        CButtonGroup
    },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
