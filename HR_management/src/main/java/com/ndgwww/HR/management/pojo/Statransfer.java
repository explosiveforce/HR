package com.ndgwww.HR.management.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Statransfer {
    private Integer count;

    private String id;

    private Integer type;

    private String reason;

    private Date date;

    private String prestationname;

    private String stationid;

    private String remark;

    private Employee employee;

    private Station station;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getprestationname() {
        return prestationname;
    }

    public void setprestationname(String prestationname) {
        this.prestationname = prestationname == null ? null : prestationname.trim();
    }

    public String getstationid() {
        return stationid;
    }

    public void setstationid(String stationid) {
        this.stationid = stationid == null ? null : stationid.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}