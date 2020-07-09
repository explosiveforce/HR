package com.ndgwww.HR.management.mapper;

import com.ndgwww.HR.management.pojo.Statransfer;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface StatransferMapper {
    //查询所有员工 包括没有调动的 分页
    List<Statransfer> selectAllEmp();
    //查询所有已调动的员工 分页
    List<Statransfer> selectAllStatransfer();
    int insert(Statransfer record);

    int insertSelective(Statransfer record);
    //用empid查询单个员工最新信息
    Statransfer selectByPrimaryKey(String empid);
    //用empid查询单个员工详细调转信息
    List<Statransfer> selectByAll(String empid);
    //动态更新员工数据
    int insertdepartment(Statransfer record);
}