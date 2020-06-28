package com.ndgwww.HR.management.Controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ndgwww.HR.management.Service.EmployeeService;
import com.ndgwww.HR.management.pojo.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//返回的数据都是json
@RequestMapping("/employee")
//@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    //分页查询所有员工信息
    @RequestMapping(value = "/selectAllEmployee",method = RequestMethod.GET)
    public PageInfo<Employee> selectAllEmployee(@RequestParam(defaultValue = "1") int pageNo, @RequestParam(defaultValue = "3") int pageSize){
        PageHelper.startPage(pageNo,pageSize);
        List<Employee> list = employeeService.selectAllEmployee();
        //将查询到的数据封装到PageInfo对象
        PageInfo<Employee> pageInfo=new PageInfo(list);
        return pageInfo;
    }
    //这是根据部门id查询部门下的员工
    @RequestMapping(value = "/selectDepartIdEmployee",method = RequestMethod.GET)
    public List selectDepartIdEmployee(@RequestParam("departmentid")String departmentid){
        return employeeService.selectDepartIdEmployee(departmentid);
    }
}
