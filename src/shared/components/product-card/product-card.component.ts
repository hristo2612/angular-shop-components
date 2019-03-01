import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mwl-product-card',
  template: `<div class="card">
  I am a nice card component please be good with me!
</div>
`,
  styles: [``]
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
