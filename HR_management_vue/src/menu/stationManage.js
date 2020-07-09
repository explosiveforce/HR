export default{
	name:"岗位管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		showStation:{
			name:"岗位信息列表",
			permissionsKey: "",
			   path: "/station_Manage/list"
		},
		
		countStation:{
			name:"岗位概况统计",
			permissionsKey: "",
			   path: "/station_Manage/count"
		},
		
		
	}
}