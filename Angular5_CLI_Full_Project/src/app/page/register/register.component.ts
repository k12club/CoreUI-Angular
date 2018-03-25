import { Component, OnInit } from '@angular/core';
import { User } from 'app/page/model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:User = { email:'email',password:'password'}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private angularFireAuth:AngularFireAuth,
  ) { }

  ngOnInit() {
  }
  register(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      console.log(res);
      this.router.navigate(['']);
      
    });
  }


}
