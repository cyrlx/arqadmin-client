Ext.define('ArqAdmin.controller.OAuth', {
    extend: 'Ext.app.Controller',

    requires: [],
    stores: [],
    views: [],

    init: function () {
        var me = this;
        //Ext.Ajax.on('requestexception', me.onRequestException);

        me.addRef([
            {
                ref: 'appMain',
                selector: 'app-main'
            }
        ]);
        this.callParent();
    },

    doRefreshToken: function () {
        var me = this,
            refreshToken = localStorage.getItem('refresh-token');

        if (refreshToken) {
            var configs = ArqAdmin.config.Runtime.getConfig(),
                params = {};

            params.client_id = configs.client_id;
            params.client_secret = configs.client_secret;
            params.grant_type = 'refresh_token';
            params.refresh_token = refreshToken;

            Ext.Ajax.request({
                url: ArqAdmin.config.Runtime.getBaseUrl() + '/authenticate',
                method: 'POST',
                jsonData: params,
                scope: me,
                success: function (response) {
                    var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
                    if (result.access_token) {
                        console.log('refreshToken');
                        me.saveToken(result.access_token, result.refresh_token);
                    }
                }
            });
        }
    },

    saveToken: function (accessToken, refreshToken) {
        console.log('saveToken');
        ArqAdmin.util.SessionMonitor.start();
        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('refresh-token', refreshToken);
        //Ext.Ajax.setDefaultHeaders({'Authorization': 'Bearer ' + accessToken});
    },

    clearToken: function () {
        localStorage.removeItem('access-token');
        localStorage.removeItem('refresh-token');
    },

    logout: function () {
        var me = this;

        me.clearToken();
        me.getAppMain().destroy();
        window.location.reload();
    }

});