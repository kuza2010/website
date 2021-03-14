<template>
    <c-box>
        <a-d-summary/>
        <a-d-article-list :article-list="posts" title="Article list"/>
        <a-d-things-belt/>
    </c-box>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
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
    head () {
        return {
            title: 'Danilin Artyom – developer, creator, student'
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        },
        posts () {
            return this.$config.sortedPosts
        }
    }
}
</script>
