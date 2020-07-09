package com.ndgwww.HR.management.Service;


import com.ndgwww.HR.management.pojo.Deptransfer;

import java.util.List;

public interface DeptransferService {
    public Deptransfer selectByPrimaryKey(String id);
    public Integer insertdepartment(Deptransfer record);
    public List<Deptransfer> selectByAll(String id);
    public List<Deptransfer> selectAllEmp ();
    public List<Deptransfer> selectAllDeptransfer ();
}
