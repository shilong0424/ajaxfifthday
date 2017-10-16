function ajax(obj){
	//默认参数
	var defaults = {
		type = 'get',//jsonp只支持get的请求方式,所以可以不用写
		url:'#',
		dataType:'jsonp',
		jsonp:'callback',
		data:{},
		success:function(data){
			console.log(data);
		}
	}

	for(var key in obj){
		dafaults[key] = obj[key];
	}

	var cbName = 'jQuery' + ('1.11.1' + Math.random()).replace(/\D/g,"") + '_' + (new Date().getTime());
    if(defaults.jsonpCallback){
        cbName = defaults.jsonpCallback;
    }
    window[cbName].function(data){
    	dafaults.success(data);
    }
    //分析传入的参数,把对象形式转换成字符串形式
    var param = '';
    for(var arr in dafaults.data){
    	param+= arr + '=' + dafaults.data[arr] + '&';
    }
    if (param) {
    	param = param.substring(0,param.length - 1);
    	param = '&' + param;
    };
    //创建script标签,利用src的属性来访问后台数据
    var script = document.creatElemnet('script');
    script.src = defaults.url +'?'+ defaults.jsonp + '=' + cbName + param;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(head);


}