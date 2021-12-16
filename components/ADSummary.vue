<template>
    <c-flex
        justify-content="space-between"
        :flex-direction="['column-reverse', 'row']"
    >
        <c-box
            :mr="[0,12]"
            :mt="[2,12]"
            :style="!showAvatar? {'margin-right': '0px'}:{}"
        >
            <c-heading
                my="0"
                :font-size="['4xl', '5xl']"
            >
                Artyom Danilin
            </c-heading>
            <c-text my="1">
                Software designer at <b>Orion Innovation</b>
                <br>
                Experienced with Java / Android / JavaScript.
            </c-text>
            <c-text
                font-weight="normal"
                class="text-secondary"
                :font-size="['md', 'xl', '1.3rem']"
            >
                Working with a varied range of technologies. With an emphasis on backend development.
                <br>
                Here is my personal slice of the Internet where you can get to know me better.
            </c-text>
            <c-flex
                justify-content="flex-start"
                class="button-line"
            >
                <a-d-button
                    size="lg"
                    :class="`${colorMode}-button-link`"
                >
                    <nuxt-link to="/blog">
                        My stuff
                    </nuxt-link>
                </a-d-button>
                <a-d-button
                    size="lg"
                    @onClick="onFeedbackClick"
                >
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
@use 'assets/abstracts' as *;

.light-button-link {
    & a {
        color: $white;

        &:active {
            color: $white;
        }
    }
}

.dark-button-link {
    & a {
        color: $text-dark;

        &:active {
            color: $text-dark;
        }
    }
}

.button-line {
    flex-direction: row;

    & :not(:last-child) {
        margin-right: $default-margin;
    }
}

@media screen and (max-width: 830px) {
    .button-line {
        flex-direction: column;

        button:first-child {
            margin-right: 0;
            margin-bottom: $default-margin;
        }
    }
}

</style>
