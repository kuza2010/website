<template>
    <c-pseudo-box v-if="enjoy"
                  :_hover="{ bg: 'successBold' }"
                  bg="success" rounded="0.25rem"
                  px="3" py="1"
                  mx="1" my="1"
    >
        <c-text is-truncated m="0"
                font-weight="semibold"
                color="textBlack"
        >
            {{ text }}
        </c-text>
    </c-pseudo-box>

    <c-pseudo-box v-else
                  :_hover="{ bg: 'dangerBold' }"
                  bg="danger"
                  rounded="0.25rem"
                  px="3" py="1"
                  mx="1" my="1"
    >
        <c-text is-truncated m="0"
                font-weight="semibold"
                color="textBlack"
        >
            {{ text }}
        </c-text>
    </c-pseudo-box>
</template>

<script>
import { CPseudoBox, CText } from '@chakra-ui/vue'

export default {
    name: 'ADHobby',
    components: {
        CPseudoBox,
        CText
    },
    props: {
        text: {
            type: String,
            required: true
        },
        enjoy: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
