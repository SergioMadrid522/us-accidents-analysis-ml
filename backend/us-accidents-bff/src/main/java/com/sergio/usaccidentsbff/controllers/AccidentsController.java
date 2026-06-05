package com.sergio.usaccidentsbff.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sergio.usaccidentsbff.dtos.GetDataDTO;
import com.sergio.usaccidentsbff.dtos.PredictDTO;
import com.sergio.usaccidentsbff.dtos.PredictionResponseDTO;
import com.sergio.usaccidentsbff.services.GetAccidentsData;
import com.sergio.usaccidentsbff.services.PredictAccidents;

import java.util.List;

@RestController
@RequestMapping("/backend/api/v1/accident-data")
public class AccidentsController {
    @Autowired
    private GetAccidentsData getData;

    @Autowired
    private PredictAccidents predictAccidents;

    @GetMapping
    public List<GetDataDTO> getAllData() {
        return getData.getAllData();
    }

    @PostMapping
    public PredictionResponseDTO getPrediction(@RequestBody PredictDTO data) {
        return predictAccidents.getPrediction(data);
    }
}

