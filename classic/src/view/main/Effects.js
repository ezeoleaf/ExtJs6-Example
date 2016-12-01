Ext.require('Ext.chart.*');
Ext.define('MyApp.view.main.Effects', {
    extend: 'Ext.grid.Panel',
    xtype: 'char',
    store: {data:[{"activity":"1"}]},
    title: 'Effects',
    height:600,
    columns: [
        { dataIndex: 'activity', flex:1,renderer: function (value, meta, record) {
            var id = Ext.id();
            Ext.defer(function (id) {
                var store = Ext.create('Ext.data.JsonStore', {
                    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
                    data: [
                        {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
                        {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
                        {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
                        {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
                        {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}
                    ]
                });

                var chart = Ext.create( {
                xtype: 'cartesian',
                width: '100%',
                height: 550,
                
                innerPadding: '0 10 0 10',
                store: {
                    type: 'effects'
                },
                legend: {
            docked: 'bottom'
        },
                axes: [{
                    type: 'numeric3d',
                    position: 'left',
                    fields: ['plan'],
                    title: {
                        text: 'Effects',
                        fontSize: 15
                    },
                    grid: {
                        odd: {
                            fillStyle: 'rgba(255, 255, 255, 0.06)'
                        },
                        even: {
                            fillStyle: 'rgba(0, 0, 0, 0.03)'
                        }
                    }
                }, {
                    type: 'category3d',
                    position: 'bottom',
                    title: {
                        text: 'Dates',
                        fontSize: 15
                    },
                    fields: 'time',
                    renderer: 'onAxisLabelRender',
                    label: {
                        rotate: {
                            degrees: 270
                        }
                    }
                }],
                series: {
                    type: 'bar3d',
                    stacked: false,
                    title: ['Plan', 'Actual'],
                    xField: 'time',
                    yField: ['plan','actual'],
                },
                renderTo: id,
                })
            }, 50, undefined, [id]);
            return "<div id='" + id + "'></div>";
        }}
    ]

});