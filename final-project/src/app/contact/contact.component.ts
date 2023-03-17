import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  
  contactForm = new FormGroup({
    // name: new FormControl('',[Validators.required, Validators.pattern("^[a-Z]{3,}")]),
    // email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    // message: new FormControl('',[Validators.required,Validators.pattern("[z-aA-Z0-9]{3,}")])
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('',[Validators.required, Validators.min(3)])
 
  });

  getName(){
   return this.contactForm.get('name')
  }
  getEmail(){
    return this.contactForm.get('email')
  }
  getMessage(){
    return this.contactForm.get('message')
  }
  onSubmit(){
    alert("Thank you for your feedback "+ this.getName()?.value+"!")
    this.contactForm.reset();
  }
}
