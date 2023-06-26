import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDB } from '../../shared/inmemory-db/users';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {CustomerService} from '../../services/customers/customers.service'

@Injectable()
export class CrudService {
  items: any[];
  constructor(
    private http: HttpClient,
    private customerService : CustomerService
  ) {
    let userDB = new UserDB();
    this.items = userDB.users;
  }

  //******* Implement your APIs ********
  getItems(): Observable<any> {
    // this.customerService.getNote('bJELWp4NbNj9Ly3BrTGG').subscribe({
    //   next(data) { 
    //     console.log(data);
    //     return  of(data)
    //   },
    //   error(err) { console.log('Received an error: ' + err)}
    // });;
    
    return this.customerService.getNote('bJELWp4NbNj9Ly3BrTGG');
  }
  addItem(item): Observable<any> {
    item._id = Math.round(Math.random() * 10000000000).toString();
    this.items.unshift(item);
    return of(this.items.slice()).pipe(delay(1000));
  }
  updateItem(id, item) {
    this.items = this.items.map(i => {
      if(i._id === id) {
        return Object.assign({}, i, item);
      }
      return i;
    })
    return of(this.items.slice()).pipe(delay(1000));
  }
  removeItem(row) {
    let i = this.items.indexOf(row);
    this.items.splice(i, 1);
    return of(this.items.slice()).pipe(delay(1000));
  }
}
