import { Component, OnInit } from '@angular/core';
import { User } from 'app/page/model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = { email:'email',password:'password'}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private angularFireAuth:AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  signin(user:User){
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      this.router.navigate(['']);
      
    });
  }

  gotoregister(){
    this.router.navigate(['register'])

    
  
  }

}
