package com.sergio.usaccidentsbff.dtos;

import java.util.List;

public class ResponseDTO {

    private List<GetDataDTO> data;

    public ResponseDTO(){}

    public void setData(List<GetDataDTO> data){
        this.data = data;
    }
    
    public List<GetDataDTO> getData() {
        return data;
    }
}
