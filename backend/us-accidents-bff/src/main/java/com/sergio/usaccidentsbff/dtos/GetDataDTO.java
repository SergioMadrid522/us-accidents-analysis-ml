package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class GetDataDTO {
    @JsonAlias("Severity")
    private int severity;
    @JsonAlias("State")
    private String state;
    @JsonProperty("Temperature(F)")
    private double temperature;
    @JsonProperty("Humidity(%)")
    private double humidity;
    @JsonProperty("Visibility(mi)")
    private double visibility;
    @JsonProperty("Wind_Speed(mph)")
    private double windSpeed;
    @JsonProperty("Precipitation(in)")
    private double precipitation;
    @JsonAlias("Weather_Condition")
    private String weatherCondition;
    @JsonAlias("Junction")
    private boolean junction;
    @JsonAlias("Traffic_Signal")
    private boolean trafficSignal;
    @JsonAlias("Hour")
    private double hour;
    @JsonAlias("Month")
    private int month;
    @JsonAlias("Weekday")
    private int weekday;
    @JsonAlias("Is_Day")
    private boolean isDay;

}