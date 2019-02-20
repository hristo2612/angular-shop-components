/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef, Injector, ComponentFactoryResolver, Renderer2, TemplateRef } from '@angular/core';
import { ConfirmationPopoverWindowComponent } from './confirmation-popover-window.component';
import { ConfirmationPopoverOptions } from './confirmation-popover-options.provider';
import { ConfirmationPopoverWindowOptions } from './confirmation-popover-window-options.provider';
import { Positioning } from 'positioning';
/**
 * \@internal
 * @record
 */
export function ConfirmCancelEvent() { }
function ConfirmCancelEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ConfirmCancelEvent.prototype.clickEvent;
}
/**
 * All properties can be set on the directive as attributes like so (use `ConfirmationPopoverModule.forRoot()` to configure them globally):
 * ```html
 * <button
 *  class="btn btn-default"
 *  mwlConfirmationPopover
 *  [popoverTitle]="popoverTitle"
 *  [popoverMessage]="popoverMessage"
 *  placement="left"
 *  (confirm)="confirmClicked = true"
 *  (cancel)="cancelClicked = true"
 *  [(isOpen)]="isOpen">
 *   Show confirm popover!
 * </button>
 * ```
 */
var ConfirmationPopoverDirective = /** @class */ (function () {
    /**
     * @internal
     */
    function ConfirmationPopoverDirective(viewContainerRef, elm, defaultOptions, cfr, position, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.elm = elm;
        this.defaultOptions = defaultOptions;
        this.cfr = cfr;
        this.position = position;
        this.renderer = renderer;
        /**
         * Whether to disable showing the popover. Default `false`.
         */
        this.isDisabled = false;
        /**
         * Will open or show the popover when changed.
         * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
         */
        this.isOpen = false;
        /**
         * Will emit when the popover is opened or closed
         */
        this.isOpenChange = new EventEmitter(true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new EventEmitter();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new EventEmitter();
        this.eventListeners = [];
    }
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnInit = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isOpenChange.emit(false);
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnChanges = /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["isOpen"]) {
            if (changes["isOpen"].currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnDestroy = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onConfirm = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.confirm.emit(event);
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onCancel = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancel.emit(event);
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.togglePopover = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ closeOnOutsideClick = typeof this.closeOnOutsideClick !== 'undefined' ?
            this.closeOnOutsideClick : this.defaultOptions.closeOnOutsideClick;
        if (this.popover &&
            !this.elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target) &&
            closeOnOutsideClick) {
            this.hidePopover();
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.showPopover = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.popover && !this.isDisabled) {
            // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
            // otherwise the document click event gets fired after the click event
            // that triggered the popover to open (no idea why this is so)
            setTimeout(function () {
                _this.eventListeners = [
                    _this.renderer.listen('document', 'click', function (event) {
                        return _this.onDocumentClick(event);
                    }),
                    _this.renderer.listen('document', 'touchend', function (event) {
                        return _this.onDocumentClick(event);
                    }),
                    _this.renderer.listen('window', 'resize', function () { return _this.positionPopover(); })
                ];
            });
            var /** @type {?} */ options_1 = new ConfirmationPopoverWindowOptions();
            Object.assign(options_1, this.defaultOptions, {
                onConfirm: function (event) {
                    _this.onConfirm(event);
                },
                onCancel: function (event) {
                    _this.onCancel(event);
                },
                onAfterViewInit: function () {
                    _this.positionPopover();
                }
            });
            var /** @type {?} */ optionalParams = [
                'confirmText',
                'cancelText',
                'placement',
                'confirmButtonType',
                'cancelButtonType',
                'focusButton',
                'hideConfirmButton',
                'hideCancelButton',
                'popoverClass',
                'appendToBody',
                'customTemplate',
                'reverseButtonOrder',
                'popoverTitle',
                'popoverMessage'
            ];
            optionalParams.forEach(function (param) {
                if (typeof _this[param] !== 'undefined') {
                    (/** @type {?} */ (options_1))[param] = _this[param];
                }
            });
            var /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
            var /** @type {?} */ childInjector = Injector.create([
                {
                    provide: ConfirmationPopoverWindowOptions,
                    useValue: options_1
                }
            ], this.viewContainerRef.parentInjector);
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (options_1.appendToBody) {
                document.body.appendChild(this.popover.location.nativeElement);
            }
            this.isOpenChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.positionPopover = /**
     * @return {?}
     */
    function () {
        if (this.popover) {
            var /** @type {?} */ popoverElement = this.popover.location.nativeElement.children[0];
            var /** @type {?} */ popoverPosition = this.position.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            this.renderer.setStyle(popoverElement, 'top', popoverPosition.top + "px");
            this.renderer.setStyle(popoverElement, 'left', popoverPosition.left + "px");
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.hidePopover = /**
     * @return {?}
     */
    function () {
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.isOpenChange.emit(false);
            this.eventListeners.forEach(function (fn) { return fn(); });
            this.eventListeners = [];
        }
    };
    ConfirmationPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlConfirmationPopover]'
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopoverDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ConfirmationPopoverOptions },
        { type: ComponentFactoryResolver },
        { type: Positioning },
        { type: Renderer2 }
    ]; };
    ConfirmationPopoverDirective.propDecorators = {
        popoverTitle: [{ type: Input }],
        popoverMessage: [{ type: Input }],
        confirmText: [{ type: Input }],
        cancelText: [{ type: Input }],
        placement: [{ type: Input }],
        confirmButtonType: [{ type: Input }],
        cancelButtonType: [{ type: Input }],
        focusButton: [{ type: Input }],
        hideConfirmButton: [{ type: Input }],
        hideCancelButton: [{ type: Input }],
        isDisabled: [{ type: Input }],
        isOpen: [{ type: Input }],
        customTemplate: [{ type: Input }],
        isOpenChange: [{ type: Output }],
        confirm: [{ type: Output }],
        cancel: [{ type: Output }],
        popoverClass: [{ type: Input }],
        appendToBody: [{ type: Input }],
        reverseButtonOrder: [{ type: Input }],
        closeOnOutsideClick: [{ type: Input }],
        togglePopover: [{ type: HostListener, args: ['click',] }]
    };
    return ConfirmationPopoverDirective;
}());
export { ConfirmationPopoverDirective };
function ConfirmationPopoverDirective_tsickle_Closure_declarations() {
    /**
     * The title of the popover
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.popoverTitle;
    /**
     * The body text of the popover.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.popoverMessage;
    /**
     * The text of the confirm button. Default `Confirm`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.confirmText;
    /**
     * The text of the cancel button. Default `Cancel`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.cancelText;
    /**
     * The placement of the popover. It can be either `top`, `right`, `bottom` or `left`. Default `top`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.placement;
    /**
     * The bootstrap button type of the confirm button. It can be any supported bootstrap color type
     * e.g. `default`, `warning`, `danger` etc. Default `success`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.confirmButtonType;
    /**
     * The bootstrap button type of the cancel button. It can be any supported bootstrap color type
     * e.g. `default`, `warning`, `danger` etc. Default `default`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.cancelButtonType;
    /**
     * Set to either `confirm` or `cancel` to focus the confirm or cancel button.
     * If omitted, by default it will not focus either button.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.focusButton;
    /**
     * Whether to hide the confirm button. Default `false`.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.hideConfirmButton;
    /**
     * Whether to hide the cancel button. Default `false`.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.hideCancelButton;
    /**
     * Whether to disable showing the popover. Default `false`.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.isDisabled;
    /**
     * Will open or show the popover when changed.
     * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.isOpen;
    /**
     * A reference to a <ng-template> tag that if set will override the popovers template. Use like so:
     * ```html
     * <ng-template #customTemplate let-options="options">
     *   <div [class]="'popover ' + options.placement" style="display: block">
     *     My custom template
     *   </div>
     * </ng-template>
     * ```
     *
     * Then pass customTemplate to the mwlConfirmationPopover directive like so `[customTemplate]="customTemplate"`
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.customTemplate;
    /**
     * Will emit when the popover is opened or closed
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.isOpenChange;
    /**
     * An expression that is called when the confirm button is clicked.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.confirm;
    /**
     * An expression that is called when the cancel button is clicked.
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.cancel;
    /**
     * A custom CSS class to be added to the popover
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.popoverClass;
    /**
     * Append the element to the document body rather than the trigger element
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.appendToBody;
    /**
     * Swap the order of the confirm and cancel buttons
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.reverseButtonOrder;
    /**
     * Determines whether or not the popover should stay open even when clicking outside of it
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.closeOnOutsideClick;
    /**
     * \@internal
     * @type {?}
     */
    ConfirmationPopoverDirective.prototype.popover;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.eventListeners;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.viewContainerRef;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.elm;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.defaultOptions;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.cfr;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.position;
    /** @type {?} */
    ConfirmationPopoverDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUdoQixVQUFVLEVBR1YsUUFBUSxFQUNSLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsV0FBVyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNKeEM7O09BRUc7SUFDSCxzQ0FDVSxrQkFDQSxLQUNBLGdCQUNBLEtBQ0EsVUFDQTtRQUxBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsUUFBRyxHQUFILEdBQUc7UUFDSCxtQkFBYyxHQUFkLGNBQWM7UUFDZCxRQUFHLEdBQUgsR0FBRztRQUNILGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7Ozs7MEJBekVhLEtBQUs7Ozs7O3NCQU1ULEtBQUs7Ozs7NEJBbUJnQixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUM7Ozs7dUJBS2hCLElBQUksWUFBWSxFQUFFOzs7O3NCQUtuQixJQUFJLFlBQVksRUFBRTs4QkEyQjNCLEVBQUU7S0FZMUM7SUFFSjs7T0FFRzs7Ozs7SUFDSCwrQ0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJ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QUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQzFCOzs7Z0JBbFRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2lCQUNyQzs7OztnQkEzQ0MsZ0JBQWdCO2dCQUdoQixVQUFVO2dCQVdILDBCQUEwQjtnQkFQakMsd0JBQXdCO2dCQVNqQixXQUFXO2dCQVJsQixTQUFTOzs7K0JBeUNSLEtBQUs7aUNBS0wsS0FBSzs4QkFLTCxLQUFLOzZCQUtMLEtBQUs7NEJBS0wsS0FBSztvQ0FNTCxLQUFLO21DQU1MLEtBQUs7OEJBTUwsS0FBSztvQ0FLTCxLQUFLO21DQUtMLEtBQUs7NkJBS0wsS0FBSzt5QkFNTCxLQUFLO2lDQWNMLEtBQUs7K0JBS0wsTUFBTTswQkFLTixNQUFNO3lCQUtOLE1BQU07K0JBS04sS0FBSzsrQkFLTCxLQUFLO3FDQUtMLEtBQUs7c0NBS0wsS0FBSztnQ0FtRUwsWUFBWSxTQUFDLE9BQU87O3VDQXRPdkI7O1NBa0RhLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nIH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1DYW5jZWxFdmVudCB7XG4gIGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQ7XG59XG5cbi8qKlxuICogQWxsIHByb3BlcnRpZXMgY2FuIGJlIHNldCBvbiB0aGUgZGlyZWN0aXZlIGFzIGF0dHJpYnV0ZXMgbGlrZSBzbyAodXNlIGBDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlLmZvclJvb3QoKWAgdG8gY29uZmlndXJlIHRoZW0gZ2xvYmFsbHkpOlxuICogYGBgaHRtbFxuICogPGJ1dHRvblxuICogIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAqICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXG4gKiAgW3BvcG92ZXJUaXRsZV09XCJwb3BvdmVyVGl0bGVcIlxuICogIFtwb3BvdmVyTWVzc2FnZV09XCJwb3BvdmVyTWVzc2FnZVwiXG4gKiAgcGxhY2VtZW50PVwibGVmdFwiXG4gKiAgKGNvbmZpcm0pPVwiY29uZmlybUNsaWNrZWQgPSB0cnVlXCJcbiAqICAoY2FuY2VsKT1cImNhbmNlbENsaWNrZWQgPSB0cnVlXCJcbiAqICBbKGlzT3BlbildPVwiaXNPcGVuXCI+XG4gKiAgIFNob3cgY29uZmlybSBwb3BvdmVyIVxuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENvbmZpcm1hdGlvblBvcG92ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9keSB0ZXh0IG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcG9wb3Zlck1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLiBEZWZhdWx0IGBDb25maXJtYFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlybVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHQgYENhbmNlbGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wb3Zlci4gSXQgY2FuIGJlIGVpdGhlciBgdG9wYCwgYHJpZ2h0YCwgYGJvdHRvbWAgb3IgYGxlZnRgLiBEZWZhdWx0IGB0b3BgXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBidXR0b24gdHlwZSBvZiB0aGUgY29uZmlybSBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgc3VjY2Vzc2BcbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25UeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib290c3RyYXAgYnV0dG9uIHR5cGUgb2YgdGhlIGNhbmNlbCBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgZGVmYXVsdGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvblR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIGVpdGhlciBgY29uZmlybWAgb3IgYGNhbmNlbGAgdG8gZm9jdXMgdGhlIGNvbmZpcm0gb3IgY2FuY2VsIGJ1dHRvbi5cbiAgICogSWYgb21pdHRlZCwgYnkgZGVmYXVsdCBpdCB3aWxsIG5vdCBmb2N1cyBlaXRoZXIgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgZm9jdXNCdXR0b246IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjb25maXJtIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNvbmZpcm1CdXR0b246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNhbmNlbEJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIHNob3dpbmcgdGhlIHBvcG92ZXIuIERlZmF1bHQgYGZhbHNlYC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2lsbCBvcGVuIG9yIHNob3cgdGhlIHBvcG92ZXIgd2hlbiBjaGFuZ2VkLlxuICAgKiBDYW4gYmUgc3VnYXJlZCB3aXRoIGBpc09wZW5DaGFuZ2VgIHRvIGVtdWxhdGUgMi13YXkgYmluZGluZyBsaWtlIHNvIGBbKGlzT3BlbildPVwiaXNPcGVuXCJgXG4gICAqL1xuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gYSA8bmctdGVtcGxhdGU+IHRhZyB0aGF0IGlmIHNldCB3aWxsIG92ZXJyaWRlIHRoZSBwb3BvdmVycyB0ZW1wbGF0ZS4gVXNlIGxpa2Ugc286XG4gICAqIGBgYGh0bWxcbiAgICogPG5nLXRlbXBsYXRlICNjdXN0b21UZW1wbGF0ZSBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICogICA8ZGl2IFtjbGFzc109XCIncG9wb3ZlciAnICsgb3B0aW9ucy5wbGFjZW1lbnRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XG4gICAqICAgICBNeSBjdXN0b20gdGVtcGxhdGVcbiAgICogICA8L2Rpdj5cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICogYGBgXG4gICAqXG4gICAqIFRoZW4gcGFzcyBjdXN0b21UZW1wbGF0ZSB0byB0aGUgbXdsQ29uZmlybWF0aW9uUG9wb3ZlciBkaXJlY3RpdmUgbGlrZSBzbyBgW2N1c3RvbVRlbXBsYXRlXT1cImN1c3RvbVRlbXBsYXRlXCJgXG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2lsbCBlbWl0IHdoZW4gdGhlIHBvcG92ZXIgaXMgb3BlbmVkIG9yIGNsb3NlZFxuICAgKi9cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbmZpcm06IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBDU1MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHkgcmF0aGVyIHRoYW4gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBvcmRlciBvZiB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICovXG4gIEBJbnB1dCgpIHJldmVyc2VCdXR0b25PcmRlcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBzaG91bGQgc3RheSBvcGVuIGV2ZW4gd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gICAqL1xuICBASW5wdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHBvcG92ZXI6IENvbXBvbmVudFJlZjxDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50PjtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uaW5nLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICBpZiAoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2hvd1BvcG92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNvbmZpcm0oZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkge1xuICAgIHRoaXMuY29uZmlybS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNhbmNlbChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnNob3dQb3BvdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHlwZW9mIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcgPyBcbiAgICAgIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljayA6IHRoaXMuZGVmYXVsdE9wdGlvbnMuY2xvc2VPbk91dHNpZGVDbGljaztcbiAgICBpZiAoXG4gICAgICB0aGlzLnBvcG92ZXIgJiZcbiAgICAgICF0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICF0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrXG4gICAgKSB7XG4gICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93UG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3ZlciAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyB3b3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXIvaXNzdWVzLzY1XG4gICAgICAvLyBvdGhlcndpc2UgdGhlIGRvY3VtZW50IGNsaWNrIGV2ZW50IGdldHMgZmlyZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAvLyB0aGF0IHRyaWdnZXJlZCB0aGUgcG9wb3ZlciB0byBvcGVuIChubyBpZGVhIHdoeSB0aGlzIGlzIHNvKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpKVxuICAgICAgICBdO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMoKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdGhpcy5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgICBvbkNvbmZpcm06IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNvbmZpcm0oZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbDogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2FuY2VsKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BZnRlclZpZXdJbml0OiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblBvcG92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBBcnJheTxrZXlvZiBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ2NvbmZpcm1UZXh0JyxcbiAgICAgICAgJ2NhbmNlbFRleHQnLFxuICAgICAgICAncGxhY2VtZW50JyxcbiAgICAgICAgJ2NvbmZpcm1CdXR0b25UeXBlJyxcbiAgICAgICAgJ2NhbmNlbEJ1dHRvblR5cGUnLFxuICAgICAgICAnZm9jdXNCdXR0b24nLFxuICAgICAgICAnaGlkZUNvbmZpcm1CdXR0b24nLFxuICAgICAgICAnaGlkZUNhbmNlbEJ1dHRvbicsXG4gICAgICAgICdwb3BvdmVyQ2xhc3MnLFxuICAgICAgICAnYXBwZW5kVG9Cb2R5JyxcbiAgICAgICAgJ2N1c3RvbVRlbXBsYXRlJyxcbiAgICAgICAgJ3JldmVyc2VCdXR0b25PcmRlcicsXG4gICAgICAgICdwb3BvdmVyVGl0bGUnLFxuICAgICAgICAncG9wb3Zlck1lc3NhZ2UnXG4gICAgICBdO1xuICAgICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgKG9wdGlvbnMgYXMgYW55KVtwYXJhbV0gPSB0aGlzW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8XG4gICAgICAgIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnRcbiAgICAgID4gPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucGFyZW50SW5qZWN0b3JcbiAgICAgICk7XG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBjb21wb25lbnRGYWN0b3J5LFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYubGVuZ3RoLFxuICAgICAgICBjaGlsZEluamVjdG9yXG4gICAgICApO1xuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBvc2l0aW9uUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICBjb25zdCBwb3BvdmVyRWxlbWVudCA9IHRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgY29uc3QgcG9wb3ZlclBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5wb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgICBwb3BvdmVyRWxlbWVudCxcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5IHx8IHRoaXMuZGVmYXVsdE9wdGlvbnMuYXBwZW5kVG9Cb2R5XG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ3RvcCcsIGAke3BvcG92ZXJQb3NpdGlvbi50b3B9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHBvcG92ZXJFbGVtZW50LFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgIGAke3BvcG92ZXJQb3NpdGlvbi5sZWZ0fXB4YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMucG9wb3Zlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5wb3BvdmVyO1xuICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuICB9XG59XG4iXX0=