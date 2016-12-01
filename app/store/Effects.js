Ext.define('MyApp.store.Effects', {
    extend: 'Ext.data.Store',
    alias: 'store.effects',
    
    autoLoad: true,
    
    fields: [
        'time','plan','actual'
    ],

    proxy:{
        type:'rest',
        url: 'data/effects.json',
        reader:{
            type:'json',
            rootProperty:'data'    
        }    
    }
});