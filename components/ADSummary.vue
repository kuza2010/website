<template>
    <c-flex
        :flex-direction="['column-reverse', 'row']"
        m="0 1rem" justify-content="space-between"
    >
        <c-box
            :mr="[0,12]"
            :mt="[2,12]"
            :style="!showAvatar? {'margin-right': '0px'}:{}"
        >
            <c-heading :font-size="['2rem', '2.6rem']" mt="0">
                Holla! I'm Artyom Danilin. I'm a software engineer.
            </c-heading>
            <c-text
                :font-size="['1rem', '1.25rem', '1.3rem']"
                font-weight="normal" color="textSecondary"
            >
                I am keen on programming and dedicate to be a full-stack engineer in the nearest future 📚.
                Here is my personal slice of the Internet where you can get to know me better.
            </c-text>
            <c-flex
                justify-content="flex-start"
                class="button-line"
            >
                <a-d-button size="lg" @onClick="onStuffClick">
                    <c-text font-size="lg" mr="5px">
                        🏆
                    </c-text>
                    My stuff
                </a-d-button>
                <a-d-button
                    :mt="[1,0]"
                    size="lg"
                    @onClick="onFeedbackClick"
                >
                    <c-text font-size="lg" mr="5px">
                        🎙️
                    </c-text>
                    Give feedback
                </a-d-button>
            </c-flex>
        </c-box>
        <c-box
            v-if="showAvatar"
            :mb="[4,0]"
            :mt="[2,12]"
        >
            <c-image
                :rounded="['full', 16]"
                :src="'./me-865.jpg'"
                :m="['auto']"
                :w="['3xs', 'sm']"
                alt="The best developer"
                display="block" ignore-fallback
            />
        </c-box>
    </c-flex>
</template>

<script>
import { CBox, CFlex, CHeading, CImage, CText } from '@chakra-ui/vue'
import ADButton from '~/components/common/buttons/ADButton'

export default {
    name: 'ADSummary',
    components: {
        ADButton,
        CFlex,
        CBox,
        CImage,
        CHeading,
        CText
    },
    inject: ['$chakraColorMode'],
    data () {
        return {
            // TODO: how can i get width before rendering
            width: 1024
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        showAvatar () {
            return this.width < 600 || this.width > 900
        }
    },
    destroyed () {
        window.removeEventListener('resize', this.onWindowResize)
    },
    mounted () {
        this.$nextTick(function () {
            this.onWindowResize()
        })
        window.addEventListener('resize', this.onWindowResize)
    },
    methods: {
        onStuffClick () {

        },
        onFeedbackClick () {
            this.$toast({
                title: 'Give me feedback',
                description: `Please send your feedback here: ${this.$config.email} `,
                status: 'success',
                position: window.innerWidth <= 600 ? 'top-left' : 'bottom',
                duration: 10000
            })
        },
        onWindowResize () {
            this.width = window.innerWidth
        }
    }
}
</script>

<style scoped lang="scss">

.button-line {
    flex-direction: row;

    button:first-child {
        margin-right: 1rem;
    }
}

@media screen and (max-width: 830px) {
    .button-line {
        flex-direction: column;

        button:first-child {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }
}

</style>
