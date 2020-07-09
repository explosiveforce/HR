package com.ndgwww.HR.management.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
/**
 * @NoArgsConstructor, @RequiredArgsConstructor, @AllArgsConstructor : 注解在类上, 为类提供无参,有指定必须参数, 全参构造函数
 */
public class Deptransfer {
    private Integer count;

    private String id;

    private Integer type;

    private String reason;

    private String remark;

    private Date date;

    private String predepartmentname;

    private String departmentid;

    private Employee employee;

    private Department department;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason == null ? null : reason.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getpredepartmentname() {
        return predepartmentname;
    }

    public void setpredepartmentname(String predepartmentname) {
        this.predepartmentname = predepartmentname == null ? null : predepartmentname.trim();
    }

    public String getdepartmentid() {
        return departmentid;
    }

    public void setdepartmentid(String departmentid) {
        this.departmentid = departmentid == null ? null : departmentid.trim();
    }
}