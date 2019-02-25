import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [
      ProductCardComponent
  ],
  providers: [
  ],
  entryComponents: [
      ProductCardComponent
  ],
  exports : [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot().ngModule,
    ProductCardComponent
  ]
})
export class SharedModule { }
