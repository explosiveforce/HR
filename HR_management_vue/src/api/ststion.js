import request from "@/utils/request.js";
/* 
	查询所有岗位
 */
export function selectAllStation(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/selectAllStation", 
		 method: "get",
		 params: params //注意：如果是get请求请使用 params: params
	 });
}

/* 
	id查询岗位信息
 */
export function queryStationInfoById(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/queryStationInfoById", 
		 method: "get",
		 params: params //注意：如果是get请求请使用 params: params
	 });
}
/* 
	修改岗位信息
 */
export function updateStation(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/updateByPrimaryKeySelective", 
		 method: "post",
		 data: params //注意：如果是get请求请使用 params: params
	 });
}

/* 
	新增岗位
 */
export function addStation(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/insertSelective", 
		 method: "post",
		 data: params //注意：如果是get请求请使用 params: params
	 });
}

/**
 * 通过岗位id查询岗位下所有员工信息
 * @param {Object} params
 */
export function queryStationIdEmployee(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/employee/selectStationIdEmployee?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 查询//每个岗位有多少员工
 * @param {Object} params
 */
export function stationCountEmployee(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/stationCountEmployee?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 删除岗位
 * @param {Object} params
 */
export function deleteByPrimaryKey(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/station/deleteByPrimaryKey?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}