import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from '../src';
import { DemoComponent } from './demo.component';
import { SharedModule } from '../src/shared/shared.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm'
    })
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
