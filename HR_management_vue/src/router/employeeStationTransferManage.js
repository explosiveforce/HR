import Layout from "@/views/layout/App.vue";
export default {
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
};
