package com.sergio.usaccidentsbff.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sergio.usaccidentsbff.dtos.ResponseDTO;
import com.sergio.usaccidentsbff.dtos.SummaryDTO;

@Service
public class SummaryData {
    @Value("${DATA.ENGINE.DATA.API.URL}")
    private String dataEngineAPIURL;
    
    @Autowired
    private RestTemplate restTemplate;

    public SummaryDTO Response(String stateCode) {
        try {
            ResponseDTO data = restTemplate.getForObject(
                dataEngineAPIURL + "/" + stateCode, 
                ResponseDTO.class
            );
            return data.getData();

        } catch (Exception e) {
            e.printStackTrace();

            throw new RuntimeException(
                "Error while trying to connect to the data engine: " + e.getMessage(),
                e
            );
        }
    }
}
