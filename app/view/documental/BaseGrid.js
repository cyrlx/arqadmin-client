Ext.define('ArqAdmin.view.documental.BaseGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Column',
        //'Ext.grid.filters.filter.List',
        //'Ext.grid.filters.filter.String',
        //'Ext.grid.filters.filter.Number',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Paging'
    ],

    allowDeselect: true,
    store: 'documental.Documentos',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            store: 'documental.Documentos'
        }
    ],
    plugins: [
        {
            ptype: 'gridfilters',
            menuFilterText: 'Filtros'
        }
    ],
    listeners: {
        //render: 'onGridRender',
        activate: 'onGridActivate'
    }
});