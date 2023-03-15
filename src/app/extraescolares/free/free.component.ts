import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExtraService } from '../../services/extra.service';


@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private sExtra: ExtraService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ncontrol: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.sExtra.extraLiberacion(this.form.value)
      .then( () => {
        console.log('correcto');
        this.form.reset();
      })
      .catch( (err) => { console.log(err)})
  }

}
