export default{
	name:"岗位调动管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		empStationTransfer:{
			name:"岗位调动",
			permissionsKey: "",
			path:"/stationTransfer_manage/list"
		},
		queryEmpStationTransfer:{
			name:"查询已调动岗位员工信息",
			permissionsKey: "",
			// 跳到router文件夹的userManage.js中去
			path:"/stationTransfer_manage/hasTransferEmpInfo"
		}
		
		
	}
}