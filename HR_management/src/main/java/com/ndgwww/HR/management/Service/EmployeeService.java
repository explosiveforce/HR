package com.ndgwww.HR.management.Service;

import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;

import java.util.List;
import java.util.Map;

public interface EmployeeService {
    //查询所有员工信息
    List<Employee> selectAllEmployee ();
    //根据部门id查询
    List<Employee> selectDepartIdEmployee (String departmentid);
    
    //根据岗位id查询
    List<Station> selectStationIdEmployee (String stationId);
    
    //根据id查询员工详情信息
    Employee selectByPrimaryKey(String id);

    //动态更新员工数据
    int updateByPrimaryKeySelective(Employee record);
    int insertSelective(Employee record);
    int deleteByPrimaryKey(String id);
    /**
     * 根据id实现批量删除
     * @param id
     * @return
     */
    int deleteUserAllById(List<String> id);
    
  //查询在职员工信息
    List<Employee> selectTagEmployee ();
    
  //查询离职员工信息
    List<Employee> hasDismissionEmployee ();
}
