package com.ndgwww.HR.management.Service.Implements;

import com.ndgwww.HR.management.Service.EmployeeService;
import com.ndgwww.HR.management.mapper.EmployeeMapper;
import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Resource
    private EmployeeMapper employeeMapper;
    @Override
    public List<Employee> selectAllEmployee() {
        return employeeMapper.selectAllEmployee();
    }

    @Override
    public List<Employee> selectDepartIdEmployee(String departmentid) {
        return employeeMapper.selectDepartIdEmployee(departmentid);
    }

    @Override
    public Employee selectByPrimaryKey(String id) {
        return employeeMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Employee record) {
        return employeeMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int insertSelective(Employee record) {
        return employeeMapper.insertSelective(record);
    }

    @Override
    public int deleteByPrimaryKey(String id) {
        return employeeMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int deleteUserAllById(List<String> id) {
        //创建一个map对象，map里面有个list集合
        HashMap<String, List<String>> map = new HashMap<>();
        map.put("id",id );
        return employeeMapper.deleteUserAllById(map);
    }
    
    @Override	//根据岗位id查询
    public List<Station> selectStationIdEmployee (String stationId){
    	
    	return  employeeMapper.selectStationIdEmployee(stationId);
    }
    
    
    @Override
    public List<Employee> selectTagEmployee() {
        return employeeMapper.selectTagEmployee();
    }
    
    
    @Override
    public List<Employee> hasDismissionEmployee() {
        return employeeMapper.hasDismissionEmployee();
    }
}
