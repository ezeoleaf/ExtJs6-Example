Ext.define('MyApp.view.main.Activities', {
    extend: 'Ext.grid.Panel',
    xtype: 'activityList',
    
    requires: [
        'MyApp.store.Activity'
    ],
    
    store: {
        type: 'activity'
    },
    title: 'Activities',

    columns: [
        { text: 'activity', dataIndex: 'activity', flex:1},
        { text: 'planned_start', dataIndex: 'planned_start', renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'actual_start', dataIndex: 'actual_start',renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'planned_end', dataIndex: 'planned_end',renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'actual_end', dataIndex: 'actual_end',renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'user', dataIndex: 'user', flex: 1, renderer: function(val, meta, record, rowIndex) {
            return record.get('activity');
        }}
    ]

});