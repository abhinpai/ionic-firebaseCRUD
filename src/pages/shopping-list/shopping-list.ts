
import { ActionSheet } from 'ionic-angular/components/action-sheet/action-sheet';
import { Component } from '@angular/core';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { AlertController, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


//@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl:AlertController, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {  
    this.itemsRef = this.database.list('shopping-item');
  //  this.itemsRef.valueChanges().subscribe(data => console.log(data));
    this.items = this.itemsRef.valueChanges();
    }

  ionViewDidLoad() {
   
  }

  navigate(){
    this.navCtrl.push(AddShoppingPage);
  }

  selectShoppingItem(key: string){
    
    this.actionSheetCtrl.create({
      title: `${key}`,
      buttons: [
        {
          text: 'Edit',
          handler: () =>{

          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () =>{
            this.itemsRef.remove(key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
              console.log("User has clicked cancel button");
          }
        }
      ]
    }).present();

  }

}
