/*
 * File: app/store/classificacao/Subfundos.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ArqAdmin.store.classificacao.Subfundos', {
    extend: 'Ext.data.Store',

    requires: [
        'ArqAdmin.model.classificacao.Subfundo',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'classificacao.Subfundos',
            autoLoad: true,
            model: 'ArqAdmin.model.classificacao.Subfundo',
            proxy: {
                type: 'rest',
                url: '/api/documento/auxtable/Subfundo',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: {
                property: 'subfundoNome'
            }
        }, cfg)]);
    }
});