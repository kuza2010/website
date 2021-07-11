<template>
    <c-flex max-w="700px" w="100%"
            mr="auto" ml="auto"
            flex-direction="column"
    >
        <article>
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
            <p>Article Tag: {{ article.tag }}</p>

            <nuxt-content :document="article"/>
        </article>
    </c-flex>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'
export default {
    components: { CFlex },
    async asyncData ({
        $content,
        params
    }) {
        const article = await $content('articles', params.slug).fetch()

        console.log(article)
        return { article }
    },
    methods: {
        formatDate (date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('en', options)
        }
    }

}
</script>

<style scoped lang="scss">

article {
}

</style>
