package com.ndgwww.HR.management.Service;

import com.ndgwww.HR.management.pojo.Department;

import java.util.List;

public interface DepartmentService {
    public List<Department> selectdepartment();

    public Integer Updateepartment(String id);


}
