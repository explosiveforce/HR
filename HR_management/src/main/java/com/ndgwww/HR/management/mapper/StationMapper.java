package com.ndgwww.HR.management.mapper;

import com.ndgwww.HR.management.pojo.Employee;
import com.ndgwww.HR.management.pojo.Station;
import com.ndgwww.HR.management.pojo.count;

import java.util.List;

public interface StationMapper {
    int deleteByPrimaryKey(String stationid);

    int insert(Station record);

    int insertSelective(Station station);

    Station selectByPrimaryKey(String stationid);

    List<Station> selectAllStation();

    int updateByPrimaryKeySelective(Station station);

    int updateByPrimaryKey(Station station);
    
    List<count> stationCountEmployee();
    
  
}