import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class PelayanService {

  public users: User[] = [
    new User(
      '00000013536',
      'Basilius Bias Astho Chrityono',
      'Sleman Yogyakarta'
    ),
    new User(
      '00000013433',
      'Steven',
      'Tangerang, Banten'
    ),
  ];

  constructor() { }

  getAllUsers(){
    return [...this.users];
  }

  getUserByNim(nim:string){
    return {...this.users.find(p => p.nim === nim)};
  }
}
