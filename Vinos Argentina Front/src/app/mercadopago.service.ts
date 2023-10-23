import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  private apiUrl = 'https://api.mercadopago.com/v1';

  constructor(private http: HttpClient) { }
}
