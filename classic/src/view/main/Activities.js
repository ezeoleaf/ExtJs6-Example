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
        { text: 'Activity', dataIndex: 'activity', flex:1},
        { text: 'Planned Start', dataIndex: 'planned_start', renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'Actual Start', dataIndex: 'actual_start',renderer: function (value, meta, record, rowIndex) {
                var currentStart = value.split('.').join('/');
                var toUseStart = new Date(value.split('.').reverse().join('/'));
                var plannedStart = record.get('planned_start').split('.').join('/');
                var toUsePlannedStart = new Date(record.get('planned_start').split('.').reverse().join('/'));
                var color = (toUseStart > toUsePlannedStart) ? 'red' : 'black';

              return '<div style="color:'+color+'">'+currentStart+'</div>';
          }},
        { text: 'Planned End', dataIndex: 'planned_end',renderer: function (value) {
              return value.split('.').join('/');
          }},
        { text: 'Actual End', dataIndex: 'actual_end',renderer: function (value, meta, record, rowIndex) {
              var currentEnd = value.split('.').join('/');
                var toUseEnd = new Date(value.split('.').reverse().join('/'));
                var plannedEnd = record.get('planned_end').split('.').join('/');
                var toUsePlannedEnd = new Date(record.get('planned_end').split('.').reverse().join('/'));
                var color = (toUseEnd > toUsePlannedEnd) ? 'red' : 'black';

              return '<div style="color:'+color+'">'+currentEnd+'</div>';
          }},
        { text: 'User', dataIndex: 'user', flex: 1}
    ]

    /*
    renderer: function(val, meta, record, rowIndex) {
            return record.get('activity');
        }
    */

});