<template>
    <layout>
        <Summary/>
        <article-list :article-list="[{id:1, title:'title'}]"
                      title="Article list"
        />
    </layout>
</template>

<script lang="js">
import Summary from '~/components/Summary'
import Layout from '~/components/AppLayout'
import ArticleList from '~/components/article/ArticleList'

export default {
    name: 'Index',
    components: {
        ArticleList,
        Layout,
        Summary
    },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
