<template>
    <layout>
        <Summary/>
        <Summary/>
    </layout>
</template>

<script lang="js">
import Summary from '~/components/Summary'
import Layout from '~/components/Container'

export default {
    name: 'Index',
    components: {
        Layout,
        Summary
    },
    inject: ['$chakraColorMode', '$toggleColorMode'],
    computed: {
        colorMode () {
            return this.$chakraColorMode()
        }
    }
}
</script>
