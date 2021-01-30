<template>
    <sticky-nav-bar>
        <c-flex
            justify="flex-end"
            align-items="center"
            p="0.75rem"
            class="nav-list"
        >
            <div class="nav-item">
                <h3>Danilin Artyom</h3>
            </div>
            <c-box class="nav-item">
                <navbar-button text="About"/>
                <navbar-button text="Blog"/>
                <navbar-button text="Guides"/>
            </c-box>
            <c-box class="nav-item">
                <navbar-button text="Change theme"/>
            </c-box>
        </c-flex>
    </sticky-nav-bar>
</template>

<script lang="js">
import { CFlex } from '@chakra-ui/vue'
import StickyNavBar from '~/components/navbar/StickyNavbar'
import NavbarButton from '~/components/buttons/NavbarButton'

export default {
    name: 'NavBar',
    components: {
        NavbarButton,
        StickyNavBar,
        CFlex
    }
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
    .nav-list div:not(:first-child,:last-child) {
        display: none;
    }
    .nav-list div.icon {
        float: right;
        display: block;
    }
}

.nav-item {
    &:first-child {
        margin: auto auto auto 2rem;
    }
}

</style>
