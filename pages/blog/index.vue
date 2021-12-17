<template>
    <c-flex
        m="0 1rem"
        flex-direction="column"
        align-items="center" class="all-height"
    >
        <c-box :mt="[6,12]">
            <c-heading
                :mb="[1]"
                mt="0" mx="auto"
                text-align="center"
            >
                Blog
            </c-heading>
            <c-stack
                :mx="[0,6,0]"
                text-align="justify"
            >
                <c-text
                    :font-size="['1rem', '1.25rem', '1.3rem']"
                    font-weight="normal" color="textSecondary"
                    max-w="70%" mx="auto"
                    text-align="center"
                >
                    Here I share some of my ideas, thinking, insights and views on life. Take a cup of coffee and just
                    make yourself at home...
                </c-text>
                <c-box>
                    <a-d-search-input/>
                </c-box>
                <a-d-article-list :article-list="posts" title="Article list"/>
            </c-stack>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import moment from 'moment'
import { CFlex, CBox, CHeading, CText, CStack } from '@chakra-ui/vue'
import ADArticleList from '~/components/article/ADArticleList'
import ADSearchInput from '~/components/form/ADSearchInput'

export default {
    name: 'Blog',
    components: {
        CHeading,
        CFlex,
        CStack,
        CText,
        CBox,
        ADArticleList,
        ADSearchInput
    },
    async asyncData ({ $content }) {
        const articles = await $content('articles')
            .only(['title', 'created', 'languageTags', 'slug'])
            .sortBy('created', 'desc')
            .limit(5)
            .fetch()

        return {
            posts: articles.map((elem) => {
                const monthAgo = moment().subtract(1, 'months')
                const createdAt = moment(elem.created)
                return {
                    ...elem,
                    isNew: monthAgo.isBefore(createdAt)
                }
            }).sort((a, b) => a.created < b.created ? 1 : (a.created > b.created ? 0 : 1))
        }
    },
    head () {
        return {
            title: 'Blog - in dev'
        }
    }
}
</script>

<style scoped lang="scss">
.all-height {
    height: 70vh
}
</style>
