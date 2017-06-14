var app = angular.module('myApp', ['ngDraggable', 'ngEcharts'])

.controller('myApp.controller', ['$scope', '$timeout', function($scope, $timeout) {
    
	//确定当前所选中的echarts
//	var $scope.showEchartsId = 0;
	
	$scope.showEchartsId = 0
  
	//存放echarts的数组
	var echArr = [];
	
	//y轴的5组数据
	var data1 = {
	        name:'邮件营销',
	        type:'line',

            data:[120, 132, 101, 134, 90, 230, 210]
        }
    var data3 = {
            name:'视频广告',
            type:'line',
        
            data:[150, 232, 201, 154, 190, 330, 410]
        }
    var data2 = {
            name:'联盟广告',
            type:'line',
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    var data4 = {
	        name:'直接访问',
	        type:'line',

	        data:[320, 332, 301, 334, 390, 330, 320]
	    }
    var data5 = {
            name:'搜索引擎',
            type:'line',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
 	
 	//x轴的5组数据
 	var xData1 = ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
 	var xData2 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
 	var xData3 = ['周一','周二','周三','周四','周五','周六','周日']
 	var xData4 = ['6月5日', '6月6日', '6月7日', '6月8日', '6月9日', '6月10日', '6月11日']
 	
	//echarts的3类图表
	var bar = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type: 'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            },
            {
                name:'百度',
                type:'bar',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            }
        ]
    };
    var line = {
        title: {
        //text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    var circle = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };


	var barExample = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'邮件营销',
                    type:'bar',
                    stack: '广告',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'bar',
                    stack: '广告',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'bar',
                    stack: '广告',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜索引擎',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'百度',
                    type:'bar',
                    barWidth : 5,
                    stack: '搜索引擎',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name:'谷歌',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name:'必应',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name:'其他',
                    type:'bar',
                    stack: '搜索引擎',
                    data:[62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
    var lineExample = {
        title: {
        //text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    var circleExample = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

	//动态获取数据的echarts
	var line1 = {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    //backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
        //data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			data:[]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        dataZoom: [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },

	    ],
        series : [
           
        ]
    };
    var line2 = {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    //backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            //data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			data:[]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        dataZoom: [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },

	    ],
        series : [
           
        ]
    };
    var line3 = {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {

                }
            }
        },
        legend: {

			data:[]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : [],
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        dataZoom: [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },

	    ],
        series : [
           
        ]
    };
    
    //递归循环出左侧列表
	$scope.List = [
		{
			dataName: 'x轴数据',
			dataList: [
				{
					dataType: 'x',
					dataName: 'years',
					data: xData1,
					dataList: [
//						{
//							dataName: '2080'
//						}
					]
				},
				{
					dataType: 'x',
					dataName: 'month',
					data: xData2
				},
				{
					dataType: 'x',
					dataName: 'week',
					data: xData3
				},
				{
					dataType: 'x',
					dataName: 'date',
					data: xData4
				}
			]
		},
		{
			dataName: 'y轴数据',
			dataList: [
				{
					dataType: 'y',
					dataName: '邮件营销',
					data: data1
				},
				{
					dataType: 'y',
					dataName: '联盟广告',
					data: data2
				},
				{
					dataType: 'y',
					dataName: '视频广告',
					data: data3
				},
				{
					dataType: 'y',
					dataName: '直接访问',
					data: data4
				},
				{
					dataType: 'y',
					dataName: '搜索引擎',
					data: data5
				}
			]
		}
	]
   
   //关于图片的数据
	$scope.imgItem = [
		{
			title: '我是柱形图',
			data: 'line1',
			src: 'img/1.jpg'
		},{
			title: '我是折线图',
			data: 'line2',
			src: 'img/2.jpg'
		},{
			title: '我是饼图',
			data: 'line3',
			src: 'img/3.jpg'
		}
	]
	
	//echarts 图标的循环
	$scope.echItemes = []
	
	//首先定义y轴数据存放的数组
	$scope.itemYes = []
	
	//树状数据类型的点击事件
	$scope.itemClick = function(item) {
		item.isShow = !item.isShow
	}
		
	//点击显示隐藏子数据
	$scope.isShowEchItem = function() {
		$scope.isShowItem = !$scope.isShowItem
	}
		
	//x轴成功引入数据的方法
	$scope.hasDropX = function(data) {
		if (data.dataType != 'x'){

			return 
		}
		
		$scope.echItemes[$scope.showEchartsId].dataX = data.dataName;

		echArr[$scope.showEchartsId].xAxis[0].data = data.data;
		
		$scope['option' + $scope.showEchartsId] = echArr[$scope.showEchartsId]

		$scope['option' + $scope.showEchartsId] = data.dataName

	}
	
	//y轴成功引入数据的方法
	$scope.hasDropY = function(data) {
		
		var tempObj = echArr[$scope.showEchartsId];
		echArr[$scope.showEchartsId] = {}

		if ($scope.itemYes.indexOf(data) >= 0 || data.dataType != 'y') {
			return
		}

		$scope.echItemes[$scope.showEchartsId].dataY.push(data);
//		echArr[$scope.showEchartsId].series.push(data.data);
//		echArr[$scope.showEchartsId].legend.data.push(data.dataName);

		tempObj.series.push(data.data);
		tempObj.legend.data.push(data.dataName);
		
		echArr[$scope.showEchartsId] = tempObj;


		$scope['option' + $scope.showEchartsId]= data.dataName;	
		
		console.log(line1, 'line1')
		
	}

	//删除y轴数据的方法
	$scope.delDropY = function(data) {

		var dataIndex = $scope.echItemes[$scope.showEchartsId].dataY.indexOf(data)

			console.log('hasDEl')
		if (dataIndex != -1) {

			echArr[$scope.showEchartsId].series.splice(dataIndex, 1);
			$scope.echItemes[$scope.showEchartsId].dataY.splice(dataIndex, 1);
			$scope['option' + $scope.showEchartsId] = data.dataName + '-';
		}
	} 

	//添加echarts图表的方法
	$scope.addEcharts = function(oldData) {
		if (oldData.dataType) return;
		
		if (oldData.data === 'line1') {
			var newData = new linE1();		
		}else if (oldData.data === 'line2') {
			
			var newData = new linE1();		
		}else if (oldData.data === 'line3') {
			
			var newData = new linE1();		
		}else {
			return;
		}
		console.log(newData, 'newData')
				
		$scope.echItemes.push({
			dataX: '',
			dataY: [],
			data: newData
		})
		
		echArr.push(newData)
		
		showMesItem($scope.echItemes.length - 1)
		
		
		$scope['option' + $scope.showEchartsId] = newData

        console.log($scope.imgItem[0].data, 'data1')

		
	}
	function linE1() {
		this.tooltip = {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    //backgroundColor: '#6a7985'
                }
            }
       };
        this.legend= {
        //data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
			data:[]
        };
        this.toolbox= {
            feature: {
                saveAsImage: {}
            }
        };
        this.grid= {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        };
        this.xAxis = [
            {
                type : 'category',
                boundaryGap : false,
                data : [],
            }
        ];
        this.yAxis = [
            {
                type : 'value'
            }
        ];
        this.dataZoom= [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },

	    ];
        this.series = [
           
        ];
    
	}
	
	//选定想要改变数据的echarts
	$scope.echartsClick = function(i, item) {
		if (i == $scope.showEchartsId) {
			return;
		}
		showMesItem(i);
	}
	
	//显示选中的echarts数据
	function showMesItem(i) {
		
		$scope.echItemes.forEach(function(item, idex) {
			$scope['echDom' + idex] = false;
		})
		
		$scope['echDom' + i] = true;
		
		$scope.showEchartsId = i;
		$scope['option' + $scope.showEchartsId] = {}
		$timeout(function() {
			$scope['option' + $scope.showEchartsId] = echArr[$scope.showEchartsId];
		}, 1)

		console.log($scope.showEchartsId, 'showItem')
	}
}])