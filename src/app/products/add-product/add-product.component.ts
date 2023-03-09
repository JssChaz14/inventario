import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './../../models/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      uid: ['', Validators.required],
      name: ['', Validators.required],
      quantity: [0, Validators.required],
      buy_price: [0, Validators.required],
      date: ['', Validators.required],
      provider_uid: ['', Validators.required],
      stock: [0, Validators.required],
      stock_min: [0, Validators.required],
      status: ['', Validators.required],
      category: ['', Validators.required],
      media: ['', Validators.required],
      last_update: ['', Validators.required],
    });
  }

  onSubmit() {
    const product: Product = this.productForm?.value;
    console.log(product)
  }

}
