import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Mahasiswa } from '../_shared/models/mahasiswa';
import { PelayanService } from '../_shared/services/pelayan.service';
import { User } from '../_shared/models/user';
import { Fasilitasdetail, Fasilitas } from '../_shared/models/fasilitas';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user: Fasilitasdetail = null;

  constructor(
    private pelayananApi: PelayanApiService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    const kode = this.activatedRoute.snapshot.params.get('kode');

    this.pelayananApi.getMahasiswaById(kode).subscribe(params => {
    console.log(params)
    });
  }

}
