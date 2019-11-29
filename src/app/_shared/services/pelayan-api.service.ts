import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mahasiswa } from '../models/mahasiswa';
import { Fasilitas, Fasilitasdetail } from '../models/fasilitas';

@Injectable({
  providedIn: 'root'
})
export class PelayanApiService {

  private apiDocumentation = 'https//documenter.getpostman.com/view/5658787/SW7W5pjd';
  private urlApi = 'https://umn-pti2019.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  getAllMahasiswa(): Observable<Fasilitas>{
    return this.http.get<Fasilitas>(`${this.urlApi}/api/fasilitas`);
  }

  getMahasiswaById(kode:string): Observable<Fasilitasdetail>{

    return this.http.get<Fasilitasdetail>(`${this.urlApi}/api/fasilitas/${kode}`);
  }
}
