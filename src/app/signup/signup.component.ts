import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
public btnval="Submit";
public tempIndex=0;
public columnDefs;
public rowData;

	custArray:Array<Customer>=new Array();
	getData:any[];
	model=new Customer(0,'',0,'','');


  constructor() {
     this.columnDefs = [
        {headerName: 'ID', field: 'id' },
        {headerName: 'Name', field: 'name' },
        {headerName: 'Address', field: 'address'}
    ];

    this.rowData = [
        { id: 'Toyota',name : 'Celica', address: 35000 },
        { id: 'Ford', name: 'Mondeo', address: 32000 },
        { id: 'Porsche', name: 'Boxter', address: 72000 }
    ];


   }

   

  ngOnInit() {
  }
  submitted=false;
  onSubmit()
  {
  	this.submitted=true;
  }
   

    
    modules = AllCommunityModules;
  createCustomer()
  {
     if(this.btnval=="Submit")
    {
    console.log("Customer creation here-->");
    //Add customer in customer array using push event
   
    this.custArray.push(new Customer(this.model.id++,this.model.name,this.model.contact,this.model.address,this.model.country));
    
    console.log(JSON.stringify(this.custArray));
  }
  else
  { 
    let custTemp=new Customer(this.model.id,this.model.name,this.model.contact,this.model.address,this.model.country)
     this.custArray.splice(this.tempIndex,0,custTemp);
     this.btnval="Submit";  
  }

    
     }
  edit(cust,id,name,address,contact,country)
 {
   var index=this.custArray.indexOf(cust);
   this.model.id=id;
   this.model.name=name;
   this.model.address=address;
   this.model.contact=contact;
   this.model.country=country;
   this.tempIndex=index;
   this.btnval="Update";
   this.remove(cust);
 }
  remove(cust)
  {
    var index=this.custArray.indexOf(cust);
    console.log(index);
    this.custArray.splice(index,1);
  }


}
