<template>
    <c-theme-provider>
        <c-color-mode-provider>
            <slot/>
        </c-color-mode-provider>
    </c-theme-provider>
</template>

<script>
import { CThemeProvider, CColorModeProvider } from '@chakra-ui/vue'

export default {
    name: 'ChakraThemeWrapper',
    components: {
        CThemeProvider,
        CColorModeProvider
    }
}
</script>
