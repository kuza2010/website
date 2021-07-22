<template>
    <a-d-mock icon="snowplow"
              status="4o4"
              fallback-message="Probably you are wrong with page..."
    />
</template>

<script lang="js">
import ADMock from '~/components/ADMock'

export default {
    name: 'Error',
    components: {
        ADMock
    },
    layout: 'with-header',
    props: {
        error: {
            type: Object,
            default: () => {
            }
        }
    }
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
