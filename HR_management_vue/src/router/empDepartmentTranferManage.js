import Layout from "@/views/layout/App.vue";
export default {
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
};
