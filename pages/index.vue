<template>
    <c-box>
        <a-d-summary/>
        <a-d-article-list :article-list="posts" title="Article list"/>
        <a-d-things-belt/>
    </c-box>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import moment from 'moment'
import ADSummary from '~/components/ADSummary'
import ADArticleList from '~/components/article/ADArticleList'
import ADThingsBelt from '~/components/things-belt/ADThingsBelt'

export default {
    name: 'Index',
    components: {
        ADThingsBelt,
        ADArticleList,
        ADSummary,
        CBox
    },
    inject: ['$chakraColorMode'],
    async asyncData ({ $content }) {
        const articles = await $content('articles')
            .only(['title', 'createdAt', 'languageTags', 'slug'])
            .sortBy('createdAt', 'desc')
            .limit(5)
            .fetch()

        return {
            posts: articles.map((elem) => {
                const monthAgo = moment().subtract(1, 'months')
                const createdAt = moment(elem.createdAt)

                return {
                    ...elem,
                    isNew: monthAgo.isBefore(createdAt)
                }
            })
        }
    },
    head () {
        return {
            title: 'AD website'
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
