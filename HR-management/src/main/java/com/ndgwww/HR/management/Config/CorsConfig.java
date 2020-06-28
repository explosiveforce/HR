package com.ndgwww.HR.management.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    /*
    实现了WebMvcConfigurer 接口，WebMvcConfigurer 这个接口十分强大，
    里面还有很多可用的方法，在SpringBoot2.0里面可以解决WebMvcConfigurerAdapter曾经的部分任务。
    其中一个方法就是addCorsMappings()，是专门为开发人员解决跨域而诞生的接口。
    其中构造参数为CorsRegistry。
     */
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .maxAge(3600);
    }
}