import { switchMap } from 'rxjs/operators';
import { Firestore , collection, collectionData} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';import { ICustomer } from '../../models/customer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor( private auth: AngularFireAuth, private db: AngularFirestore) {
  
  }

  getNote(id: string) {
    return this.db
      .collection('customers')
      .valueChanges();
      //.doc<ICustomer>(id)
      
   
  }

  addCustomer(customer: ICustomer) {
    customer.Id = this.db.createId();
    customer.CreatedOn = Date.now();

    return this.db
      .collection('customers')
      .doc(customer.Id)
      .set(customer);
  }

}
