// https://vue.chakra-ui.com/extending-theme
export default {
    breakpoints: ['600px', '1150px'],

    colors: {
        primary: '#fdf9f5',
        secondary: '#593196',

        // generate palette: https://coolors.co
        purplePrimary: '#593196',
        purpleSecondary: '#703EBC',
        blackPrimary: '#0d1117',
        blackSecondary: '#161b22',
        blackAccent: '#21262d',

        // two colors
        borderLight: '#d1d5da',
        borderDark: '#fdf9f5',

        primaryLight: '#fdf9f5',
        secondaryLight: '#593196',
        success: '#a9e5c1',
        successBold: '#84dba7',
        info: '#b8e3f5',
        infoBold: '#7acced',
        warning: '#fbe5c0',
        warningBold: '#f7cf89',
        danger: '#fec8c8',
        dangerBold: '#fd9898',

        /* text */
        textSecondary: '#8b949e',
        textBlack: '#1A202C',
        textLight: '#c9d1d9',

        // generate brand colors: palx.jxnblk.com (base color: e6a73c)
        brand: {
            purple: {
                50: '#faf9fc',
                100: '#f0ecf5',
                200: '#e4deee',
                300: '#d8cfe7',
                400: '#cbbfde',
                500: '#bcacd5',
                600: '#ab97ca',
                700: '#967ebd',
                800: '#7b5dac',
                900: '#4d2b84'
            },
            spotify: {
                green: '#1db954',
                black: '#191414'
            }
        }
    }
}
