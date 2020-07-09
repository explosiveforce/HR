export default{
	name:"人事报表管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		newHireEmployeeList:{
			name:"新聘员工表",
			permissionsKey: "",
			path:"/reportFormManage/newepm"
		},
		dismissionEmployeeList:{
			name:"离职员工表",
			permissionsKey: "",
			path:"/reportFormManage/dimiss"
		},
		departmentTransferList:{
			name:"部门调动表",
			permissionsKey: "",
			path:"/reportFormManage/departmentTranfer"
		},
		stationTransferList:{
			name:"岗位调动表",
			permissionsKey: "",
			path:"/reportFormManage/stationTranfer"
		},
		monthlyReportList:{
			name:"人事月报",
			permissionsKey: "",
			path:"/reportFormManage/list"
		},
		
		
	}
}