// 引入axios；
const axios = require('axios');

let url =process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
function fun_axios(api,f,r) {
	axios.get(api,{headers:{
		"X-Genpx":'{"co":"maizuo","cityId":"10","fingerprint":"44c0c04d2dab915f01d0ce757c10da37","longitude":"","latitude":""}'
	}})
				.then(res=>{
					f(res.data);
					console.log(res);
					if (r != undefined) {
						setTimeout(function () {
							r.filmScroll.refresh()
						},500)
					}
				})
				.catch(err=>console.log(err))
}

export default {
	// 获取首页数据
	// 根据时间戳获取首页轮播图数据
	getBillboard:(f)=>fun_axios(url+`/billboard/home?__t=${new Date().valueOf()}`,f),
	// 根据当前时间获取数据
	getNowPlaying:(f)=>fun_axios(url+`/film/now-playing?__t=${new Date().valueOf()}&page=1&count=4`,f),
	getComingSoon:(f)=>fun_axios(url+`/film/coming-soon?__t=${new Date().valueOf()}&page=1&count=3`,f),
	// 获取电影页数据
		//根据页码数获取数据
	getNowList:(page,f,r)=>fun_axios(url+`film/now-playing?page=${page}&count=7`,f,r),
	getComingList:(page,f,r)=>fun_axios(url+`film/coming-soon?page=${page}&count=7`,f,r),
	// 获取城市页面数据
	getCities:(f)=>fun_axios(url+`city?__t=${new Date()*1}`,f),
	//获取影院页面数据
	getCinemas:(f)=>fun_axios(url+`cinema?__t=${new Date()*1}`,f),
	// 获取详情页数据
	getFilmDetail:(id,f) =>{fun_axios(url +`film/${id}?__t=${new Date()*1}`,f)},
	getCenimasDetail:(id,f) =>fun_axios(url +`cinema/${id}?__t=${new Date()*1}`,f),
}
