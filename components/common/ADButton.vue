<template>
    <c-button v-if="hasSlot"
              variant-color="brand.purple"
              v-bind="$attrs"
              border="none" cursor="pointer"
    >
        <slot/>
    </c-button>

    <c-button v-else-if="withCustomVariant"
              v-bind="$attrs"
              border="none" cursor="pointer"
    >
        {{ text }}
    </c-button>

    <c-button v-else
              variant-color="brand.purple"
              v-bind="$attrs"
              border="none" cursor="pointer"
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
        },
        withCustomVariant: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        hasSlot () {
            return !(this.$slots.default === undefined)
        }
    }
}
</script>

<style scoped>

</style>
