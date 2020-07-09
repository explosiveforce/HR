export default{
	name:"试用期管理",
	permissionsKey: "",
	icon: "fa fa-shopping-bag",
	children:{
		probationAssessment:{
			name:"员工试用期考核",
			permissionsKey: "",
			path:"/empProbation_Manage/list"
		},
		
		queryInfoOfBecomeAFullWorker:{
			name:"查询已转正员工信息",
			permissionsKey: "",
			path:"/empProbation_Manage/select"
		
		},
	}
	
}