import request from "@/utils/request.js";

/**
 * 获取部门列表
 * @param {Object} params
 */
export function departmentList(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/selectdepartment", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 通过部门id查询部门下所有员工信息
 * @param {Object} params
 */
export function queryEmpInDepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/employee/selectDepartIdEmployee?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 通过部门id查询部门信息,修改--数据回显
 * @param {Object} params
 */
export function queryDepartInfoById(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/getId", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 修改部门数据
 * @param {Object} params
 */
export function updateAllepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/updateAllepartment", 
		 method: "post",
		  //post请求请使用 date: params
		 data: params ,	 
	 });
}

/**
 * 删除
 * @param {Object} params
 */
export function Delectepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/Delectepartment?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 新增员工
 * @param {Object} params
 */
export function insertAllepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/insertAllepartment?", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}

/**
 * 查询//每个部门有多少员工
 * @param {Object} params
 */
export function DepartmentcountEmployee(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/DepartmentcountEmployee?", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}


/* 
	根据id查询员工(部门调动)
 */
export function selectAllEmp(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/deptransfer/selectAllEmp", 
		 method: "get",
		 params: params 
	 });
}

/* 
	根据员工编号查询员工(回显)
 */
export function selectByPrimaryKey(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/deptransfer/selectByPrimaryKey", 
		 method: "get",
		 params: params 
	 });
}

/**
 * 调动
 * @param {Object} params
 */
export function insertdepartment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/deptransfer/insertdepartment?", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}

/* 
	根据id查询员工(部门已调动)
 */
export function selectAllDeptransfer(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/deptransfer/selectAllDeptransfer", 
		 method: "get",
		 params: params 
	 });
}

/**
 * 获取部门列表(id,name)
 * @param {Object} params
 */
export function selectdepartmenttype(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/department/selectdepartmenttype", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}