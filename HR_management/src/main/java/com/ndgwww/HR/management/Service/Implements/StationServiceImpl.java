package com.ndgwww.HR.management.Service.Implements;
import com.ndgwww.HR.management.Service.StationService;
import com.ndgwww.HR.management.mapper.StationMapper;
import com.ndgwww.HR.management.pojo.Station;
import com.ndgwww.HR.management.pojo.count;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service
public class StationServiceImpl implements StationService {

    @Resource
    private StationMapper stationMapper;

    @Override
    public List<Station> selectAllStation() {
        return stationMapper.selectAllStation();
    }
    
    //id查岗位数据
    @Override
    public Station selectByPrimaryKey(String stationid){
        return  stationMapper.selectByPrimaryKey(stationid);
    }

    @Override
    public Integer deleteByPrimaryKey(String stationid){
        return  stationMapper.deleteByPrimaryKey(stationid);
    }

    @Override
    public Integer insertSelective(Station station){
        return  stationMapper.insertSelective(station);
    }

    @Override
    public Integer updateByPrimaryKeySelective(Station station){
        return  stationMapper.updateByPrimaryKeySelective(station);
    }
    
  //每个岗位有多少员工，
    @Override
    public List<count> stationCountEmployee(){
    	
    	return  stationMapper.stationCountEmployee();
    }
    
    
}
