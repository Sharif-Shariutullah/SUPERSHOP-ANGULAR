import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from 'src/app/Model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {


  id!: any;
  userData!: product;


  constructor(
    public service: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}









  ngOnInit(): void {
    this.id = this.route.snapshot.params['userId'];
    console.log(this.id);
    this.getDataById(this.id);
  }



  getDataById(id: any) {
    this.service.getByID(id).subscribe((v: any) => {
      this.userData = v;
      this.userForm.setValue(this.userData);
    });
  }








 userList: product[] = [];

  userForm: FormGroup = new FormGroup({


    productID: new FormControl(''),
    proName: new FormControl(''),
    proDescriptive: new FormControl(''),
    proStock: new FormControl(''),
    proBarcode: new FormControl(''),
    costPrice: new FormControl(''),
    sellingPrice: new FormControl(''),
    status: new FormControl(''),
  });



  //  Method
  onSub() {
    console.log(this.userForm.value);

    this.service.updateData(this.userForm.value).subscribe((res: any) => {
      console.log('updated successfully!');

      this.router.navigateByUrl('/order-list');
    });
  }

}
