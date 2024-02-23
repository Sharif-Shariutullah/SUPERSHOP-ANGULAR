import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss'],
})
export class OrderAddComponent implements OnInit {
  // library : inject

  constructor(public service: ProductService, private router: Router) {}

  // firstLoading Data

  ngOnInit(): void {
    this.getAllData();
  }

  userList: product[] = [];

  userForm: FormGroup = new FormGroup({
   
    proName: new FormControl(''),
    ProDescriptive: new FormControl(''),
    proStock: new FormControl(''),
    proBarcode: new FormControl(''),
    CostPrice: new FormControl(''),
    SellingPrice: new FormControl(''),
    status: new FormControl(''),
  });

  //  Method
  onSub() {
    console.log(this.userForm.value);

    this.service.addData(this.userForm.value).subscribe((res: any) => {
      console.log('product add successfully!');

      this.router.navigateByUrl('/order-list');
    });
  }

  getAllData() {
    this.service.getAll().subscribe((res: any) => {
      console.log('Get all called successfully!');

      this.userList = res;
    });
  }

  clear() {
    this.userForm = new FormGroup({
      inputEmail4: new FormControl(''),
      inputPassword4: new FormControl(),
      inputAddress: new FormControl(''),
      inputAddress2: new FormControl(''),
      inputCity: new FormControl(''),
      inputZip: new FormControl(''),
      gridCheck: new FormControl(''),
    });
    this.editData = false;
  }

  // to delete

  // full object

  delete(obj: product) {
    console.log('Delete call' + obj);

    this.userList = this.userList.filter((item) => item !== obj);
  }

  
  // to edit
  editData: boolean = false;

  edit(ob: product) {
    // to set the value of the inputed data on the form
    this.editData = true;

    this.userForm = new FormGroup({
      proName: new FormControl(ob.proName),
      ProDescriptive: new FormControl(ob.ProDescriptive),
      proStock: new FormControl(ob.proStock),
      proBarcode: new FormControl(ob.proBarcode),
      CostPrice: new FormControl(ob.CostPrice),
      SellingPrice: new FormControl(ob.SellingPrice),
      status: new FormControl(ob.status),
    });
  }
}
