/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';
/**
 * \@internal
 */
export class ConfirmationPopoverWindowComponent {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.options.onAfterViewInit();
    }
}
ConfirmationPopoverWindowComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/** @nocollapse */
ConfirmationPopoverWindowComponent.ctorParameters = () => [
    { type: ConfirmationPopoverWindowOptions }
];
function ConfirmationPopoverWindowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmationPopoverWindowComponent.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7QUE2RmxHLE1BQU07Ozs7SUFDSixZQUFtQixPQUF5QztRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFrQztLQUFJOzs7O0lBRWhFLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ2hDOzs7WUE3RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLE1BQU0sRUFBRTtvQkFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFDRDtpQkFDQTtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNENUO2FBQ0Y7Ozs7WUE1RlEsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LW9wdGlvbnMucHJvdmlkZXInO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93JyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5wb3BvdmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYnMtcG9wb3Zlci10b3AgLmFycm93LCAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG4gICAgLmJzLXBvcG92ZXItbGVmdCAuYXJyb3csIC5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRuLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bi1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zLXJldmVyc2VkIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRucy1yZXZlcnNlZCAuY29uZmlybS1idG4tY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bnMtcmV2ZXJzZWQgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LW9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cIltcbiAgICAgICAgJ3BvcG92ZXInLFxuICAgICAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgJ3BvcG92ZXItJyArIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICAnYnMtcG9wb3Zlci0nICsgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIG9wdGlvbnMucG9wb3ZlckNsYXNzXG4gICAgICBdXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93IGFycm93XCI+PC9kaXY+XG4gICAgICAgIDxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGUgcG9wb3Zlci1oZWFkZXJcIiBbaW5uZXJIVE1MXT1cIm9wdGlvbnMucG9wb3ZlclRpdGxlXCI+PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudCBwb3BvdmVyLWJvZHlcIj5cbiAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cIm9wdGlvbnMucG9wb3Zlck1lc3NhZ2VcIj48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYnRuc1wiIFtjbGFzcy5jb25maXJtLWJ0bnMtcmV2ZXJzZWRdPVwib3B0aW9ucy5yZXZlcnNlQnV0dG9uT3JkZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb25maXJtLWJ0bi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFvcHRpb25zLmhpZGVDYW5jZWxCdXR0b25cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIFttd2xGb2N1c109XCJvcHRpb25zLmZvY3VzQnV0dG9uID09PSAnY2FuY2VsJ1wiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIididG4gYnRuLWJsb2NrIGJ0bi0nICsgb3B0aW9ucy5jYW5jZWxCdXR0b25UeXBlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib3B0aW9ucy5vbkNhbmNlbCh7Y2xpY2tFdmVudDogJGV2ZW50fSlcIlxuICAgICAgICAgICAgICAgIFtpbm5lckh0bWxdPVwib3B0aW9ucy5jYW5jZWxUZXh0XCI+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY29uZmlybS1idG4tY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQ29uZmlybUJ1dHRvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW213bEZvY3VzXT1cIm9wdGlvbnMuZm9jdXNCdXR0b24gPT09ICdjb25maXJtJ1wiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIididG4gYnRuLWJsb2NrIGJ0bi0nICsgb3B0aW9ucy5jb25maXJtQnV0dG9uVHlwZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wdGlvbnMub25Db25maXJtKHtjbGlja0V2ZW50OiAkZXZlbnR9KVwiXG4gICAgICAgICAgICAgICAgW2lubmVySHRtbF09XCJvcHRpb25zLmNvbmZpcm1UZXh0XCI+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm9wdGlvbnMuY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7b3B0aW9uczogb3B0aW9uc31cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMub25BZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiJdfQ==