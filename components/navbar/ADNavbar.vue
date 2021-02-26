<template>
    <sticky-nav-bar v-if="!isMobileView" justify-content="flex-end">
        <navbar-button
            class="navbar-logo"
            text="Danilin Artyom"
            @onButtonClick="navigateTo('/')"
        />
        <navbar-button text="About" @onButtonClick="navigateTo('/about')"/>
        <navbar-button text="Blog" @onButtonClick="navigateTo('/blog')"/>
        <navbar-button text="Guide" @onButtonClick="navigateTo('/guide')"/>
        <themes-switcher/>
    </sticky-nav-bar>

    <sticky-nav-bar v-else
                    sticky-bottom
                    justify-content="space-around"
                    flex-direction="column"
                    class="mobile-navbar"
    >
        <mobile-navbar-button
            icon="user-graduate"
            text="About"
            @onButtonClick="navigateTo('/about')"
        />
        <mobile-navbar-button
            icon="blog"
            text="Blog"
            @onButtonClick="navigateTo('/blog')"
        />
        <mobile-navbar-button
            icon="screwdriver"
            text="Guide"
            @onButtonClick="navigateTo('/guide')"
        />
        <mobile-themes-switcher/>
    </sticky-nav-bar>
</template>

<script lang="js">
import StickyNavBar from '~/components/navbar/StickyNavbar'
import NavbarButton from '~/components/navbar/buttons/NavbarButton'
import ThemesSwitcher from '~/components/common/ThemesSwitcher'
import MobileThemesSwitcher from '~/components/common/MobileThemesSwitcher'
import MobileNavbarButton from '~/components/navbar/buttons/MobileNavbarButton'

export default {
    name: 'ADNavbar',
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
        },
        navigateTo (path) {
            if (this.$route.path === path) {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
                return
            }

            this.$router.push({ path })
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar-logo {
    margin-left: 1em;
    margin-right: auto;
}

.mobile-navbar {
    height: 5rem;
}
</style>
