import defaultTheme from '@chakra-ui/vue/src/lib/theme/index'

//  custom-theme.js
export default {
    ...defaultTheme,
    colors: {
        primary: '#fdf9f5',
        secondary: '#e6a73c',
        // generate palette: https://coolors.co/e6a73c-d4b57f-9c6e21-8c6c35-784f0a
        marigold: '#e6a73c',
        burlywood: '#d4b57f',
        goldenBrown: '#9c6e21',
        bistreBrown: '#8c6c35',
        brown: '#784f0a',

        // generate brand colors: palx.jxnblk.com (base color: e6a73c)
        brand: {
            orange: {
                50: '#fdf9f5',
                100: '#f9ebe1',
                200: '#f5dccb', // blck
                300: '#f0ccb3',
                400: '#eaba98',
                500: '#e4a679', // li
                600: '#dd8d54',
                700: '#d36d24',
                800: '#b54c00',
                900: '#6b2d00'
            }
        }
    }
}
