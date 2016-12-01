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
        { text: 'Name',  dataIndex: 'name', flex:1},
        { text: 'Firstname', dataIndex: 'firstname'},
        { text: 'Lastname', dataIndex: 'lastname'},
        { text: 'Department', dataIndex: 'department'},
        { text: 'E-mail', dataIndex: 'email',flex:1},
        { text: 'Login', dataIndex: 'login'},
        { text: 'Status', dataIndex: 'status', renderer: function(value) {
            var color = (value == 'active') ? 'green' : 'red';
            
            return '<div style="width:100%;text-align:center"><i class="fa fa-circle" style="font-size:20px;color: '+color+'" aria-hidden="true"></i></div>';
        }}
    ]

});