package com.ndgwww.HR.management.Service;

import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;
import com.ndgwww.HR.management.pojo.count;

import java.util.List;

public interface StationService {

    //查询所有员工信息
    List<Station> selectAllStation();
    
    Station selectByPrimaryKey(String stationid);

    Integer deleteByPrimaryKey(String stationid);

    Integer insertSelective(Station record);

    Integer updateByPrimaryKeySelective(Station record);
    
  //每个岗位有多少员工，
    List<count> stationCountEmployee();
    

}
