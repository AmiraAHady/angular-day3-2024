import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-productsparent',
  standalone: true,
  imports: [FormsModule,ProductlistComponent],
  templateUrl: './productsparent.component.html',
  styleUrl: './productsparent.component.scss'
})
export class ProductsparentComponent {
  listFilterdValue:string="";
  cart:Iproduct[]=[]
  getCartItem(recivedProdcut:Iproduct){
    this.cart.push(recivedProdcut)
  }

}
