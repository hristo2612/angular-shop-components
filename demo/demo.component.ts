import { Component } from '@angular/core';

@Component({
  selector: 'mwl-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  placements: string[] = ['top', 'left', 'right', 'bottom'];
  popoverTitle: string = 'Are you sure?';
  popoverMessage: string = 'Are you really <b>sure</b> you want to do this?';
  confirmText: string = 'Yes <i class="glyphicon glyphicon-ok"></i>';
  cancelText: string = 'No <i class="glyphicon glyphicon-remove"></i>';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
}
