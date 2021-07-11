<template>
    <c-box text-align="center">
        <c-heading ref="timelineAnchor">
            Timeline
        </c-heading>
        <c-box :class="colorMode==='light'?'timeline light':'timeline dark'">
            <c-box
                v-for="(timeline,idx) in timelines"
                :key="timeline.key"
            >
                <c-box
                    v-show="shouldShowTimeline(timeline)"
                    :class="getClassForArrow(idx)"
                >
                    <c-box
                        :class="getClassForTimelineBox(timeline)"
                        :style="getTimelineAlignment(idx)==='left'?{'margin-left':'auto'}:{'margin-right':'auto'}"
                        :max-width="['100%','70%']"
                    >
                        <c-flex
                            :flex-direction="['column-reverse', 'row']"
                            justify-content="space-between"
                            align-items="center"
                        >
                            <c-heading my="1" size="md">
                                {{ timeline.year }}
                            </c-heading>
                            <c-text
                                :bg="getTagBackgroundColor(idx)"
                                my="0" font-weight="semibold"
                                text-transform="uppercase"
                                px="3" py="1"
                                max-width="100%" ml="1"
                                rounded="md" white-space="nowrap"
                                text-overflow="ellipsis" overflow="hidden"
                                color="textBlack"
                            >
                                {{ timeline.tagText }}
                            </c-text>
                        </c-flex>
                        <c-text text-align="left">
                            {{ timeline.text }}
                        </c-text>
                    </c-box>
                </c-box>
            </c-box>
        </c-box>
        <c-box mt="2rem">
            <span :style="{ 'font-weight': 'bold'}">Show more</span>
            <c-switch color="brand.purple"
                      size="lg" ml="1rem"
                      @click="showAllTimeLine"
            />
        </c-box>
    </c-box>
</template>

<script lang="js">
import { CBox, CFlex, CSwitch, CHeading, CText } from '@chakra-ui/vue'
import Theme from '~/config/custom-theme'

export default {
    name: 'ADTimeline',
    components: {
        CBox,
        CFlex,
        CHeading,
        CText,
        CSwitch
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['timelines'],
    data () {
        return {
            align: 'left',
            showAdditionalTimelineInfo: false,
            colors: [
                Theme.colors.success,
                Theme.colors.info,
                Theme.colors.warning,
                Theme.colors.danger,
                Theme.colors.infoBold,
                Theme.colors.successBold,
                Theme.colors.warningBold,
                Theme.colors.dangerBold
            ]
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    methods: {
        shouldShowTimeline (timeline) {
            if (this.showAdditionalTimelineInfo) {
                return true
            }
            return !timeline.isAdditional
        },
        getTagBackgroundColor (idx) {
            while (idx >= this.colors.length) {
                idx = idx - this.colors.length
            }
            return this.colors[idx]
        },
        getTimelineAlignment (idx) {
            if (idx === 0) {
                return 'left'
            }
            return idx % 2 === 0 ? 'left' : 'right'
        },
        getClassForArrow (idx) {
            let clazz = this.getTimelineAlignment(idx) === 'left'
                ? 'arrow-colorMode-left'
                : 'arrow-colorMode-right'

            clazz = this.colorMode === 'dark'
                ? clazz.replace('colorMode', 'dark').concat(' container dark')
                : clazz.replace('colorMode', 'light').concat(' container light')

            return clazz
        },
        getClassForTimelineBox (timeline) {
            let clazz = ''

            if (this.colorMode === 'light') {
                clazz = clazz.concat('period light')
            } else {
                clazz = clazz.concat('period dark')
            }

            return clazz.concat(timeline.isAdditional ? ' additional' : '')
        },
        showAllTimeLine () {
            this.showAdditionalTimelineInfo = !this.showAdditionalTimelineInfo
            this.scrollToAnchor()
        },
        scrollToAnchor () {
            this.$refs.timelineAnchor.$el.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>

<style scoped lang="scss">

* {
    box-sizing: border-box;
}

/* The actual timeline (the vertical ruler) */
.timeline {
    position: relative;
    max-width: 1200px;

    &:after {
        content: '';
        position: absolute;
        width: 6px;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    &.dark:after {
        background-color: var(--black-accent);
    }

    &.light:after {
        background-color: var(--secondary-light-transparent);
    }
}

/* Container around content */
.container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;

    /* The circles on the timeline */
    &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        right: -12px;
        top: 20px;
        border-radius: 50%;
        z-index: 1;
    }

    &.light:after {
        background-color: var(--primary-light);
        border: 2px solid var(--secondary-light-transparent);
    }

    &.dark:after {
        background-color: var(--purple-400);
        border: 2px solid var(--purple-900);
    }
}

.period {
    padding: 1rem 1rem;
    border: 1px solid;
    border-radius: 5px;

    &.dark {
        background-color: var(--black-accent);
        border-color: var(--color-border-dark);

        &.additional {
            background-color: var(--primary-black);
            border-color: var(--color-border-dark);
        }
    }

    &.light {
        background-color: var(--primary-light);
        border-color: var(--color-border-light);

        &.additional {
            background-color: var(--purple-200);
            border-color: var(--color-border-light);
        }
    }

    &:not(:hover) {
        transition: all 0.5s ease 0s;
    }
}

/* TODO: are you kidding me */
.arrow-dark-left {
    left: 0;
    padding-left: 10px;

    /* Add arrows to the left container (pointing right) */
    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid var(--color-border-dark);
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent var(--color-border-dark);
    }
}

.arrow-dark-right {
    left: 50%;
    padding-right: 10px;

    /* Add arrows to the right container (pointing left) */
    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid var(--color-border-dark);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--color-border-dark) transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    &:after {
        left: -12px;
    }
}

.arrow-light-left {
    left: 0;
    padding-left: 10px;

    /* Add arrows to the left container (pointing right) */
    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid var(--color-border-light);
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent var(--color-border-light);
    }
}

.arrow-light-right {
    left: 50%;
    padding-right: 10px;

    /* Add arrows to the right container (pointing left) */
    &:before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid var(--color-border-light);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--color-border-light) transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    &:after {
        left: -12px;
    }
}

</style>
