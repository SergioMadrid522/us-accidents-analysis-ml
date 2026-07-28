package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PayloadDTO {

    @JsonProperty("Weather_Condition")
    @JsonAlias("weather_condition")
    private String weather;

    @JsonProperty("Temperature(F)")
    @JsonAlias("temperature")
    private double temperature;

    @JsonProperty("Humidity(%)")
    @JsonAlias("humidity")
    private double humidity;

    @JsonProperty("Visibility(mi)")
    @JsonAlias("visibility")
    private double visibility;

    @JsonProperty("Wind_Speed(mph)")
    @JsonAlias("wind_speed")
    private double windSpeed;

    @JsonProperty("Precipitation(in)")
    @JsonAlias("precipitation")
    private double precipitation;

    @JsonProperty("Month")
    @JsonAlias("month")
    private int month;

    @JsonProperty("Traffic_Signal")
    @JsonAlias("traffic_signal")
    private int trafficSignal;

    @JsonProperty("Is_Day")
    @JsonAlias("is_day")
    private int isDay;

    @JsonProperty("Junction")
    @JsonAlias("junction")
    private int junction;
}
