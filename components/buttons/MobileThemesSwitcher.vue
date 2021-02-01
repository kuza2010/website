<template>
    <mobile-navbar-button
        :aria-label="colorMode==='light'?'moon': 'sun'"
        :icon="colorMode==='light'? 'moon': 'sun'"
        :text="colorMode==='light'? 'Dark mode': 'Light mode'"
        @onButtonClick="$toggleColorMode"
    />
</template>

<script>
import MobileNavbarButton from '~/components/buttons/navbar/MobileNavbarButton'

export default {
    name: 'ThemesSwitcher',
    components: { MobileNavbarButton },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
