package com.ndgwww.HR.management.mapper.mapper2;

import com.ndgwww.HR.management.Config.DepartConfig;
import com.ndgwww.HR.management.pojo.Department;
import com.ndgwww.HR.management.pojo.count;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.type.JdbcType;

import java.util.List;
@Mapper
public interface DepartmentMapper2 {
    @Results(id="DepartmentResult",value = {
            @Result(property = "id", column = "id",jdbcType= JdbcType.VARCHAR),
            @Result(property = "name", column = "name",jdbcType=JdbcType.VARCHAR),
            @Result(property = "type", column = "type",jdbcType=JdbcType.VARCHAR),
            @Result(property = "telephone", column = "telephone",jdbcType=JdbcType.VARCHAR),
            @Result(property = "fax", column = "fax"),
            @Result(property = "description", column = "description"),
            @Result(property = "predepartment", column = "predepartment"),
            @Result(property = "date", column = "date"),
    })
    @Select("select * from department where type=1")
    List<Department>selectdepartment();
    @Select("select id , name from department where type=1")
    List<Department> selectdepartmenttype();
    @Select("select * from department where id=1")
    Department selectiddepartment(@Param("id")String id);
    //删除部门
    @Update("UPDATE department SET type=0 where id = #{id}")
    @ResultMap(value="DepartmentResult")
    Integer Updateepartment(@Param("id") String id);

    //更新部门
    @UpdateProvider(type = DepartConfig.class, method = "update")
    @ResultMap(value="DepartmentResult")
    Integer updateAll(Department department);

    //新增部门
    @InsertProvider(type = DepartConfig.class, method = "insert")
    @ResultMap(value="DepartmentResult")
    Integer insertAll(Department department);

    @Select("select department.name,count(employee.id) as num from department left join employee "
    		+ "on department.id = employee.departmentId where department.`type`!=0  group by department.name")
   // @Select("select * from department")
    List<count> DepartmentcountEmployee();
}
