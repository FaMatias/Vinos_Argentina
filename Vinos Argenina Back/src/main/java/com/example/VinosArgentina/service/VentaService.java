package com.example.VinosArgentina.service;

import com.example.VinosArgentina.model.DTO.VentaDTO;
import com.example.VinosArgentina.model.Venta;
import com.mercadopago.resources.preference.Preference;
import org.springframework.data.domain.Page;

import java.util.Date;
import java.util.List;

public interface VentaService {

    Preference createVenta(Long carritoId, String paymentType);
    void cancelVenta(Long id, String status);
    Page<Venta> getVenta (Date dateTo, Date dateFrom, String status, String paymentType, Integer size, Integer page);
    Venta getVentaById (Long id);

    Preference getPreferenceByVentaId (Long id);

}
