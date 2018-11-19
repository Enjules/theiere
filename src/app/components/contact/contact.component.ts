import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationService } from 'src/app/services/application.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  apiUrl = 'https://api.lessoeurstheiere.com';
  submited= false;
  contactForm: FormGroup;
  sendingOk: boolean;
  message: string;
  colorMessage: string;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.contactForm.controls;
  }

  createForm(): any {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  contact() {
    this.submited = true;
    this.httpClient.put(`${this.apiUrl}/contact`,this.contactForm.value).subscribe(
      res => {
        console.log(res);
        if(res['status'] === 200) {
          this.message = res['message'];
          this.colorMessage = "green";
        } else {
          this.message = res['message'];
          this.colorMessage = "red";
        }
      },
      err => {
        if(err.status === 503) {
          this.message = err;
          this.colorMessage = "red";
        }
      }
    );
  }

}
