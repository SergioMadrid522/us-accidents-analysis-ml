package com.sergio.usaccidentsbff.dtos;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.Data;

@Data
public class RiskProbabilities {
    @JsonAlias("Severity_1")
    double severity_1;
    @JsonAlias("Severity_2")
    double severity_2;
    @JsonAlias("Severity_3")
    double severity_3;
    @JsonAlias("Severity_4")
    double severity_4;
}
