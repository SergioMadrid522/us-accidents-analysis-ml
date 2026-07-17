package com.sergio.usaccidentsbff.dtos;

public class ResponseDTO {
    private SummaryDTO data;
    
    public ResponseDTO(){}

    public void setData(SummaryDTO data){
        this.data = data;
    }
    public SummaryDTO getData () {
        return data;
    }
}
