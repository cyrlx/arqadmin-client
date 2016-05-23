Ext.define('ArqAdmin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    xtype: 'app-main',

    requires: [
        'ArqAdmin.view.main.MainController',
        'ArqAdmin.view.main.MainModel',
        'ArqAdmin.view.dashboard.ModuleDashboard',
        'ArqAdmin.view.documental.ModuleDocumental',
        'ArqAdmin.view.sepultamento.ModuleSepultamento',
        'ArqAdmin.view.fotografico.ModuleFotografico',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.form.RadioGroup',
        'Ext.form.field.File',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.form.Label',
        'Ext.form.FieldSet',
        'Ext.toolbar.Spacer',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'ArqAdmin.util.Glyphs',
        'Ext.ux.IFrame',
        'ArqAdmin.view.widget.IFrameWindow',
        'ArqAdmin.view.widget.ImageViewerImg',
        'ArqAdmin.view.widget.CustomImage',
        'ArqAdmin.view.revisions.HistoryWindow'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'component',
            region: 'north',
            reference: 'headerTitle',
            cls: 'header-title',
            html: [
                '<img class="image-acervo" src="resources/img/arq-admin-black.png">',
                '<img class="image-pmsp" src="resources/img/logo_prefeitura.gif">'
            ]
        },
        {
            xtype: 'container',
            region: 'north',
            reference: 'navigation',
            height: 47,
            itemId: 'navigation',
            style: {
                'border-bottom': '1px solid rgb(0, 58, 73)'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    ui: 'toolbar-plain',
                    defaults: {
                        height: 30
                    },
                    defaultButtonUI: 'default',
                    items: [
                        {
                            xtype: 'button',
                            action: 'painel',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('dashboard'),
                            text: 'Painel'
                        },
                        {
                            xtype: 'tbseparator',
                            height: 28,
                            style: {
                                'border-left-color': 'rgb(90, 112, 116)'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('acervos'),
                            text: 'Acervos',
                            menu: {
                                xtype: 'menu',
                                minWidth: 200,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        action: 'documental',
                                        text: 'Textual e Cartográfico'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'fotografico',
                                        text: 'Fotográfico'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'sepultamento',
                                        text: 'Termos de Sepultamento'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            action: 'documental',
                            text: 'Textual e Cartográfico'
                        },
                        {
                            xtype: 'button',
                            action: 'fotografico',
                            text: 'Fotográfico'
                        },
                        {
                            xtype: 'button',
                            action: 'sepultamento',
                            text: 'Termos de Sepultamento'
                        },
                        {
                            xtype: 'tbseparator',
                            height: 28,
                            style: {
                                'border-left-color': 'rgb(90, 112, 116)'
                            },
                            hidden: true,
                            bind: {
                                hidden: '{!isAdmin}'
                            }
                        },
                        // {
                        //     xtype: 'button',
                        //     glyph: ArqAdmin.util.Glyphs.getGlyph('report'),
                        //     text: 'Relatórios'
                        // },
                        // {
                        //     xtype: 'button',
                        //     glyph: ArqAdmin.util.Glyphs.getGlyph('chart'),
                        //     text: 'Estatísticas'
                        // },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('admin'),
                            text: 'Recursos',
                            hidden: true,
                            bind: {
                                hidden: '{!isAdmin}'
                            },
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        action: 'documental',
                                        glyph: ArqAdmin.util.Glyphs.getGlyph('users'),
                                        text: 'Relatórios'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'sepultamento',
                                        text: 'Estatísticas'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'fotografico',
                                        text: 'Dados estáticos'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('admin'),
                            text: 'Administração',
                            hidden: true,
                            bind: {
                                hidden: '{!isAdmin}'
                            },
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        action: 'documental',
                                        glyph: ArqAdmin.util.Glyphs.getGlyph('users'),
                                        text: 'Usuários'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'sepultamento',
                                        text: 'Termos de Sepultamento'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        action: 'fotografico',
                                        text: 'Fotográfico'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator',
                            height: 28,
                            style: {
                                'border-left-color': 'rgb(90, 112, 116)'
                            },
                            hidden: true,
                            bind: {
                                hidden: '{!isAdmin}'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('user'),
                            disabled: true,
                            border: false,
                            style: {
                                color: '#fff'
                            },
                            bind: {
                                text: '{userProfile.name}'
                            }
                            // menu: {
                            //     xtype: 'menu',
                            //     items: [
                            //         {
                            //             xtype: 'menuitem',
                            //             itemId: 'btPerfil',
                            //             text: 'Perfil'
                            //         },
                            //         {
                            //             xtype: 'menuseparator'
                            //         },
                            //         {
                            //             xtype: 'menuitem',
                            //             glyph: ArqAdmin.util.Glyphs.getGlyph('exit'),
                            //             text: 'Sair',
                            //             listeners: {
                            //                 click: 'onLogout'
                            //             }
                            //         }
                            //     ]
                            // }
                        },
                        // {
                        //     xtype: 'tbseparator',
                        //     height: 28,
                        //     style: {
                        //         'border-left-color': 'rgb(90, 112, 116)'
                        //     }
                        // },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('exit'),
                            // text: 'Sair',
                            listeners: {
                                click: 'onLogout'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            region: 'north',
            margin: '8 8 0',
            ui: 'toolbar-dark',
            items: [
                {
                    xtype: 'label',
                    style: {
                        color: '#fff',
                        'font-size': '18px',
                        'font-weight': '400'
                    },
                    bind: {
                        text: '{moduleTitle}'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    itemId: 'btnMaximize',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('expand'),
                    tooltip: 'Maximizar',
                    tooltipType: 'title'
                }
            ]
        },
        {
            xtype: 'container',
            reference: 'modulesContainer',
            itemId: 'modulesContainer',
            region: 'center',
            padding: '8 8 0',
            layout: 'card',
            items: [
                {xtype: 'module-dashboard'}
                // {xtype: 'module-documental'}, // dynamically loaded
                // {xtype: 'module-fotografico'}, // dynamically loaded
                // {xtype: 'module-sepultamento'} // dynamically loaded
            ],
            listeners: {
                afterlayout: 'onContainerAfterLayout'
            }
        },
        {
            xtype: 'panel',
            collapsed: true,
            collapsible: true,
            region: 'south',
            split: true,
            reference: 'footer',
            height: 250,
            //width: 400,
            glyph: 61457,
            title: 'Histórico de iteração'

        }
    ]
});
