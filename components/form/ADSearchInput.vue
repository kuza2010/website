<template>
    <c-input-group>
        <c-input-right-element>
            <c-icon name="close"/>
        </c-input-right-element>
        <c-input
            size="sm"
            placeholder="Search by tag or article title..."
            :class="colorMode === 'dark'? 'dark': 'light'"
        />
    </c-input-group>
</template>

<script>
import { CInput, CIcon, CInputGroup, CInputRightElement } from '@chakra-ui/vue'

export default {
    name: 'ADSearchInput',
    components: { CInput, CInputGroup, CIcon, CInputRightElement },
    inject: ['$chakraColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>

<style scoped>

</style>
