Ext.define('ArqAdmin.view.staticData.StaticDataWindow', {
    extend: 'Ext.window.Window',
    xtype: 'staticdata-window',

    //requires: [
    //    'ArqAdmin.view.image.ImageViewerController'
    //],
    //controller: 'imageviewer',

    height: 600,
    width: 700,
    layout: 'border',
    glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
    title: 'Edição de dados auxiliares',
    draggable: false,
    autoScroll: true,
    modal: true,
    closable: true,
    bodyStyle: {
        background: '#ececec'
    },

    items: []

});