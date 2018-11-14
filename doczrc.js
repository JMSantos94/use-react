import { css } from 'docz-plugin-css';

const config = {
    plugins: [
        css({
            preprocessor: 'less',
            loaderOpts: {
                javascriptEnabled: true,
            },
        }),
    ],
    themeConfig: {
        showPlaygroundEditor: true,
    },
};

export default config;
