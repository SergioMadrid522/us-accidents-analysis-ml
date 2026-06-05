package com.sergio.usaccidentsbff.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.sergio.usaccidentsbff.dtos.GetDataDTO;
import com.sergio.usaccidentsbff.dtos.ResponseDTO;

@Service
public class GetAccidentsData {
    @Value("${DATA.ENGINE.DATA.API.URL}")
    private String apiUrl;
    
    List<String> errors =  new ArrayList<>();

    @Autowired
    private RestTemplate restTemplate;

    public List<GetDataDTO> getAllData() {
        try {
        ResponseDTO response = restTemplate.getForObject(
            apiUrl, ResponseDTO.class
        );
        return response.getData();    
        } catch (Exception e) {
            throw new Error("Error While trying to get the accidents. Please try again later");
        }
        
    }
}
