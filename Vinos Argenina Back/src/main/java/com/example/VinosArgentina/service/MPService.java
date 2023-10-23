package com.example.VinosArgentina.service;

import com.example.VinosArgentina.model.Venta;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.preference.Preference;

public interface MPService {

    public Preference create(Venta venta) throws MPException, MPApiException;
}
