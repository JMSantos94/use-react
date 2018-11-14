import { css } from 'docz-plugin-css';
import doczPluginNetlify from 'docz-plugin-netlify';

const config = {
    plugins: [
        doczPluginNetlify(),
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
