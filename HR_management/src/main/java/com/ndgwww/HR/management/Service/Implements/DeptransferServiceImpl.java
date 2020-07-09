package com.ndgwww.HR.management.Service.Implements;

import com.ndgwww.HR.management.Service.DeptransferService;
import com.ndgwww.HR.management.mapper.DeptransferMapper;
import com.ndgwww.HR.management.pojo.Deptransfer;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DeptransferServiceImpl implements DeptransferService {
    @Resource
    public DeptransferMapper deptransfer;


    @Override
    public Deptransfer selectByPrimaryKey(String empid) {
        return deptransfer.selectByPrimaryKey(empid);
    }

    @Override
    public Integer insertdepartment(Deptransfer record) {
        return deptransfer.insertdepartment(record);
    }

    @Override
    public List<Deptransfer> selectByAll(String empid) {
        return deptransfer.selectByAll(empid);
    }

    @Override
    public List<Deptransfer> selectAllEmp() {
        return deptransfer.selectAllEmp();
    }

    @Override
    public List<Deptransfer> selectAllDeptransfer() {
        return deptransfer.selectAllDeptransfer();
    }
}
