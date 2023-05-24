import { Component, OnInit } from '@angular/core';
import { User, getAuth } from 'firebase/auth';
import { getDatabase, orderByChild, equalTo, get, Database, ref, query, onValue } from 'firebase/database'
import { FirebaseConnectionService } from 'src/app/services/firebaseConnection/firebase-connection.service';
import { UserService } from 'src/app/services/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private database: Database
  private currentUser: User | undefined
  username: string = ""
  userData: any
  userId: any

  constructor(private firebaseConnectionService: FirebaseConnectionService,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
    ){
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
        this.username = this.userData[this.userId].username
      }else{
        console.log("User not found")
      }
    })
    .catch((error) => {
      console.error("Error retrieving user: ", error)
    })

    console.log(currentUserEmail)
  }


  async updateUsernameInDatabase(){
    try{
      this.userService.updateUsername(this.username, this.userId)
      await new Promise((resolve) => setTimeout(resolve, 2000))

    const toast = await this.toastController.create({
      message: 'Username saved successfully!',
      duration: 2000,
      position: 'bottom'
    });
    
    toast.present()
    }catch(error){
      console.error('Error saving username:', error);
    }
  }

  navLogin() {
      this.router.navigate(['/auth/login']);
  }


  ngOnInit() {
    this.getUserFromDatabase()
  }

  

}
