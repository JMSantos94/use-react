import { css } from 'docz-plugin-css';
import doczPluginNetlify from 'docz-plugin-netlify';

const config = {
    plugins: [
        css({
            preprocessor: 'less',
            loaderOpts: {
                javascriptEnabled: true,
            },
        }),
        doczPluginNetlify(),
    ],
    themeConfig: {
        showPlaygroundEditor: true,
    },
};

export default config;
