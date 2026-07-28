package com.sergio.usaccidentsbff.dtos;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
@Data

public class PredictionResponseDTO {
    @JsonProperty("prediction")
    private int highSeverity;
    @JsonProperty("risk_probabilities_percent")
    private Map<String, Double> riskProbabilities;
}
