import { Component, OnInit } from '@angular/core';
import{ OfferService} from '../offer/offer.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  item = [];
  cart = [];
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(private offerSer:OfferService,private router:Router) { }

  ngOnInit() {

    this.item =this.offerSer.getProducts();
    this.cart = this.offerSer.getCart();
  }
  addToCart(product) {
    this.offerSer.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

}
