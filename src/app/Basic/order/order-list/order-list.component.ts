import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
 
  constructor(public api: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  userList: product[] = [];

  getAll() {
    this.api.getAll().subscribe((val: any) => {
      this.userList = val;
    });
  }

  delete(id: any) {
    this.api.deleteByID(id).subscribe((del: any) => {
      this.userList = del;
      alert('data deleted');

      this.getAll();
    });
  }

  userForm: FormGroup = new FormGroup({

    productID: new FormControl(''),
    proName: new FormControl(''),
    proDescriptive: new FormControl(''),
    proStock: new FormControl(''),
    proBarcode: new FormControl(''),
    costPrice: new FormControl(''),
    sellingPrice: new FormControl(''),
    status: new FormControl('')
    

  });

  // to edit
  editData: boolean = false;

  edit(ob: product) {
    // to set the value of the inputed data on the form
    this.editData = true;

    this.userForm = new FormGroup({


      proName: new FormControl(ob.proName),
      proDescriptive: new FormControl(ob.proDescriptive),
      proStock: new FormControl(ob.proStock),
      proBarcode: new FormControl(ob.proBarcode),
      costPrice: new FormControl(ob.costPrice),
      sellingPrice: new FormControl(ob.sellingPrice),
      status: new FormControl(ob.status)
  


    });
  }

 
}
