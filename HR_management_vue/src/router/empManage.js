import Layout from "@/views/layout/App.vue";
export default {
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
	  path: "/addemp",
	  name: "addemp",
	  meta: {
	    title: "添加员工"
	  },
	  component: resolve =>
	    require(["@/views/empManage/Index.vue"], resolve)
	},
	{
	  path: "/empInfo",
	  name: "empInfoList",
	  meta: {
	    title: "员工详细信息"
	  },
	  component: resolve =>
	    require(["@/views/empManage/empInfoList.vue"], resolve)
	},
  ]
};
