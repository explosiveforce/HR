package com.ndgwww.HR.management.Service;


import com.ndgwww.HR.management.pojo.Statransfer;

import java.util.List;

public interface StatransferService {
    public Statransfer selectByPrimaryKey(String id);
    public  Integer insertdepartment(Statransfer record);
    public List<Statransfer> selectByAll(String id);
    public List<Statransfer> selectAllEmp();
    public List<Statransfer> selectAllStatransfer();
}
