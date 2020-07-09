import Layout from "@/views/layout/App.vue";
export default {
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
};
