<template>
    <c-popover
        v-slot="{isOpen}"
        trigger="hover"
        placement="right"
    >
        <c-popover-trigger cursor="help">
            <c-box display="inline-block">
                <c-text
                    v-if="isOpen"
                    font-size="3xl" my="4"
                >
                    {{ openPopoverMainText }}
                </c-text>
                <c-text
                    v-else
                    font-size="3xl" my="4"
                >
                    {{ mainText }}
                </c-text>
            </c-box>
        </c-popover-trigger>
        <c-popover-content z-index="4" w="auto">
            <c-box m="4">
                {{ popoverText }}
            </c-box>
        </c-popover-content>
    </c-popover>
</template>

<script>
import {
    CPopover,
    CPopoverTrigger,
    CPopoverContent,
    CBox,
    CText
} from '@chakra-ui/vue'

export default {
    name: 'AdThingsIndicator',
    components: {
        CPopover,
        CPopoverTrigger,
        CPopoverContent,
        CBox,
        CText
    },
    props: {
        mainText: {
            type: String,
            required: true
        },
        popoverText: {
            type: String,
            required: true
        },
        openPopoverMainText: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>
