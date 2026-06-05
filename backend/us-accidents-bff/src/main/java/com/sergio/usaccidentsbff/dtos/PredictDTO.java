package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sergio.usaccidentsbff.dtos.enums.WeatherCondition;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class PredictDTO {
    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Temperature(F)")
    private double temperature;

    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Humidity(%)")
    private double humidity;

    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Visibility(mi)")
    private double visibility;

    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Wind_Speed(mph)")
    private double windSpeed;

    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Precipitation(in)")
    private double precipitation;

    @NotEmpty
    @PositiveOrZero
    @JsonAlias("Hour")
    private double hour;

    @NotEmpty
    @Positive
    @Max(12)
    @JsonAlias("Month")
    private int month;
    
    @NotEmpty
    @Positive
    @Max(7)
    @JsonAlias("Weekday")
    private int weekday;

    @NotEmpty
    @Positive
    @JsonProperty("Is_Day")
    private int isDay;

    @NotEmpty
    @JsonProperty("Weather_Condition")
    private WeatherCondition weatherCondition;

    @NotEmpty
    @PositiveOrZero
    @JsonProperty("Traffic_Signal")
    private int trafficSignal;

    @NotEmpty
    @PositiveOrZero
    @JsonAlias("Junction")
    private int junction;

}