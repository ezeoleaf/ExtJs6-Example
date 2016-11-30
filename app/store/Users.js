Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    
    autoLoad: true,

    
    fields: [
        'name','firstname','lastname','department','email','login','status'
    ],

    proxy:{
        type:'rest',
        url: 'data/users.json',
        reader:{
            type:'json',
            rootProperty:'data'    
        }    
    }
    
});