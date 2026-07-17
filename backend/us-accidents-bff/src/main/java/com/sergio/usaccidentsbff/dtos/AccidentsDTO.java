package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class AccidentsDTO {
    @JsonAlias("Severity")
    private Integer severity;
    @JsonAlias("City")
    private String city;
    @JsonAlias("State")
    private String stateCode;
    @JsonProperty("Temperature(F)")
    private Double temperature;
    @JsonProperty("Humidity(%)")
    private Double humidity;
    @JsonProperty("Visibility(mi)")
    private Double visibility;
    @JsonProperty("Wind_Speed(mph)")
    private Double windSpeed;
    @JsonProperty("Precipitation(in)")
    private Double precipitation;
    @JsonAlias("Weather_Condition")
    private String weatherCondition;
    @JsonAlias("Junction")
    private boolean junction;
    @JsonAlias("Traffic_Signal")
    private boolean trafficSignal;
    @JsonAlias("Hour")
    private Double hour;
    @JsonAlias("Month")
    private Integer month;
    @JsonAlias("Weekday")
    private Integer weekday;
    @JsonAlias("Is_Day")
    private boolean isDay;
}