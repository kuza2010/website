<template>
    <div class="app">
        <CThemeProvider>
            <CColorModeProvider>
                <CBox>
                    <Nuxt/>
                </CBox>
            </CColorModeProvider>
        </CThemeProvider>
    </div>
</template>

<script lang="js">
import { CThemeProvider, CColorModeProvider, CBox } from '@chakra-ui/vue'

export default {
    name: 'App',
    components: {
        CThemeProvider,
        CColorModeProvider,
        CBox
    }
}
</script>
