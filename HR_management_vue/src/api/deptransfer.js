import request from "@/utils/request.js";

/**
 * 查询所有员工
 * @param {Object} params
 */
export function selectAllEmp(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/deptransfer/selectAllEmp", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}