package com.ndgwww.HR.management.Controller.test;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hellow {
    @RequestMapping("/hello")
    public String hellow() {
        return "Hello world!热部署";
    }
}
