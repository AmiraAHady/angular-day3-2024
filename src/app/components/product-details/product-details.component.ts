import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
   singleProduct!: Iproduct;

  constructor(private prodService: ProductsService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    let prodId=Number(this.route.snapshot.paramMap.get('id'))
    this.singleProduct = this.prodService.getProductById(prodId)!;
    console.log(this.singleProduct);
    
  }
}
