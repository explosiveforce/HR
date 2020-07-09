package com.ndgwww.HR.management.Service.Implements;

import com.ndgwww.HR.management.Service.StatransferService;
import com.ndgwww.HR.management.mapper.StatransferMapper;
import com.ndgwww.HR.management.pojo.Statransfer;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class StatransferServiceImpl implements StatransferService {
    @Resource
    public StatransferMapper statransfer;
    @Override
    public Statransfer selectByPrimaryKey(String empid) {
        return statransfer.selectByPrimaryKey(empid);
    }

    @Override
    public Integer insertdepartment(Statransfer record) {
        return statransfer.insertdepartment(record);
    }


    @Override
    public List<Statransfer> selectByAll(String empid) {
        return statransfer.selectByAll(empid);
    }

    @Override
    public List<Statransfer> selectAllEmp() {
        return statransfer.selectAllEmp();
    }

    @Override
    public List<Statransfer> selectAllStatransfer() {
        return statransfer.selectAllStatransfer();
    }
}
