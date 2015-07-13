/*
 * File: app/store/sfm/SfmNaturalidades.js
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

Ext.define('ArqAdmin.store.sfm.SfmNaturalidades', {
    extend: 'Ext.data.Store',

    requires: [
        'ArqAdmin.model.sfm.SfmNaturalidade',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'sfm.SfmNaturalidades',
            autoLoad: false,
            model: 'ArqAdmin.model.sfm.SfmNaturalidade',
            proxy: {
                type: 'rest',
                url: '/api/v1/documentos/tbaux/SfmNaturalidade',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: {
                property: 'naturalidade'
            }
        }, cfg)]);
    }
});