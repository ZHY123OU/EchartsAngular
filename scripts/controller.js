var app = angular.module('myApp', ['ngDraggable', 'ngEcharts'])

	.controller('myApp.controller', ['$scope', '$timeout', '$http', '$location', function($scope, $timeout, $http, $location) {
	  
		//存放echarts的数组
		var echArr = [];
		var echArr1 = [];
		
		//echarts的配置项
		function linE1() {
			this.tooltip = {
	            trigger: 'axis',
	            triggerOn: 'mousemove',
	            axisPointer: {
	                type: 'line',
	                snap: false,
//	                animation: true
	            }
	      };
  		    this.axisPointer= {
		        link: {yAxisIndex: 'all'}
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
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            dataView: {show: true, readOnly: false},
		            restore: {show: true},
		            saveAsImage: {show: true}
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
	                animation: true
	            }
	       };
	        this.legend= {
//	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
				data:[],
//				textStyle: {
//					color: '#fff'
//				}
	        };
	        this.toolbox= {
	            feature: {
		            dataZoom: {
		                yAxisIndex: 'none'
		            },
		            restore: {},
		            saveAsImage: {}
		        }
	        };
	        
		    this.axisPointer= {
		        link: {yAxisIndex: 'all'}
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
	  
			echArr1[$scope.showEchartsId].xAxis.forEach(function(val) {
				val.data = xAxisDatas;
			})
			
			console.log(echArr1, 'echArr1')
			

			if ($scope.echItemes[$scope.showEchartsId].isOption) {				
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
				minMaxArr[$scope.showEchartsId].max = minMaxArr[$scope.showEchartsId].max? minMaxArr[$scope.showEchartsId].max : val
				minMaxArr[$scope.showEchartsId].min = minMaxArr[$scope.showEchartsId].min? minMaxArr[$scope.showEchartsId].min : val
				
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
			
			var max;
			var min;
			
			data.data.data.forEach(function(dataVal, dataIndex) {
				if (dataIndex == 0) {
					max = dataVal;
					min = dataVal;
				}
				if (dataVal > max) {
					max = dataVal;
				}
				
				if (dataVal < min) {
					min = dataVal;
				}
			})
			
			tempObj1.xAxis.push({
                type : 'category',
				gridIndex: $scope.echItemes[$scope.showEchartsId].xyIndex,
				data: xAxisDatas,
//	                axisLine : {
//	                	lineStyle: {
//	                		color: '#fff'
//	                	}
//	                }
            })
			tempObj1.yAxis.push({
	                type : 'value',
	                max: max,
	                min: min,
	                gridIndex: $scope.echItemes[$scope.showEchartsId].xyIndex,
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
			newTempData.xAxisIndex = $scope.echItemes[$scope.showEchartsId].xyIndex
			newTempData.yAxisIndex = $scope.echItemes[$scope.showEchartsId].xyIndex
			tempObj1.series.push(newTempData);

			echArr1[$scope.showEchartsId].legend.data.push(data.dataName);
			
			tempObj1.dataZoom.forEach(function(val) {
				val.xAxisIndex.push($scope.echItemes[$scope.showEchartsId].xyIndex)
			})
			
			echArr1[$scope.showEchartsId] = tempObj1;
			
			console.log(tempObj1, 'tempObj1')

			if ($scope.echItemes[$scope.showEchartsId].isOption) {				
				$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
			}else {
				$scope.echItemes[$scope.showEchartsId].option = echArr1[$scope.showEchartsId]				
			}	
			
			console.log($scope.echItemes[$scope.showEchartsId].option, "$scope.echItemes[$scope.showEchartsId].option")
			

			$scope.echItemes[$scope.showEchartsId].xyIndex++
		}
	
		//删除y轴数据的方法
		$scope.delDropY = function(data) {
	
			var dataIndex = $scope.echItemes[$scope.showEchartsId].dataY.indexOf(data)
	
			if (dataIndex != -1) {
				//单组echarts的删除方法
				echArr[$scope.showEchartsId].series.splice(dataIndex, 1);
				$scope.echItemes[$scope.showEchartsId].dataY.splice(dataIndex, 1);
				
				//多条echarts的删除方法
				$scope.echItemes[$scope.showEchartsId].xyIndex--
				
				var tempObj1 = new Object()
				
				for (var k in echArr1[$scope.showEchartsId]) {
					tempObj1[k] = echArr1[$scope.showEchartsId][k]
				}
				tempObj1.grid.splice(dataIndex, 1);
				tempObj1.xAxis.splice(dataIndex, 1);
				tempObj1.yAxis.splice(dataIndex, 1);
				tempObj1.series.splice(dataIndex, 1);
				
				console.log(tempObj1, 'deltempObj1')
				
				tempObj1.xAxis.forEach(function(val, index) {
					val.gridIndex = index
				})
				tempObj1.yAxis.forEach(function(val, index) {
					val.gridIndex = index					
				})
				tempObj1.series.forEach(function(val, index) {
					val.xAxisIndex = index;
					val.yAxisIndex = index;
				})
				tempObj1.dataZoom.forEach(function(val, index) {
					val.xAxisIndex.splice(dataIndex, 1)
					
					for (var i = 0; i < val.xAxisIndex.length; i++) {
						val.xAxisIndex[i] = i
					}

				}) 
				
//				console.table(echArr1[$scope.showEchartsId],['gridIndex', 'xAxisIndex', 'yAxisIndex'], 'echArr1[$scope.showEchartsId]')
				
				var arrNum = tempObj1.grid.length;
				var echHeight = 100 / (arrNum + 1);
				
				if (arrNum == 0) {
					return
				}
				
				tempObj1.grid.forEach(function(val, index) {
					val.height = echHeight - parseInt(echHeight / 5 * 2) + '%'
					val.bottom = parseInt(echHeight / 5 * 3) + '%'
					if (index == 0) {
						val.top = '7%'
					}else {				
						val.top = echHeight * index + 7 + '%'
					}
	
				})
				console.log(tempObj1, 'del')
				echArr1[$scope.showEchartsId] = tempObj1;
				
				if ($scope.echItemes[$scope.showEchartsId].isOption) {				
					$scope.echItemes[$scope.showEchartsId].option = echArr[$scope.showEchartsId]
				}else {
					$scope.echItemes[$scope.showEchartsId].option = echArr1[$scope.showEchartsId]				
				}
//				
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
				xyIndex: 0,
				config: {
					theme: 'default',
					event: [],
					dataLoaded: true
				}
			})
			
			echArr.push(newData1)
			echArr1.push(newData2)
			
			showMesItem($scope.echItemes.length - 1)
			
			minMaxArr.push(new Object())

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
		}
		
		$scope.repeatInput = new Array()
	
		$scope.showBox = function(boxName, i) {
			$scope[boxName] = true;
			$scope.modelConfig = {
				theme: 'default',
				event: [],
				dataLoaded: true
			}
		    
		    $scope.repeatInput = new Array()
		    
		    
		    var newTempObj = new Object();
		    for(var k in $scope.echItemes[i].option) {
		    	newTempObj[k] = $scope.echItemes[i].option[k];
		    }
		    
		    var dataLen = newTempObj.series.length;
		    
		    for (var j = 0; j < dataLen; j++) {
		    	$scope.repeatInput.push({
		    		startInp : 300,
		    		endInp : 0
		    	})
		    }
		    	    
		    if ($scope.modelOption && $scope.modelOption.visualMap) {

		    	$scope.repeatInput.forEach(function(val, index) {
		    		val.startInp = $scope.modelOption.visualMap[index].range[1];
		    		val.endInp = $scope.modelOption.visualMap[index].range[0];
		    	})
		    	
		    	return
		    }
		    
		    newTempObj.visualMap = new Array();
		    
		    for (var j = 0; j < dataLen; j++) {

		    	
		    	newTempObj.series[j].markLine = {
		    		data : [{yAxis: 300}]
		    	}
		    	
		    	var max = newTempObj.yAxis[j] ? newTempObj.yAxis[j].max : newTempObj.yAxis[0].max
		    	var min = newTempObj.yAxis[j] ? newTempObj.yAxis[j].min : newTempObj.yAxis[0].min
		    	
		    	console.log(max, min, newTempObj, 'newTempObj')
		    	
		    	newTempObj.visualMap.push({
		    		seriesIndex: j,
		    		show: false,
		    		max: max,
			    	min: min,
			    	left: 10,
			    	top: 150 * j + 10,
			    	range: [0, 300],
			    	calculable: true,
			    	realtime: true,
			    	hoverLink: true,
			    	outOfRange: {
			    		symbol: 'diamond',
			    		symbolSize: '30'
			    	}
		    	})
		    }
		   			
			$scope.modelOption = newTempObj
		}
		
		$scope.chanMakeLine = function(name, val, i) {
			if (name == 'start') {
//				$scope.modelOption.serise[i].markLine.data[0].yAxis = val;

				$scope.modelOption.visualMap[i].range[1] = val;
				
				if (!$scope.modelOption.series[i].markLine) {
					$scope.modelOption.series[i].markLine = {data: new Array()};
				}

				$scope.modelOption.series[i].markLine.data[0] = {yAxis: val};
				
				console.log($scope.modelOption, '$scope.modelOption')
			}else if (name == 'end') {				
//				$scope.modelOption.serise[i].markLine.data[1].yAxis = val;
				$scope.modelOption.visualMap[i].range[0] = val;
				
				if (!$scope.modelOption.series[i].markLine) {
					$scope.modelOption.series[i].markLine = {data: new Array()}
				}
				
				$scope.modelOption.series[i].markLine.data[1] = {yAxis: val};				
			}
		}
		
		$scope.hideBox = function(boxName) {
			$scope[boxName] = false;
			
			console.log($scope.modelOption, 'hide')
			
		}
		
	}])
 