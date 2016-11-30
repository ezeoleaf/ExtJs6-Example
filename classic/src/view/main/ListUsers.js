Ext.define('MyApp.view.main.ListUsers', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    
    requires: [
        'MyApp.store.Users'
    ],
    
    store: {
        type: 'users'
    },
    title: 'Users',

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Firstname', dataIndex: 'firstname'},
        { text: 'Lastname', dataIndex: 'lastname'},
        { text: 'Department', dataIndex: 'department'},
        { text: 'E-mail', dataIndex: 'email',flex:1},
        { text: 'Login', dataIndex: 'login'},
        { text: 'Status', dataIndex: 'status'}
    ]

});