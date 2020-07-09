import Layout from "@/views/layout/App.vue";
export default {
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
      name: "stationList",
      meta: {
        title: "岗位列表"
      },
      component: resolve =>
        require(["@/views/stationManage/listsm/Index.vue"], resolve)
    },
	
	{
	  path: "count",
	  name: "stationCount",
	  meta: {
	    title: "岗位列表"
	  },
	  component: resolve =>
	    require(["@/views/stationManage/listsm/stayionCountEchars.vue"], resolve)
	},
	
  ]
};
