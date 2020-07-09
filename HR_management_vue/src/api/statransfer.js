import request from "@/utils/request.js";

/**
 * 查询所有员工
 * @param {Object} params
 */
export function selectAllEmp(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/statransfer/selectAllEmp", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 查询员工for  d
 * @param {Object} params
 */
export function selectByPrimaryKey(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/statransfer/selectByPrimaryKey", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 *动态更新数据
 * @param {Object} params
 */
export function insertdepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/statransfer/insertdepartment", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}


/**
 *用empid查询单个员工详细调转信息
 * @param {Object} params
 */
export function selectByAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/statransfer/selectByAll", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}


export function selectAllStatransfer(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/statransfer/selectAllStatransfer", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}