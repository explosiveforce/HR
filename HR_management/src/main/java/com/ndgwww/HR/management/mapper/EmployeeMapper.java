package com.ndgwww.HR.management.mapper;

import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmployeeMapper {
    //查询所有员工信息
    List<Employee> selectAllEmployee ();
    //根据部门id查询
    List<Employee> selectDepartIdEmployee (String departmentid);
    
    //根据岗位id查询
    List<Station> selectStationIdEmployee (String stationId);
    
    int deleteByPrimaryKey(String id);

    int insert(Employee record);

    int insertSelective(Employee record);

    Employee selectByPrimaryKey(String id);
    //动态更新员工数据
    int updateByPrimaryKeySelective(Employee record);

    int updateByPrimaryKey(Employee record);
    /**
     * 根据id实现批量删除
     * @param maps
     * @return
     */
    int deleteUserAllById(Map<String,List<String>> maps);
    //查询在职员工信息
    List<Employee> selectTagEmployee ();
    
  //查询离职员工信息
    List<Employee> hasDismissionEmployee ();

}