<template>
    <c-flex
        :mt="[4, 5]" flex-direction="column"
        align-items="center" justify-content="center"
        w="100%" rounded="6px"
        p="1"
    >
        <c-heading
            mt="2" mb="1"
            size="xl"
            color="dangerBold"
        >
            There are no articles yet
        </c-heading>
        <c-text font-size="xs">
            Author is in progress...
        </c-text>
    </c-flex>
</template>

<script>
import { CFlex, CHeading, CText } from '@chakra-ui/vue'

export default {
    name: 'ADEmptyArticle',
    components: {
        CFlex,
        CHeading,
        CText
    }
}
</script>

<style scoped lang="scss">

.typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */

    letter-spacing: .15em; /* Adjust as needed */
    animation: typing 3.5s steps(30, end),
    blink-caret .75s step-end infinite;
    animation-iteration-count: infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0
    }
    to {
        width: 2%
    }
}

</style>
