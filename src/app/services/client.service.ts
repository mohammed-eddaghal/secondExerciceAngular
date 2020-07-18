import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection:AngularFirestoreCollection<Client>;
  clientDocument:AngularFirestoreDocument<Client>;

  constructor( private db:AngularFirestore ) {
      this.clientCollection = this.db.collection('clients');
   }

  getClients(): Observable<Client[]>{
    return this.clientCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
