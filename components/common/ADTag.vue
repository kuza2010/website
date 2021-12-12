<template>
    <c-pseudo-box
        v-if="color && hoverColor"
        :bg="color" :_hover="{ bg: hoverColor }"
        rounded="full" px="3"
        py="1" mx="1"
        display="flex"
        align-items="center"
    >
        <c-text
            is-truncated m="0"
            font-weight="semibold" color="textBlack"
            text-transform="lowercase"
        >
            {{ text }}
        </c-text>
    </c-pseudo-box>

    <c-tag
        v-else
        rounded="full" px="3"
        py="1" mx="1"
        line-height="1.2"
    >
        <c-text
            is-truncated m="0"
            font-weight="semibold" color="textBlack"
            text-transform="lowercase"
        >
            {{ text }}
        </c-text>
    </c-tag>
</template>

<script>
import { CPseudoBox, CTag, CText } from '@chakra-ui/vue'

export default {
    name: 'ADTag',
    components: {
        CPseudoBox,
        CText,
        CTag
    },
    props: {
        text: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
            default: null
        },
        hoverColor: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped>

</style>
