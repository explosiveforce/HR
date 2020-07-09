import Layout from "@/views/layout/App.vue";
export default {
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
      name: "departmentList",
      meta: {
        title: "部门列表"
      },
      component: resolve =>
        require(["@/views/departmentManage/list/Index.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "departmentCount",
	  meta: {
	    title: "部门概况统计"
	  },
	  component: resolve =>
	    require(["@/views/departmentManage/list/departmentCountEchars.vue"], resolve)
	},
	
  ]
};
