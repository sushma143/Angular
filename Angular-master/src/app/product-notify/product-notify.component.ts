import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent implements OnInit {
@Input("parentData")
  product: Product;
  @Output()
  notify= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendNotification(){//can pass any obj to emit method
    this.notify.emit("You will be notified if Product become Prime!!!!");
  }
}
