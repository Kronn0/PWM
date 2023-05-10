import { Component, OnInit } from '@angular/core';
import { User, getAuth } from 'firebase/auth';
import { getDatabase, orderByChild, equalTo, get, Database, ref, query, onValue } from 'firebase/database'
import { FirebaseConnectionService } from 'src/app/services/firebaseConnection/firebase-connection.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private database: Database
  private currentUser: User | undefined
  userData: any
  userId: any

  constructor(private firebaseConnectionService: FirebaseConnectionService, private userService: UserService){
    this.database = this.firebaseConnectionService.getDatabase()
    this.currentUser = this.userService.getCurrentUser()
  }

  getUserFromDatabase(){
    const usersRef = ref(this.database, 'users/')
    const currentUserEmail = this.currentUser?.email;
    const queryUser = query(usersRef, orderByChild('email'), equalTo(currentUserEmail!));
    
    get(queryUser)
    .then((snapshot) => {
      if(snapshot.exists()){
        this.userData = snapshot.val()
        this.userId = Object.keys(this.userData)[0]
      }else{
        console.log("User not found")
      }
    })
    .catch((error) => {
      console.error("Error retrieving user: ", error)
    })

    console.log(currentUserEmail)
  }


  ngOnInit() {
    this.getUserFromDatabase()
  }

  

}
