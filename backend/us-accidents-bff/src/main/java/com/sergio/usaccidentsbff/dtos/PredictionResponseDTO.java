package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PredictionResponseDTO {
    private int status;
    private int prediction;
    @JsonProperty("risk_probabilities_percent")
    private RiskProbabilitiesPercentDTO riskProbabilitiesPercentDTO;
}
