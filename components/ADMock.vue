<template>
    <c-flex align-items="center"
            justify-content="center"
            class="all-height"
    >
        <c-box mb="24">
            <c-heading
                as="h1" :font-size="['5xl', '6xl']"
                mx="auto" mb="0"
            >
                <c-icon :name="icon"/>
                {{ status }}
            </c-heading>
            <c-text
                pt="0"
                font-size="md"
                font-weight="semibold"
            >
                {{ fallbackMessage }}
            </c-text>
            <nuxt-link to="/" mt="4">
                <a-d-button size="sm">
                    Go home
                </a-d-button>
            </nuxt-link>
        </c-box>
    </c-flex>
</template>

<script>
import { CFlex, CBox, CIcon, CHeading, CText } from '@chakra-ui/vue'
import ADButton from '~/components/common/buttons/ADButton'

export default {
    name: 'ADMock',
    components: {
        CFlex,
        CHeading,
        CIcon,
        CText,
        CBox,
        ADButton
    },
    layout: 'with-header',
    // eslint-disable-next-line vue/require-prop-types
    props: {
        status: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        fallbackMessage: {
            type: String,
            required: false,
            default: 'currently this page is in development... :('
        }
    }
}
</script>

<style scoped lang="scss">

a {
    text-decoration: none;
}

.all-height {
    height: calc(100vh - 6rem)
}
</style>
