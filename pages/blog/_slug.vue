<template>
    <c-flex max-w="700px" w="100%"
            mx="auto" flex-direction="column"
    >
        <article>
            <c-heading :font-size="['2rem', '2.6rem']" align="center">
                {{ article.title }}
            </c-heading>
            <a-d-blog-main-image :image="article.img"/>
            <c-box mx="4">
                <a-d-blog-summary
                    :tags="article.languageTags"
                    :last-updated="article.updatedAt"
                    :description="article.description"
                />
                <nuxt-content :document="article"/>
                <link-with-icon icon="highlighter" text="Change this"
                                :to="`${$config.github}/website/tree/main/content${article.path}.md`"
                                is-external-link left
                />
                page on github.
            </c-box>
        </article>
    </c-flex>
</template>

<script>
import { CFlex, CHeading, CBox } from '@chakra-ui/vue'
import ADBlogSummary from '~/components/blog/ADBlogSummary'
import ADBlogMainImage from '~/components/blog/ADBlogMainImage'
import LinkWithIcon from '~/components/common/LinkWithIcon'

export default {
    components: {
        LinkWithIcon,
        ADBlogMainImage,
        ADBlogSummary,
        CFlex,
        CHeading,
        CBox
    },
    async asyncData ({
        $content,
        params
    }) {
        const article = await $content('articles', params.slug).fetch()
        return { article }
    }
}
</script>

<style lang="scss">

</style>
