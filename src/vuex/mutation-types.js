// 公共部分common.js
export const CHANGE_MENU_STATE = 'CHANGE_MENU_STATE'//改变左侧菜单栏状态
export const SET_LOADING_STATE = 'SET_LOADING_STATE'//设置loading状态

// 首页部分home.js
export const HOME_GET_BILLBOARD = 'HOME_GET_BILLBOARD'//获取首页轮播图
export const HOME_GET_NOW_PLAYING ='HOME_GET_NOW_PLAYING'//获取首页正在热播数据
export const HOME_GET_COMING_SOON ='HOME_GET_COMING_SOON'//获取首页即将上映数据
export const CHANGE_FIXED_STATE ='CHANGE_FIXED_STATE'//改变header是否吸顶的状态

//电影部分films.js
export const FILMS_GET_NOW = 'FILMS_GET_NOW'//获取电影页面正在热播数据
export const FILMS_GET_COMING = 'FILMS_GET_COMING'//获取电影页面即将上映数据
export const UPDATE_NOW_PAGES = 'UPDATE_NOW_PAGES'//更新要加载的页面数值
export const UPDATE_COMING_PAGES = 'UPDATE_COMING_PAGES'//更新要加载的页面数值
export const CHANGE_MORE_NOW = 'CHANGE_MORE_NOW'//是否可以继续获取NOW数据的状态
export const CHANGE_MORE_COMING = 'CHANGE_MORE_COMING'//是否可以继续获取coming数据的状态
export const CHANGE_FILM_LOADING = 'CHANGE_FILM_LOADING'//是否可以获取数据的状态
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'//改变当前路由信息
export const GET_FILM_DETAIL = 'GET_FILM_DETAIL'//获取电影详情页数据

// 城市部分cities.js
export const GET_CITIES = 'GET_CITIES'//获取城市信息
export const CHANGE_LOADING = 'CHANGE_LOADING'//获取城市信息
export const GET_LETTER_CITIES = 'GET_LETTER_CITIES'//获取以字母排序的城市信息
export const GET_PIN_YIN = 'GET_PIN_YIN'//获取首字母组成的数组
export const CHANGE_CURRENT_CITY = 'CHANGE_CURRENT_CITY'//更改当前城市


// 影院部分cenimas.js
export const GET_CINEMAS = 'GET_CINEMAS'//获取影院信息
export const GET_DTRICT = 'GET_DTRICT'//获取影院区域信息
export const GET_CENIMAS_DETAIL = 'GET_CENIMAS_DETAIL'//获取影院详情信息
