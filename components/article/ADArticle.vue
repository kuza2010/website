<template>
    <nuxt-link
        :to="toLink"
        class="article-brief"
    >
        <c-flex
            :mt="[4, 5]" :flex-direction="['column', 'row']"
            :align-items="['left', 'center']"
            :class="colorMode ==='dark' ? 'article-dark': 'article-light'"
            w="95%" rounded="md"
            p="1" justify-content="flex-start"
            cursor="pointer" @click.native="navigateToPost"
        >
            <c-badge
                v-if="isNew"
                :ml="[1,4]" :mt="[4,0]"
                py="1" px="2"
                w="36px" variant-color="brand.purple"
            >
                New!
            </c-badge>
            <c-box :ml="[1,4]">
                <c-text
                    font-size="sm" font-weight="medium"
                    mb="1"
                >
                    {{ data | articleDateFormat }}
                </c-text>
                <c-text
                    :mb="[0,1]" :white-space="['nowrap', 'normal']"
                    font-size="xl" font-weight="bold"
                    my="0" text-overflow="ellipsis"
                    overflow="hidden"
                >
                    {{ title }}
                </c-text>
            </c-box>
            <c-flex
                :ml="[0,'auto']" :mr="[0, 1]"
                :mb="[4,0]" :mt="[2,0]"
            >
                <a-d-tag
                    v-for="(tag, index) in tagArray.slice(0,4)"
                    :key="tag"
                    :text="tag"
                    :color="getColor(index)"
                    :hover-color="getHoverColor(index)"
                />
            </c-flex>
        </c-flex>
    </nuxt-link>
</template>

<script>
import { CBadge, CBox, CFlex, CText } from '@chakra-ui/vue'
import ADTag from '~/components/common/ADTag'

export default {
    name: 'ADArticle',
    components: {
        ADTag,
        CFlex,
        CBox,
        CText,
        CBadge
    },
    inject: ['$chakraColorMode'],
    // eslint-disable-next-line vue/require-prop-types
    props: ['id', 'title', 'data', 'isNew', 'tagArray'],
    data () {
        return {
            tagColors: [
                {
                    bg: 'dangerBold',
                    hc: 'danger'
                },
                {
                    bg: 'successBold',
                    hc: 'success'
                },
                {
                    bg: 'warningBold',
                    hc: 'warning'
                }
            ]
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        toLink () {
            return `/blog/${this.id}`
        }
    },
    methods: {
        getColor (idx) {
            if (idx >= this.tagColors.length) {
                return this.tagColors[idx % this.tagColors.length].bg
            }
            return this.tagColors[idx].bg
        },
        getHoverColor (idx) {
            if (idx >= this.tagColors.length) {
                return this.tagColors[idx % this.tagColors.length].hc
            }
            return this.tagColors[idx].hc
        },
        navigateToPost () {
            this.$router.push({
                path: `/blog/${this.id}`
            })
        }
    }
}
</script>

<style scoped lang="scss">
@use "assets/abstracts/colors";

.article-brief {
    width: 100%;
    display: flex;
    justify-content: center;

    .article-dark {
        &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
            background-color: colors.$secondary-dark;
            transition: all 0.5s ease 0s;
        }

        &:not(:hover) {
            transition: all 0.5s ease 0s;
        }
    }

    .article-light {

        box-shadow: 5px 5px 10px 0 colors.$color-border-light;

        &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
            background-color: colors.$purple-200;
            transition: all 0.5s ease 0s;
        }

        &:not(:hover) {
            transition: all 0.5s ease 0s;
        }
    }

}

</style>
