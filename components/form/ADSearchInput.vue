<template>
    <c-input-group>
        <c-input-right-element
            cursor="pointer"
            @click.native="clearSearchTerm"
        >
            <c-icon name="close"/>
        </c-input-right-element>
        <c-input
            v-model="searchTerm"
            size="sm"
            type="search"
            :disabled="disabled"
            :placeholder="placeholder"
            :class="colorMode === 'dark'? 'dark': 'light'"
        />
    </c-input-group>
</template>

<script>
import { CInput, CIcon, CInputGroup, CInputRightElement } from '@chakra-ui/vue'

export default {
    name: 'ADSearchInput',
    components: {
        CInput,
        CInputGroup,
        CIcon,
        CInputRightElement
    },
    inject: ['$chakraColorMode'],
    props: {
        value: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        placeholder: {
            type: String,
            default: () => 'Search...'
        }
    },
    data () {
        return {
            searchTerm: ''
        }
    },
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    },
    watch: {
        value (newValue) {
            if (newValue === this.searchTerm) {
                return
            }
            this.searchTerm = newValue
        },
        searchTerm (newValue) {
            this.$emit('onSearchChanged', newValue)
        }
    },
    created () {
        this.searchTerm = this.value
    },
    methods: {
        clearSearchTerm () {
            this.searchTerm = ''
        }
    }
}
</script>

<style scoped>

</style>
