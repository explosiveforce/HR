import Layout from "@/views/layout/App.vue";
export default [ 
	{
		path: "/department_Manage",
		component: Layout,
		name: "departmentManage",
		redirect: "/department_Manage/list",
		meta: {
		  title: "部门管理"
		},
		children: [
		  {
		    path: "list",
		    name: "departmentManage",
		    meta: {
		      title: "部门列表"
		    },
		    component: resolve =>
		      require(["@/views/departmentManage/list/Index.vue"], resolve)
		  },
			
		]
	},
	{
		path: "/empDepartmentTranfer_Manage",
		component: Layout,
		name: "empDepartmentTranferManage",
		redirect: "/empDepartmentTranfer_Manage/list",
		meta: {
		  title: "员工部门调动管理"
		},
		children: [
		  {
		    path: "list",
		    name: "empDepartmentTranferManage",
		    meta: {
		      title: "部门调动"
		    },
		    component: resolve =>
		      require(["@/views/empDepartmentTranferManage/Index.vue"], resolve)
		  },
			{
			  path: "select",
			  name: "empDepartmentTranferManage",
			  meta: {
			    title: "查询已进行调用员工信息"
			  },
			  component: resolve =>
			    require(["@/views/empDepartmentTranferManage/moveemp.vue"], resolve)
			},
		]
	},
	
	{
		path: "/demission_manage",
		component: Layout,
		name: "demissionManage",
		redirect: "/demission_manage/demissionrManage",
		meta: {
		  title: "员工离职管理"
		},
		children: [
		  {
		    path: "demissionrManage",
		    name: "demissionrManageList",
		    meta: {
		      title: "离职管理"
		    },
		    component: resolve =>
		      require(["@/views/empDismissionferManage/demissionrManage.vue"], resolve)
		  },
			
			{
			  path: "hasDismissionEmpInfo",
			  name: "hasDismissionEmpInfoList",
			  meta: {
			    title: "查询已离职人员信息列"
			  },
			  component: resolve =>
			  require(["@/views/empDismissionferManage/hasDismissionEmpInfo.vue"], resolve)
			},
			
			
		]
	},
	{
		path: "/stationTransfer_manage",
		component: Layout,
		name: "stationTransferManage",
		redirect: "/stationTransfer_manage/list",
		meta: {
		  title: "员工岗位调动管理"
		},
		children: [
		  {
		    path: "list",
		    name: "stationTransferManageList",
		    meta: {
		      title: "岗位调动"
		    },
		    component: resolve =>
		      require(["@/views/empStationTransferManage/Index.vue"], resolve)
		  },
			
			{
			  path: "hasTransferEmpInfo",
			  name: "hasTransferEmpInfoList",
			  meta: {
			    title: "查询已调动人员信息列"
			  },
			  component: resolve =>
			  require(["@/views/empStationTransferManage/moveemp.vue"], resolve)
			},
		]
	},
	{
		path: "/emp_manage",
		component: Layout,
		name: "empManage",
		redirect: "/emp_manage/list",
		meta: {
		  title: "员工信息管理"
		},
		children: [
		  {
		    path: "list",
		    name: "empList",
		    meta: {
		      title: "员工信息"
		    },
		    component: resolve =>
		      require(["@/views/empManage/empList.vue"], resolve)
		  },
			{
			  path: "addemp",
			  name: "addemp",
			  meta: {
			    title: "添加员工"
			  },
			  component: resolve =>
			    require(["@/views/empManage/Index.vue"], resolve)
			},
			{
			  path: "empInfoList",
			  name: "empInfoList",
			  meta: {
			    title: "员工详细信息"
			  },
			  component: resolve =>
			    require(["@/views/empManage/empInfoList.vue"], resolve)
			},
		]
	},
	{
		path: "/empProbation_Manage",
		component: Layout,
		name: "empProbationManage",
		redirect: "/empProbation_Manage/list",
		meta: {
		  title: "员工试用期管理"
		},
		children: [
		  {
		    path: "list",
		    name: "empProbationManage",
		    meta: {
		      title: "员工试用期考核"
		    },
		    component: resolve =>
		      require(["@/views/empProbationManage/Index.vue"], resolve)
		  },
			
			{
			  path: "select",
			  name: "empProbationManage",
			  meta: {
			    title: "查询已转正员工信息"
			  },
			  component: resolve =>
			    require(["@/views/empProbationManage/select.vue"], resolve)
			},
		]
	},
	{
		path: "/reportFormManage",
		component: Layout,
		name: "reportFormManage",
		redirect: "/reportFormManage/list",
		meta: {
		  title: "报表管理"
		},
		children: [
		  {
		    path: "newepm",
		    name: "reportFormManage",
		    meta: {
		      title: "新聘员工表"
		    },
		    component: resolve =>
		      require(["@/views/reportFormManage/newepm.vue"], resolve)
		  },
			{
			  path: "dimiss",
			  name: "reportFormManage",
			  meta: {
			    title: "离职员工表"
			  },
			  component: resolve =>
			    require(["@/views/reportFormManage/dimissemp.vue"], resolve)
			},
			{
			  path: "departmentTranfer",
			  name: "reportFormManage",
			  meta: {
			    title: "部门调动表"
			  },
			  component: resolve =>
			    require(["@/views/reportFormManage/departmentTranfer.vue"], resolve)
			},
			{
			  path: "stationTranfer",
			  name: "reportFormManage",
			  meta: {
			    title: "岗位调动表"
			  },
			  component: resolve =>
			    require(["@/views/reportFormManage/stationTranfer.vue"], resolve)
			},
			{
			  path: "list",
			  name: "reportFormManage",
			  meta: {
			    title: "人事月报"
			  },
			  component: resolve =>
			    require(["@/views/reportFormManage/personnelReport.vue"], resolve)
			},
			
		]
	},
	{
		path: "/station_Manage",
		component: Layout,
		name: "stationManage",
		redirect: "/station_Manage/list",
		meta: {
		  title: "岗位管理"
		},
		children: [
		  {
		    path: "list",
		    name: "stationManage",
		    meta: {
		      title: "岗位列表"
		    },
		    component: resolve =>
		      require(["@/views/stationManage/listsm/Index.vue"], resolve)
		  },
			{
			  path: "stationemp",
			  name: "stationemp",
			  meta: {
			    title: "岗位员工信息"
			  },
			  component: resolve =>
			    require(["@/views/stationManage/listsm/selectemp.vue"], resolve)
			}
		]
	}
];
