package com.ndgwww.HR.management.Service;

import com.ndgwww.HR.management.pojo.Department;
import com.ndgwww.HR.management.pojo.count;

import java.util.List;

public interface DepartmentService {
    public List<Department> selectdepartment();

    public Integer Updateepartment(String id);

    public  Integer updateAll(Department department) throws Exception;
    public  Integer insertAll(Department department) throws Exception;
    public  List<count> DepartmentcountEmployee();
    public  Department selectiddepartment(String id);
    public List<Department> selectdepartmenttype();
}
