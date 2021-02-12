<template>
    <c-flex flex-direction="column"
            m="0 1rem"
            :pt="[4,0]"
            align-items="center"
    >
        <c-heading pb="4" :mb="1"
                   border-bottom="1px"
                   :border-color="colorMode === 'dark' ?'primary' :'brand.purple.800'"
        >
            {{ title }}
        </c-heading>
        <empty-article v-if="!articleList || articleList.length === 0"/>
        <Article v-for="article in articleList" v-else
                 :key="article.title"
                 :title="article.title"
                 :is-new="article.isNew"
                 :data="article.publishedAt"
        />
    </c-flex>
</template>

<script>
import { CFlex, CHeading } from '@chakra-ui/vue'
import Article from '~/components/article/Article'
import EmptyArticle from '~/components/article/EmptyArticle'

export default {
    name: 'ArticleList',
    components: {
        Article,
        CFlex,
        CHeading,
        EmptyArticle
    },
    inject: ['$chakraColorMode'],
    props: {
        articleList: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
