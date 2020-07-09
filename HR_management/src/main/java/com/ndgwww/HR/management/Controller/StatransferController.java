package com.ndgwww.HR.management.Controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ndgwww.HR.management.Config.RespBean;
import com.ndgwww.HR.management.Service.StatransferService;

import com.ndgwww.HR.management.pojo.Statransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController//返回的数据都是json
@RequestMapping("/statransfer")
public class StatransferController {
    @Autowired
    private StatransferService statransferService;
    //查询所有员工 包括没有调动的 分页
    @RequestMapping(value = "/selectAllEmp",method = RequestMethod.GET)
    public PageInfo<Statransfer> selectAllEmp(@RequestParam(defaultValue = "1") int pageNo, @RequestParam(defaultValue = "3") int pageSize){
        PageHelper.startPage(pageNo,pageSize);
        List<Statransfer> list = statransferService.selectAllEmp();
        //将查询到的数据封装到PageInfo对象
        PageInfo<Statransfer> pageInfo=new PageInfo(list);
        return pageInfo;
    }
    //查询所有已调动的员工 分页
    @RequestMapping(value = "/selectAllStatransfer",method = RequestMethod.GET)
    public PageInfo<Statransfer> selectAllStatransfer(@RequestParam(defaultValue = "1") int pageNo, @RequestParam(defaultValue = "3") int pageSize){
        PageHelper.startPage(pageNo,pageSize);
        List<Statransfer> list = statransferService.selectAllStatransfer();
        //将查询到的数据封装到PageInfo对象
        PageInfo<Statransfer> pageInfo=new PageInfo(list);
        return pageInfo;
    }
    //用empid查询单个员工最新信息
    @RequestMapping(value = "/selectByPrimaryKey",method = RequestMethod.GET)
    public Statransfer selectByPrimaryKey(@RequestParam("id")String id){
        return statransferService.selectByPrimaryKey(id);
    }
    //用empid查询单个员工详细调转信息
    @RequestMapping(value = "/selectByAll",method = RequestMethod.GET)
    public List selectByAll(@RequestParam("id")String id){
        return statransferService.selectByAll(id);
    }
    //动态更新数据
    @RequestMapping(value = "/insertdepartment",method = RequestMethod.POST)
    public RespBean insertdepartment(@RequestBody Statransfer statransfer){
        int resp= statransferService.insertdepartment(statransfer);
        if(resp>0){
            return new RespBean("success","员工信息更新成功");
        }else {
            return new RespBean("error","员工信息更新失败");
        }
    }
}
