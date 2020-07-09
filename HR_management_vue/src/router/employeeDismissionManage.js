import Layout from "@/views/layout/App.vue";
export default {
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
};
