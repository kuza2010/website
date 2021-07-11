<template>
    <c-stack :spacing="1"
             m="0" pt="2"
    >
        <c-heading v-if="description" as="h3"
                   size="sm" mb="0"
        >
            {{ description }}
        </c-heading>

        <c-text font-size="xs" m="0">
            Article last updated: {{ formatDate(lastUpdated) }}
        </c-text>

        <c-text v-if="tags.length > 0" m="0">
            <c-badge v-for="tag in tags"
                     :key="tag" mr="2"
            >
                {{ tag }}
            </c-badge>
        </c-text>
    </c-stack>
</template>

<script>
import { CHeading, CText, CBadge, CStack } from '@chakra-ui/vue'

export default {
    name: 'ADBlogSummary',
    components: {
        CHeading,
        CText,
        CBadge,
        CStack
    },
    props: {
        description: {
            type: String,
            required: false,
            default: ''
        },
        lastUpdated: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false,
            default: () => []
        }
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

<style scoped>

</style>
