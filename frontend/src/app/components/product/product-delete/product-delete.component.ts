import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private  productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      const idString = this.route.snapshot.paramMap.get('id') ?? '';
      const id = parseInt(idString, 10);

      this.productService.readById(id).subscribe(product => {
        this.product = product   
      })
  }

deleteProduct(): void {
   const id  = this.product.id || 0
   this.productService.delete(id).subscribe(() =>{
   this.productService.showMessage('Produto Excluído com sucesso!')
   this.router.navigate(["/products"])

  })

}

cancel(): void {
  this.router.navigate(["/products"])
}
}
