package com.ndgwww.HR.management.mapper;

import com.ndgwww.HR.management.pojo.Deptransfer;
import com.ndgwww.HR.management.pojo.Employee;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;
@Mapper
public interface DeptransferMapper {
    int insert(Deptransfer record);

    //查询所有员工 包括没有调动的 分页
    List<Deptransfer> selectAllEmp ();
    //查询所有已调动的员工 分页
    List<Deptransfer> selectAllDeptransfer ();

    int insertSelective(Deptransfer record);
    //用empid查询单个员工最新信息
    Deptransfer selectByPrimaryKey(String empid);
    //用empid查询单个员工详细调转信息
    List<Deptransfer> selectByAll(String empid);
    //动态更新员工数据
    int insertdepartment(Deptransfer record);
}