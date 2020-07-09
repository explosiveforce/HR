package com.ndgwww.HR.management.Controller;

import com.ndgwww.HR.management.Config.RespBean;
import com.ndgwww.HR.management.Service.EmployeeService;
import com.ndgwww.HR.management.Service.StationService;
import com.ndgwww.HR.management.pojo.Department;
import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;
import com.ndgwww.HR.management.pojo.count;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController//返回的数据都是json
@RequestMapping("/station")
public class StationController {

    @Autowired
    private StationService stationService;

    //查询所有岗位
    @RequestMapping(value = "/selectAllStation",method = RequestMethod.GET)
    public List selectAllStation(){
        return stationService.selectAllStation();
    }

    //根据id删除岗位
    @RequestMapping(value = "/deleteByPrimaryKey",method = RequestMethod.GET)
    public RespBean deleteByPrimaryKey(@RequestParam("stationid") String stationid){
        int resp=stationService.deleteByPrimaryKey(stationid);
        if(resp>0){
            return new RespBean("success","删除岗位成功");
        }else {
            return new RespBean("error","删除岗位失败");
        }
    }
    
    //通过主键查询岗位信息(回显)

    @RequestMapping(value = "/queryStationInfoById",method = RequestMethod.GET)
    public Station selectByPrimaryKey(@RequestParam("id")String id){

        return stationService.selectByPrimaryKey(id);
    }

    @RequestMapping(value = "/updateByPrimaryKeySelective",method = RequestMethod.POST)
    public RespBean updateByPrimaryKeySelective(@RequestBody Station station) throws Exception {
        int resp=stationService.updateByPrimaryKeySelective(station);
        if(resp>0){
            return new RespBean("success","修改岗位成功");
        }else {
            return new RespBean("error","修改岗位失败");
        }
    }
    @RequestMapping(value = "/insertSelective",method = RequestMethod.POST)
    public RespBean insertSelective(@RequestBody Station station) throws Exception {
        int resp=stationService.insertSelective(station);
        if(resp>0){
            return new RespBean("success","新增岗位成功");
        }else {
            return new RespBean("error","新增岗位失败");
        }
    }
    
    //每个岗位有多少员工，
    @RequestMapping(value = "/stationCountEmployee",method = RequestMethod.GET)
    public List<count> stationCountEmployee(){
        return stationService.stationCountEmployee();
    }
    
    







}

