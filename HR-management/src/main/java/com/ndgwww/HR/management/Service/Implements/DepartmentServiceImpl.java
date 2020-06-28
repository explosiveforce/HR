package com.ndgwww.HR.management.Service.Implements;

import com.ndgwww.HR.management.Service.DepartmentService;
import com.ndgwww.HR.management.mapper.mapper2.DepartmentMapper2;
import com.ndgwww.HR.management.pojo.Department;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Resource
    private DepartmentMapper2 departmentMapper2;

    @Override
    public List<Department> selectdepartment() {
        return departmentMapper2.selectdepartment();
    }

    @Override
    public Integer Updateepartment(String id) {
        return departmentMapper2.Updateepartment(id);
    }
}
