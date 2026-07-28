package com.sergio.usaccidentsbff.services;

import java.net.http.HttpHeaders;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sergio.usaccidentsbff.dtos.PayloadDTO;
import com.sergio.usaccidentsbff.dtos.PredictionResponseDTO;

@Service
public class PredictionService {
    @Value("${DATA.ENGINE.PREDICTION.API.URL}")
    private String apiURL;

    @Autowired
    private RestTemplate restTemplate;


    public PredictionResponseDTO MakePrediction(PayloadDTO data){
        try {
            ResponseEntity<PredictionResponseDTO> response = restTemplate.postForEntity(
                apiURL,
                data,
                PredictionResponseDTO.class
            );

            return response.getBody();
        } catch (Exception e) {
            e.printStackTrace();

            throw new RuntimeException(
                "Error while trying to connect to the data engine: "+ e.getMessage(), 
                e
            );
        }
    }
}
