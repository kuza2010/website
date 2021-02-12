<template>
    <c-box>
        <Summary/>
        <article-list :article-list="posts" title="Article list"/>
    </c-box>
</template>

<script lang="js">
import Summary from '~/components/Summary'
import ArticleList from '~/components/article/ArticleList'

export default {
    name: 'Index',
    components: {
        ArticleList,
        Summary
    },
    inject: ['$chakraColorMode', '$toggleColorMode'],
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
