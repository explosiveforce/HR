import request from "@/utils/request.js";
/* 
	查询实习期员工
 */
export function queryForList(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/try/queryForList?", 
		 method: "get",
		  //post请求请使用 data: params
		 params: params ,	 
	 });
}

/* 
	x修改
 */
export function updateByPrimaryKeySelective(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/try/updateByPrimaryKeySelective", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}
export function deleteByPrimaryKey(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/try/deleteByPrimaryKey", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/* 
	根据id查询员工
 */
export function queryTrybyid(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/try/selectByPrimaryKey?", 
		 method: "get",
		  //post请求请使用 data: params
		 params: params ,	 
	 });
}

