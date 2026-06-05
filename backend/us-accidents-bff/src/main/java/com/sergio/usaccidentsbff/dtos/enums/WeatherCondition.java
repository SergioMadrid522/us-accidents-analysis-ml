package com.sergio.usaccidentsbff.dtos.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum WeatherCondition {

    FAIR("Fair"),
    MOSTLY_CLOUDY("Mostly Cloudy"),
    CLOUDY("Cloudy"),
    CLEAR("Clear"),
    PARTLY_CLOUDY("Partly Cloudy"),
    OVERCAST("Overcast"),
    LIGHT_RAIN("Light Rain"),
    SCATTERED_CLOUDS("Scattered Clouds"),
    LIGHT_SNOW("Light Snow"),
    FOG("Fog"),
    RAIN("Rain"),
    HAZE("Haze"),
    FAIR_WINDY("Fair / Windy"),
    HEAVY_RAIN("Heavy Rain"),
    LIGHT_DRIZZLE("Light Drizzle"),
    THUNDER_IN_THE_VICINITY("Thunder in the Vicinity"),
    CLOUDY_WINDY("Cloudy / Windy"),
    T_STORM("T-Storm"),
    MOSTLY_CLOUDY_WINDY("Mostly Cloudy / Windy"),
    SNOW("Snow");

    private final String value;

    WeatherCondition(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}