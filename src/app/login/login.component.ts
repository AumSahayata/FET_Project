import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imageurl:string = '../../assets/login_bg.png'

  mobValue:string = '';
  passValue:string = '';
  mobBool:boolean = false;
  passBool:boolean = false;

  checkInputValue(): boolean {
    if (this.mobValue.trim() === '') {
      return false
    }
    else{
      return true
    }
  }

  validateMobileNumber(): void {
    const mobileNumberRegex = /^[1-9]\d{9}$/; // Regular expression for a 10-digit mobile number starting with a non-zero digit
    this.mobBool = mobileNumberRegex.test(this.mobValue);    
    if(!this.mobBool){
      alert('Only 10 digit enter numbers')
    }
  }

  validatePassword(): void {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Regular expression for a password that contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long
    let passBool =  passwordRegex.test(this.passValue);
    if(!passBool){
      alert('Enter a password that contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long')
    }
  }
  
  changebg(url:string):void{

    if(!this.checkInputValue()){
      this.imageurl = url;
    }
    else if(this.checkInputValue()){
      this.imageurl = "../../assets/login_focus_pass_mobfilled.png"
    }
    else{
      this.imageurl = url
    }
    console.log(this.mobValue);    
  }

}
