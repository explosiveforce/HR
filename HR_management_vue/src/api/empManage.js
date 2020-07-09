import request from "@/utils/request.js";
/* 
	查询所有员工
 */
export function selectAllEmployee(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/employee/selectAllEmployee", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}

/**
 * 新增员工
 * @param {Object} params
 */
export function insertSelective(params){
	
	return request({
		
		url: "/employee/insertSelective",
		method: "post",
		 //get请求请使用 params: params
		data: params ,	
	})
	
}

/**
 * 通过id查询员工详情信息
 * @param {Object} params
 */
export function queryEmpInfoById(params){
	
	return request({
		
		url: "/employee/queryEmpInfoById",
		method: "get",
		 //get请求请使用 params: params
		params: params ,	
	})
	
}

/**
 *修改员工信息
 * @param {Object} params
 */
export function updateByPrimaryKeySelective(params){
	
	return request({
		
		url: "/employee/updateByPrimaryKeySelective",
		method: "post",
		 //get请求请使用 params: params
		data: params ,	
	})
	
}

/**
 *员工离职
 * @param {Object} params
 */
export function deleteUserAll(params){
	
	return request({
		
		url: "/employee/deleteUserAll",
		method: "get",
		 //get请求请使用 params: params
		params: params ,	
	})
	
}


/**
 *在职员工查询
 * @param {Object} params
 */
export function selectTagEmployee(params){
	
	return request({
		
		url: "/employee/selectTagEmployee",
		method: "get",
		 //get请求请使用 params: params
		params: params ,	
	})
	
}



/**
 *离职员工查询
 * @param {Object} params
 */
export function hasDismissionEmployee(params){
	
	return request({
		
		url: "/employee/hasDismissionEmployee",
		method: "get",
		 //get请求请使用 params: params
		params: params ,	
	})
	
}


/**
 *真删除--离职员工信息
 * @param {Object} params
 */
export function deleteByPrimaryKey(params){
	
	return request({
		
		url: "/employee/deleteByPrimaryKey",
		method: "get",
		 //get请求请使用 params: params
		params: params ,	
	})
	
}
