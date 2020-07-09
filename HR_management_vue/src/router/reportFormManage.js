import Layout from "@/views/layout/App.vue";
export default {
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
};
