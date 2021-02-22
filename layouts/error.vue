<template>
    <a-d-mock icon="snowplow" status="4o4"/>
</template>

<script lang="js">
import ADMock from '~/components/ADMock'

export default {
    name: 'Error',
    components: {
        ADMock
    },
    layout: 'with-header'
}
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}

.all-height {
    height: calc(100vh - 6rem)
}

</style>
