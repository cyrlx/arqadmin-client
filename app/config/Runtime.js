Ext.define('ArqAdmin.config.Runtime', {
    singleton: true,

    config: {
        apiBaseUrl: 'http://arqadmin.dev',
        //apiBaseUrl: 'http://localhost:8000'

        imagesCartografico: 'http://arqadmin.dev/imagem/cartografico/',
        downloadCartografico: 'http://arqadmin.dev/api/imagem/cartografico/',

        client_id: 'LNCMz1G9iV6vpMH8b4BIlt33FmUmycEcn6iM1lZm',
        client_secret: 'LV3OIv9pzSVqMLGkxgGVx9meKK9qIe5r8kGbN7V1',
        grant_type: 'password',

        refreshTokenInterval: 1000 * 60 * 55 // 55 minutes
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});