package com.sergio.usaccidentsbff.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sergio.usaccidentsbff.dtos.PredictDTO;
import com.sergio.usaccidentsbff.dtos.PredictionResponseDTO;

@Service
public class PredictAccidents {
    @Value("${DATA.ENGINE.PREDICT.API.URL}")
    private String apiURl;

    @Autowired
    private RestTemplate restTemplate;

   public PredictionResponseDTO getPrediction(PredictDTO data) {
    try {
    PredictionResponseDTO response = restTemplate.postForObject(
        apiURl, data, PredictionResponseDTO.class
    );
    return response;    
    } catch (Exception e) {
        throw new Error("Error While trying to make the prediction. Please try again later");
    }
   }
}
