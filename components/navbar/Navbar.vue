<template>
    <sticky-nav-bar v-if="!isMobileView"
                    justify-content="flex-end"
    >
        <navbar-button class="navbar-logo" text="Danilin Artyom"/>
        <navbar-button text="About"/>
        <navbar-button text="Blog"/>
        <navbar-button text="Guide"/>
        <themes-switcher/>
    </sticky-nav-bar>

    <sticky-nav-bar v-else
                    sticky-bottom
                    justify-content="space-around"
                    flex-direction="column"
    >
        <mobile-navbar-button icon="user-graduate" text="About"/>
        <mobile-navbar-button icon="blog" text="Blog"/>
        <mobile-navbar-button icon="screwdriver" text="Guide"/>
        <mobile-themes-switcher/>
    </sticky-nav-bar>
</template>

<script lang="js">
import StickyNavBar from '~/components/navbar/StickyNavbar'
import NavbarButton from '~/components/buttons/navbar/NavbarButton'
import ThemesSwitcher from '~/components/buttons/ThemesSwitcher'
import MobileThemesSwitcher from '~/components/buttons/MobileThemesSwitcher'
import MobileNavbarButton from '~/components/buttons/navbar/MobileNavbarButton'

export default {
    name: 'Navbar',
    components: {
        MobileNavbarButton,
        ThemesSwitcher,
        MobileThemesSwitcher,
        NavbarButton,
        StickyNavBar
    },
    data () {
        return {
            // TODO: how can i get width before rendering
            width: 1024
        }
    },
    computed: {
        isMobileView () {
            // show hamburger if the screen size less 600 px
            return this.width <= 600
        }
    },
    destroyed () {
        window.removeEventListener('resize', this.onWindowResize)
    },
    mounted () {
        this.$nextTick(function () {
            this.onWindowResize()
        })
        window.addEventListener('resize', this.onWindowResize)
    },
    methods: {
        onWindowResize () {
            this.width = window.innerWidth
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar-logo {
    margin-left: 1em;
    margin-right: auto;
}
</style>
