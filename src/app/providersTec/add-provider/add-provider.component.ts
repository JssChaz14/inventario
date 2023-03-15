import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProvidersInterface } from '../../models/providersinterface.interface';
import { ProviderTecService } from '../../services/almacen/provider-tec.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  contactForm!: FormGroup ;

  constructor( private fb: FormBuilder, private sProvider: ProviderTecService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company: [''],
      phone2: [''],
      address: [''],
      date: [new Date(), Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.contactForm.value);

    this.sProvider.addProvider(this.contactForm.value)

    this.contactForm.reset();


  }

}
