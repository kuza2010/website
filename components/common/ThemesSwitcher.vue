<template>
    <navbar-button
        :aria-label="colorMode==='light'?'moon': 'sun'"
        :icon="colorMode==='light'? 'moon': 'sun'"
        @onButtonClick="$toggleColorMode"
    />
</template>

<script>
import NavbarButton from '~/components/navbar/buttons/NavbarButton'

export default {
    name: 'ThemesSwitcher',
    components: { NavbarButton },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
