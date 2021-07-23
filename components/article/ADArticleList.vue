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

        <a-d-empty-article v-if="!articleList || articleList.length === 0"/>

        <a-d-article v-for="article in articleList" v-else
                     :id="article.slug" :key="article.title"
                     :title="article.title" :is-new="article.isNew"
                     :data="article.created" :tag-array="article.languageTags"
        />
    </c-flex>
</template>

<script>
import { CFlex, CHeading } from '@chakra-ui/vue'
import ADArticle from '~/components/article/ADArticle'
import ADEmptyArticle from '~/components/article/ADEmptyArticle'

export default {
    name: 'ADArticleList',
    components: {
        ADArticle,
        CFlex,
        CHeading,
        ADEmptyArticle
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
