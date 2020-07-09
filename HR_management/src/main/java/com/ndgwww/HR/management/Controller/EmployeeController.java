package com.ndgwww.HR.management.Controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ndgwww.HR.management.Config.RespBean;
import com.ndgwww.HR.management.Service.EmployeeService;
import com.ndgwww.HR.management.pojo.Employee;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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
    
  //这是根据岗位id查询岗位下所含员工
    @RequestMapping(value = "/selectStationIdEmployee",method = RequestMethod.GET)
    public List selectStationIdEmployee(@RequestParam("stationId")String stationId){
    	
        return employeeService.selectStationIdEmployee(stationId);
    }
    //动态更新数据
    @RequestMapping(value = "/updateByPrimaryKeySelective",method = RequestMethod.POST)
    public RespBean updateByPrimaryKeySelective(@RequestBody Employee employee){
        int resp= employeeService.updateByPrimaryKeySelective(employee);
        if(resp>0){
            return new RespBean("success","员工信息更新成功");
        }else {
            return new RespBean("error","员工信息更新失败");
        }
    }
    //通过id查询员工具体信息
    @RequestMapping(value = "/queryEmpInfoById",method = RequestMethod.GET)
    public Employee selectByPrimaryKey(@RequestParam("id")String id){

        return employeeService.selectByPrimaryKey(id);
    }

    //新增员工信息
    @RequestMapping(value = "/insertSelective",method = RequestMethod.POST)
    public RespBean insertSelective(@RequestBody Employee employee) {
        System.out.println(employee.getStationid()+"ad");
        int resp = employeeService.insertSelective(employee);
        if (resp > 0) {

            return new RespBean("success", "欢迎新成员信息插入成功");
        } else {
            return new RespBean("error", "员工信息插入失败");
        }
    }
    //删除员工信息：真删除
    @RequestMapping(value = "/deleteByPrimaryKey",method = RequestMethod.POST)
    public RespBean deleteByPrimaryKey(@RequestParam("id")String id){
        int resp = employeeService.deleteByPrimaryKey(id);
        if (resp > 0) {
            return new RespBean("success", "删除成功");
        } else {
            return new RespBean("error", "删除失败");
        }
    }
    @GetMapping("/deleteUserAll")
    //根据id批量删除用户
    @ResponseBody
    //required：是否包含该参数，默认为true，表示该请求路径中必须包含该参数，如果不包含就报错。
    public RespBean deleteUserAllById(@RequestParam(required = true) String id){
    	
        List idList = new ArrayList();
        String[] strs = id.split(",");
        for (String str:strs){
            idList.add(str);
        }
        int resp = employeeService.deleteUserAllById(idList);
        if (resp > 0) {
            return new RespBean("success", "删除成功");
        } else {
            return new RespBean("error", "删除失败");
        }
    }
    
    //分页查询在职员工信息
    @RequestMapping(value = "/selectTagEmployee",method = RequestMethod.GET)
    public PageInfo<Employee> selectTagEmployee(@RequestParam(defaultValue = "1") int pageNo, @RequestParam(defaultValue = "3") int pageSize){
        PageHelper.startPage(pageNo,pageSize);
        List<Employee> list = employeeService.selectTagEmployee();
        //将查询到的数据封装到PageInfo对象
        PageInfo<Employee> pageInfo=new PageInfo(list);
        return pageInfo;
    }
    
    //分页查询离职员工信息
    @RequestMapping(value = "/hasDismissionEmployee",method = RequestMethod.GET)
    public PageInfo<Employee> hasDismissionEmployee(@RequestParam(defaultValue = "1") int pageNo, @RequestParam(defaultValue = "3") int pageSize){
        PageHelper.startPage(pageNo,pageSize);
        List<Employee> list = employeeService.hasDismissionEmployee();
        //将查询到的数据封装到PageInfo对象
        PageInfo<Employee> pageInfo=new PageInfo(list);
        return pageInfo;
    }

}
