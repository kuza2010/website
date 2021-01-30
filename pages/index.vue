<template>
    <div>
        <CBox bg="tomato" h="100vh"
              color="white" display="flex"
              align-items="center" justify-content="center"
              :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
        >
            <c-button
                variant-color="brand.orange"
                @click="$toggleColorMode"
            >
                Current ColorMode: {{ colorMode }}
            </c-button>
        </CBox>
        <CBox bg="tomato" h="100vh"
              color="white" display="flex"
              align-items="center" justify-content="center"
              :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
        >
            <c-button
                variant-color="brand.orange"
                @click="$toggleColorMode"
            >
                Current ColorMode: {{ colorMode }}
            </c-button>
        </CBox>
        <CBox bg="tomato" h="100vh"
              color="white" display="flex"
              align-items="center" justify-content="center"
              :class="colorMode === 'dark'? 'dark-mode' :'light-mode'"
        >
            <c-button
                variant-color="brand.orange"
                @click="$toggleColorMode"
            >
                Current ColorMode: {{ colorMode }}
            </c-button>
        </CBox>
    </div>
</template>

<script lang="js">
import { CBox, CButton } from '@chakra-ui/vue'

export default {
    name: 'Index',
    components: {
        CBox,
        CButton
    },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
