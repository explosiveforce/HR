package com.ndgwww.HR.management.Controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.ndgwww.HR.management.Config.RespBean;
import com.ndgwww.HR.management.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//返回的数据都是json
@RequestMapping("/department")
//@CrossOrigin
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;
    //查询所有部门
    @RequestMapping(value = "/selectdepartment",method = RequestMethod.GET)
    public List selectdepartment(){
        return departmentService.selectdepartment();
    }
    //删除部门
    @RequestMapping(value = "/Updateepartment",method = RequestMethod.GET)
    public RespBean Updateepartment(@RequestParam("id") String id){
        int resp=departmentService.Updateepartment(id);
        if(resp>0){
            return new RespBean("success","删除成功");
        }else {
            return new RespBean("error","删除失败");
        }
    }
}

