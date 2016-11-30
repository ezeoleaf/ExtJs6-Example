Ext.define('MyApp.store.Activity', {
    extend: 'Ext.data.Store',

    alias: 'store.activity',
    
    autoLoad: true,
    
    fields: [
        'name','firstname','lastname','department','email','login','status'
    ],

    proxy:{
        type:'rest',
        url: 'data/activity.json',
        reader:{
            type:'json',
            rootProperty:'data'    
        }    
    }
    
});