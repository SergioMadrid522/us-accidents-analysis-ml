package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class RiskProbabilitiesPercentDTO {
    @JsonProperty("Severity_1")
    private double severity1;
    @JsonProperty("Severity_2")
    private double severity2;
    @JsonProperty("Severity_3")
    private double severity3;
    @JsonProperty("Severity_4")
    private double severity4;

}
