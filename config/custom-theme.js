import defaultTheme from '@chakra-ui/vue/src/lib/theme/index'

//  custom-theme.js
export default {
    ...defaultTheme,
    colors: {
        primary: '#fdf9f5',
        secondary: '#593196',
        // generate palette: https://coolors.co
        purplePrimary: '#593196',
        purpleSecondary: '#703EBC',
        blackPrimary: '#0d1117',
        blackSecondary: '#161b22',

        // generate brand colors: palx.jxnblk.com (base color: e6a73c)
        brand: {
            orange: {
                50: '#faf9fc',
                100: '#f0ecf5',
                200: '#e4deee', // blck
                300: '#d8cfe7',
                400: '#cbbfde',
                500: '#bcacd5', // li
                600: '#ab97ca',
                700: '#967ebd',
                800: '#7b5dac',
                900: '#4d2b84'
            }
        }
    }
}
