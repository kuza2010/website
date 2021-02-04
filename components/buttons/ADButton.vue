<template>
    <c-button v-if="$slots"
              v-bind="$attrs"
              variant-color="brand.purple"
              border="none"
    >
        <slot/>
    </c-button>

    <c-button v-else
              v-bind="$attrs"
              variant-color="brand.purple"
              border="none"
    >
        {{ text }}
    </c-button>
</template>

<script>
import { CButton } from '@chakra-ui/vue'

export default {
    name: 'ADButton',
    components: {
        CButton
    },
    // eslint-disable-next-line vue/require-prop-types
    props: {
        text: {
            type: String,
            required: false,
            default: 'button'
        }
    }
}
</script>

<style scoped>

</style>
