import { Component, AfterViewInit } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';

/**
 * @internal
 */
@Component({
  selector: 'mwl-confirmation-popover-window',
  styles: [
    `
    .popover {
      display: block;
    }
    .bs-popover-top .arrow, .bs-popover-bottom .arrow {
      left: 50%;
    }
    .bs-popover-left .arrow, .bs-popover-right .arrow {
      top: 50%;
    }
    .btn {
      transition: none;
    }
    .confirm-btns {
      display: flex;
      justify-content: space-around;
    }
    .confirm-btn-container {
      flex-basis: 50%;
    }
    .confirm-btn-container:not(:first-child) {
      margin-left: 4px;
    }
    .confirm-btn-container:not(:last-child) {
      margin-right: 4px;
    }
    .confirm-btns-reversed {
      flex-direction: row-reverse;
    }
    .confirm-btns-reversed .confirm-btn-container:not(:first-child) {
      margin-right: 4px;
      margin-left: 0;
    }
    .confirm-btns-reversed .confirm-btn-container:not(:last-child) {
      margin-right: 0;
      margin-left: 4px;
    }
  `
  ],
  template: `
    <ng-template #defaultTemplate let-options="options">
      <div [ngClass]="[
        'popover',
        options.placement,
        'popover-' + options.placement,
        'bs-popover-' + options.placement,
        options.popoverClass
      ]">
        <div class="popover-arrow arrow"></div>
        <h3 class="popover-title popover-header" [innerHTML]="options.popoverTitle"></h3>
        <div class="popover-content popover-body">
          <p [innerHTML]="options.popoverMessage"></p>
          <div class="confirm-btns" [class.confirm-btns-reversed]="options.reverseButtonOrder">
            <div
              class="confirm-btn-container"
              *ngIf="!options.hideCancelButton">
              <button
                type="button"
                [mwlFocus]="options.focusButton === 'cancel'"
                [class]="'btn btn-block btn-' + options.cancelButtonType"
                (click)="options.onCancel({clickEvent: $event})"
                [innerHtml]="options.cancelText">
              </button>
            </div>
            <div
              class="confirm-btn-container"
              *ngIf="!options.hideConfirmButton">
              <button
                type="button"
                [mwlFocus]="options.focusButton === 'confirm'"
                [class]="'btn btn-block btn-' + options.confirmButtonType"
                (click)="options.onConfirm({clickEvent: $event})"
                [innerHtml]="options.confirmText">
              </button>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="options.customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{options: options}">
    </ng-template>
  `
})
export class ConfirmationPopoverWindowComponent implements AfterViewInit {
  constructor(public options: ConfirmationPopoverWindowOptions) {}

  ngAfterViewInit(): void {
    this.options.onAfterViewInit();
  }
}
