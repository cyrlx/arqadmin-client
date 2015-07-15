/*
 * File: app/store/documental/Documentos.js
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

Ext.define('ArqAdmin.store.documental.Documentos', {
    extend: 'Ext.data.Store',

    requires: [
        'ArqAdmin.model.documental.Documento',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true,
            storeId: 'documental.Documentos',
            autoLoad: false,
            model: 'ArqAdmin.model.documental.Documento',
            proxy: {
                type: 'rest',
                simpleSortMode: false,
                url: '/api/documento',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});