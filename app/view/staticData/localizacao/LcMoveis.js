Ext.define('ArqAdmin.view.staticData.localizacao.LcMoveis', {
    extend: 'ArqAdmin.view.staticData.BaseGrid',
    xtype: 'moveis-grid',

    store: 'staticData.localizacao.LcMoveis',

    columns: [
        {
            text: 'Id.',
            width: 70,
            tdCls: 'td-align-middle',
            align: 'center',
            dataIndex: 'id',
            resizable: false,
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Sala',
            flex: 1,
            tdCls: 'td-align-middle',
            dataIndex: 'movel',
            editor: {
                allowBlank: false,
                minLength: 3,
                maxLength: 45
            },
            filter: {
                type: 'string'
            }
        }
    ]
});