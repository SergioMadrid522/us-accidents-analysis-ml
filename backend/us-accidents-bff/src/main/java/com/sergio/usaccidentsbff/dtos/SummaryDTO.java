package com.sergio.usaccidentsbff.dtos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.Data;

@Data
public class SummaryDTO {
    @JsonAlias("total_accidents")
    private int totalAccidents;

    @JsonAlias("average_severity")
    private double averageSeverity;

    @JsonAlias("most_common_weather")
    private String commonWeather;
    
    @JsonAlias("high_risk_zones")
    private List<String> highRiskZones;
}
