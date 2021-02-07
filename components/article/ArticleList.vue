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
        <Article title="This is title This is title This is title This is title !!!!!!!!!!!!!!!!!" data="2020-12-12"
                 :is-new="true"
        />
        <Article title="This is title" data="2020-12-12"/>
        <Article title="This is title" data="2020-12-12"/>
        <Article title="This is title" data="2020-12-12"/>
    </c-flex>
</template>

<script>
import { CFlex, CHeading } from '@chakra-ui/vue'
import Article from '~/components/article/Article'

export default {
    name: 'ArticleList',
    components: {
        Article,
        CFlex,
        CHeading
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
