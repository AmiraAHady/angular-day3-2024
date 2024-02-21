import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TexthighlightDirective } from '../../directives/texthighlight.directive';
import { Iproduct } from '../../models/iproduct';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [FormsModule, TexthighlightDirective, DiscountPipe, CommonModule,RouterModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent implements OnInit {
  products: Iproduct[] = [];
  productListFilter: Iproduct[] = [];

  showImgs: boolean = true;

  name: string = 'hossam';
  birthDay = new Date();
  val: boolean = false;
  myhighlightedColor = '';
  borderval = '';
 

  constructor(private prodServi:ProductsService) {}

  ngOnInit(): void {
    // console.log('Inside ngOnInit');
   this.products=this.prodServi.getAllProduct()
   this.prodServi.getAllProductbyMyApi().subscribe({
     next:(data)=>{
       console.log(data);
       
     }
   })
    this.productListFilter = this.products;
  }

  // ngOnChanges(): void {
  //   console.log('Inside ngOnChanges');
  // }

  @Input() set listFilterdValue(value: string) {
    // console.log(value);
    // console.log(this.productsFilter(value));
    this.productListFilter = this.productsFilter(value);
  }

  /////// child custom event
  @Output() addchildEvent: EventEmitter<Iproduct> =
    new EventEmitter<Iproduct>();

  toggleImgs() {
    this.showImgs = !this.showImgs;
  }

  productsFilter(value: string) {
    return this.products.filter((product: Iproduct) =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  addToCart(prod: Iproduct) {
    // event emit
    this.addchildEvent.emit(prod);
  }

  // ngOnDestroy(): void {
  //     console.log('cleaning up');

  // }
}
