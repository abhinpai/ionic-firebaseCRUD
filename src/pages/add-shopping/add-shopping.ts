import { ShoppingItem } from './../../models/shopping-item/shopping-item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireDatabase, AngularFireList  } from "angularfire2/database";


@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  items = {} as ShoppingItem
  itemsRef: AngularFireList <ShoppingItem>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.itemsRef = this.database.list('shopping-item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

  addItem(items: ShoppingItem){
    console.log(items);
    this.itemsRef.push({
      itemName : this.items.itemName,
      itemNumber : Number(this.items.itemNumber)
    }).then(data => console.log("Added rsult"+data));
    this.reset();
  }

  reset(){
    this.items = {} as ShoppingItem;
    this.navCtrl.pop();
  }


  
}
