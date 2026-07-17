package com.sergio.usaccidentsbff.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sergio.usaccidentsbff.dtos.SummaryDTO;
import com.sergio.usaccidentsbff.services.SummaryData;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/backend/api/v1/accident-data")
public class AccidentsController {
    @Autowired
    private SummaryData data;

    @GetMapping("/state/{stateCode}")
    public SummaryDTO GetSateSummary(@PathVariable String stateCode) {
        return data.Response(stateCode);
    }

    /* @PostMapping
    public PredictionResponseDTO getPrediction(@RequestBody PredictDTO data) {
        return predictAccidents.getPrediction(data);
    } */
}

