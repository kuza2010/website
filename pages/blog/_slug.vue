<template>
    <c-flex max-w="700px" w="100%"
            mr="auto" ml="auto"
            flex-direction="column"
    >
        <article>
            <c-heading :font-size="['2rem', '2.6rem']" align="center">
                {{ article.title }}
            </c-heading>
            <c-aspect-ratio-box :ratio="4/3"
                                max-w="400px" m="auto"
            >
                <c-image :src="`/articles/${article.img}`"
                         alt="sage mode naruto" object-fit="cover"
                />
            </c-aspect-ratio-box>
            <c-text>{{ article.description }}</c-text>
            <c-text font-size="xs">
                Article last updated: {{ formatDate(article.updatedAt) }}
            </c-text>
            <c-text v-if="isThereArticle(article)">
                Article Tag: {{ formatArticlesTag(article.languageTags) }}
            </c-text>

            <nuxt-content :document="article"/>
        </article>
    </c-flex>
</template>

<script>
import { CFlex, CHeading, CAspectRatioBox, CImage, CText } from '@chakra-ui/vue'

export default {
    components: {
        CFlex,
        CHeading,
        CAspectRatioBox,
        CImage,
        CText
    },
    async asyncData ({
        $content,
        params
    }) {
        const article = await $content('articles', params.slug).fetch()
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
        },
        formatArticlesTag (tags) {
            return tags.join(', ')
        },
        isThereArticle (article) {
            return article.languageTags && article.languageTags.length > 0
        }
    }

}
</script>

<style scoped lang="scss">

article {
}

</style>
