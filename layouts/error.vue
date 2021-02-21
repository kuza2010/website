<template>
    <c-flex align-items="center"
            justify-content="center"
            class="all-height"
    >
        <c-box mb="24">
            <c-heading
                as="h1" font-size="6xl"
                mx="auto" mb="0"
            >
                <c-icon name="snowplow"/>
                404
            </c-heading>
            <c-text
                pt="0" mt="0"
                font-size="md"
                font-weight="semibold"
            >
                the page you are looking for is not found...
            </c-text>
            <nuxt-link to="/" mt="4">
                <a-d-button size="sm">
                    Go home
                </a-d-button>
            </nuxt-link>
        </c-box>
    </c-flex>
</template>

<script lang="js">
import { CFlex, CBox, CIcon, CHeading, CText } from '@chakra-ui/vue'
import ADButton from '~/components/common/buttons/ADButton'

export default {
    name: 'Error',
    components: {
        CFlex,
        CHeading,
        CIcon,
        CText,
        CBox,
        ADButton
    },
    layout: 'error-layout'
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
