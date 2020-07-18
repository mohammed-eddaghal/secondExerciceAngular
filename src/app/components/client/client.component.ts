import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  listClients:Client[];
  totalBalence:number=0;
  constructor(private clientService:ClientService) { }

  getTotal(){
    /**
     * la methode reduce dayra f7al une loop
     * total: hwa valeur comule
     * client: instence d element de d'un type d element d list dans note ex list hya listClient fiha des element 
     *         de type Client
     */
    return this.listClients.reduce((total,client)=>{
      return total+client.balence
    },0)
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      client=>{
        this.listClients=client;
        this.totalBalence=this.getTotal()
        console.log(this.totalBalence)
        console.log(client)
      }
    )
  }

}
