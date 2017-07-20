var app = angular.module('myApp', ['ngDraggable', 'ngEcharts'])

	.controller('myApp.controller', ['$scope', '$timeout', '$http', '$location', function($scope, $timeout, $http, $location) {
	  
		//存放echarts的数组
		var echArr = [];
		var echArr1 = [];
		
		//echarts的配置项
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
				data:[],
//				textStyle: {
//					color: '#fff'
//				}
	        };
	        this.toolbox= {
	            feature: {
	                saveAsImage: {}
	            }
	        };
	        this.grid= {
	            height: '62%',
	        };
	        this.xAxis = [
	            {
	                type : 'category',
	                boundaryGap : false,
	                data : [],
//	                axisLine : {
//	                	lineStyle: {
//	                		color: '#fff'
//	                	}
//	                }
	            }
	        ];
	        this.yAxis = [
	            {
	                type : 'value',
//	                 axisLine : {
//	                	lineStyle: {
//	                		color: '#fff'
//	                	}
//	                },
	                nameTextStyle: {
	                	color: '#fff'
	                }
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
	        this.color = ['orange', 'red', 'yellow', 'green', 'skyblue']
	    
		}
		
		function linE2() {
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
				data:[],
//				textStyle: {
//					color: '#fff'
//				}
	        };
	        this.toolbox= {
	            feature: {
	                saveAsImage: {}
	            }
	        };
	        this.grid= [];
	        this.xAxis = [
	            
	        ];
	        this.yAxis = [

	        ];
	        this.dataZoom= [
		        {
		            type: 'inside',
		            xAxisIndex: [],
		            filterMode: 'empty'
		        },
		        {
		            type: 'slider',
		            xAxisIndex: [],
		            filterMode: 'empty'
		        },
	
		    ];
	        this.series = [
	           
	        ];
	        this.color = ['orange', 'red', 'yellow', 'green', 'skyblue']
	    
		}
		
		//table 数组
		$scope.trOne = []

		
		//var urlName;
			
		//y轴的5组模拟数据
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
	 	
	 	//x轴的5组模拟数据
	 	var xData1 = ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
	 	var xData2 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
	 	var xData3 = ['周一','周二','周三','周四','周五','周六','周日']
	 	var xData4 = ['6月5日', '6月6日', '6月7日', '6月8日', '6月9日', '6月10日', '6月11日']
	   
	    //递归循环出左侧列表
		$scope.List = [
			{
				dataName: 'x轴数据',
				dataList: [
					{
						dataType: 'x',
						dataName: 'years',
						data: xData1
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
				src: './img/1.jpg',
				data: 'line'
			}
		]
		
		//echarts 图表的循环
		$scope.echItemes = new Array()
		$scope.echItemes1 = new Array()
		
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
		
		//记录多组echarts的x轴数据
		var xAxisDatas = new Array()
		
		//x轴成功引入数据的方法
		$scope.hasDropX = function(data) {
			if (data.dataType != 'x'){
				return 
			}
			
			//单一echarts轴
			$scope.echItemes[$scope.showEchartsId].dataX = data.dataName;
	
			echArr[$scope.showEchartsId].xAxis[0].data = data.data;
			
			$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
	
//			$scope['option' + $scope.showEchartsId] = data.dataName
			
			//多组echarts轴
			xAxisDatas = data.data;
			$scope.echItemes1[$scope.showEchartsId].dataX = data.dataName;
	  
			echArr1[$scope.showEchartsId].xAxis.forEach(function(val) {
				val.data = xAxisDatas;
			})
			

			if (isOption) {				
				$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
			}else {
				$scope.echItemes[$scope.showEchartsId].option = echArr1[$scope.showEchartsId]				
			}
		}
									
		var isToggle = true;
		
		var minMaxArr = new Array()
		
		//y轴成功引入数据的方法
		$scope.hasDropY = function(data) {	

			if ($scope.itemYes.indexOf(data) >= 0 || data.dataType != 'y') {
				return
			}
			
			data.data.data.forEach(function(val, index) {
				minMaxArr[$scope.showEchartsId].max = minMaxArr[$scope.showEchartsId]? minMaxArr[$scope.showEchartsId].max : val
				minMaxArr[$scope.showEchartsId].min = minMaxArr[$scope.showEchartsId]? minMaxArr[$scope.showEchartsId].min : val
			
				if (val > minMaxArr[$scope.showEchartsId].max) {
					minMaxArr[$scope.showEchartsId].max = val;
				}
				
				if (val < minMaxArr[$scope.showEchartsId].min ) {
					minMaxArr[$scope.showEchartsId].min = val;
				}

			})
			
			//单一echarts
			var tempObj = echArr[$scope.showEchartsId];
	
			$scope.echItemes[$scope.showEchartsId].dataY.push(data);
			
			tempObj.yAxis[0].max = minMaxArr[$scope.showEchartsId].max;
			tempObj.yAxis[0].min = minMaxArr[$scope.showEchartsId].min;
			tempObj.series.push(data.data);
			tempObj.legend.data.push(data.dataName);
			
			echArr[$scope.showEchartsId] = tempObj;	
			
			//多组echarts
			var tempObj1 = echArr1[$scope.showEchartsId];
			
			tempObj1.grid.push({
				left: 50,
				right: 60,
			})
			
			//计算数据长度			
			var arrNum = tempObj1.grid.length;
			var echHeight = 100 / (arrNum + 1);
			var totalHeight = 0
			
			tempObj1.grid.forEach(function(val, index) {
				val.height = echHeight - parseInt(echHeight / 5 * 2) + '%'
				val.bottom = parseInt(echHeight / 5 * 3) + '%'
				if (index == 0) {
					val.top = '7%'
				}else {				
					val.top = echHeight * index + 7 + '%'
				}

			})
			
			tempObj1.xAxis.push({
                type : 'category',
				gridIndex: arrNum - 1,
				data: xAxisDatas,
//	                axisLine : {
//	                	lineStyle: {
//	                		color: '#fff'
//	                	}
//	                }
            })
			tempObj1.yAxis.push({
	                type : 'value',
	                gridIndex: arrNum - 1,
//	                 axisLine : {
//	                	lineStyle: {
//	                		color: '#fff'
//	                	}
//	                },
	                nameTextStyle: {
	                	color: '#fff'
	                }
	          })
			var newTempData = new Object();
			for (var k in data.data) {
				newTempData[k] = data.data[k]
			}
			newTempData.xAxisIndex = arrNum - 1
			newTempData.yAxisIndex = arrNum - 1
			tempObj1.series.push(newTempData);

			echArr1[$scope.showEchartsId].legend.data.push(data.dataName);
			
			tempObj1.dataZoom.forEach(function(val) {
				val.xAxisIndex.push(arrNum - 1)
			})
			
			echArr1[$scope.showEchartsId] = tempObj1;

			if ($scope.echItemes[$scope.showEchartsId].isOption) {				
				$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
			}else {
				$scope.echItemes[$scope.showEchartsId].option = echArr1[$scope.showEchartsId]				
			}	

			
		}
	
		//删除y轴数据的方法
		$scope.delDropY = function(data) {
	
			var dataIndex = $scope.echItemes[$scope.showEchartsId].dataY.indexOf(data)
	
			if (dataIndex != -1) {
				echArr[$scope.showEchartsId].series.splice(dataIndex, 1);
				$scope.echItemes[$scope.showEchartsId].dataY.splice(dataIndex, 1);
				$scope['option' + $scope.showEchartsId] = data.dataName + '-';
			}
		} 

		
		//拆合echarts
		$scope.toggleEcharts = function() {
			$scope.echItemes[$scope.showEchartsId].isOption = !$scope.echItemes[$scope.showEchartsId].isOption
			if ($scope.echItemes[$scope.showEchartsId].isOption) {				
				$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
			}else {
				$scope.echItemes[$scope.showEchartsId].option = echArr1[$scope.showEchartsId]				
			}
//			$scope.echItemes[$scope.showEchartsId].echToggle = !$scope.echItemes[$scope.showEchartsId].echToggle
//			$scope.echItemes1[$scope.showEchartsId].echToggle = !$scope.echItemes1[$scope.showEchartsId].echToggle
//			$scope.echItemes[$scope.showEchartsId] = echArr1[$scope.showEchartsId]
		}
	
		//添加echarts图表的方法
		$scope.addEcharts = function(oldData) {
			
			if (oldData.data === 'line') {
				var newData1 = new linE1();
				var newData2 = new linE2();
			}else {
				return
			}			
					
			$scope.echItemes.push({
				dataX: '',
				dataY: [],
				echToggle: false,
				option: newData1,
				isOption: true,
				config: {
					theme: 'default',
					event: [],
					dataLoaded: true
				}
			})
//			
//			$scope.echItemes1.push({
//				dataX: '',
//				dataY: [],
//				echToggle: true,
//				option: newData2,
//				config: {
//					theme: 'default',
//					event: [],
//					dataLoaded: true
//				}
//			})
			

//			$scope.echItemes1[$scope.echItemes1.length - 1].echToggle = false
//			$scope.echItemes[$scope.echItemes1.length - 1].echToggle = true

			
			echArr.push(newData1)
			echArr1.push(newData2)
			
			showMesItem($scope.echItemes.length - 1)

//			$scope['option' + $scope.showEchartsId] = newData1
//			$scope['option1' + $scope.showEchartsId] = newData2

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
			
			minMaxArr[$scope.showEchartsId] = new Object()

		}
	}])
 