import { __extends } from 'tslib';
import { Injectable, Component, Directive, Input, Output, EventEmitter, HostListener, ViewContainerRef, ElementRef, Injector, ComponentFactoryResolver, Renderer2, NgModule, InjectionToken } from '@angular/core';
import { Positioning } from 'positioning';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfirmationPopoverOptions = /** @class */ (function () {
    function ConfirmationPopoverOptions() {
        this.confirmText = 'Confirm';
        this.cancelText = 'Cancel';
        this.confirmButtonType = 'success';
        this.cancelButtonType = 'default';
        this.placement = 'top';
        this.hideConfirmButton = false;
        this.hideCancelButton = false;
        this.popoverClass = '';
        this.appendToBody = false;
        this.reverseButtonOrder = false;
        this.closeOnOutsideClick = true;
    }
    return ConfirmationPopoverOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowOptions = /** @class */ (function (_super) {
    __extends(ConfirmationPopoverWindowOptions, _super);
    function ConfirmationPopoverWindowOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationPopoverWindowOptions.decorators = [
        { type: Injectable },
    ];
    return ConfirmationPopoverWindowOptions;
}(ConfirmationPopoverOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowComponent = /** @class */ (function () {
    function ConfirmationPopoverWindowComponent(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    ConfirmationPopoverWindowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.options.onAfterViewInit();
    };
    ConfirmationPopoverWindowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-confirmation-popover-window',
                    styles: [
                        "\n    .popover {\n      display: block;\n    }\n    .bs-popover-top .arrow, .bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    .bs-popover-left .arrow, .bs-popover-right .arrow {\n      top: 50%;\n    }\n    .btn {\n      transition: none;\n    }\n    .confirm-btns {\n      display: flex;\n      justify-content: space-around;\n    }\n    .confirm-btn-container {\n      flex-basis: 50%;\n    }\n    .confirm-btn-container:not(:first-child) {\n      margin-left: 4px;\n    }\n    .confirm-btn-container:not(:last-child) {\n      margin-right: 4px;\n    }\n    .confirm-btns-reversed {\n      flex-direction: row-reverse;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:first-child) {\n      margin-right: 4px;\n      margin-left: 0;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:last-child) {\n      margin-right: 0;\n      margin-left: 4px;\n    }\n  "
                    ],
                    template: "\n    <ng-template #defaultTemplate let-options=\"options\">\n      <div [ngClass]=\"[\n        'popover',\n        options.placement,\n        'popover-' + options.placement,\n        'bs-popover-' + options.placement,\n        options.popoverClass\n      ]\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title popover-header\" [innerHTML]=\"options.popoverTitle\"></h3>\n        <div class=\"popover-content popover-body\">\n          <p [innerHTML]=\"options.popoverMessage\"></p>\n          <div class=\"confirm-btns\" [class.confirm-btns-reversed]=\"options.reverseButtonOrder\">\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel({clickEvent: $event})\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm({clickEvent: $event})\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{options: options}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopoverWindowComponent.ctorParameters = function () { return [
        { type: ConfirmationPopoverWindowOptions }
    ]; };
    return ConfirmationPopoverWindowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
var FocusDirective = /** @class */ (function () {
    function FocusDirective(elm) {
        this.elm = elm;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FocusDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["mwlFocus"] && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    };
    FocusDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlFocus]'
                },] },
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FocusDirective.propDecorators = {
        mwlFocus: [{ type: Input }]
    };
    return FocusDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ USER_OPTIONS = new InjectionToken('confirmation popover user options');
/**
 * @param {?} userOptions
 * @return {?}
 */
function optionsFactory(userOptions) {
    var /** @type {?} */ options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
var ConfirmationPopoverModule = /** @class */ (function () {
    function ConfirmationPopoverModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ConfirmationPopoverModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: ConfirmationPopoverModule,
            providers: [
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: ConfirmationPopoverOptions,
                    useFactory: optionsFactory,
                    deps: [USER_OPTIONS]
                },
                Positioning
            ]
        };
    };
    ConfirmationPopoverModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ConfirmationPopoverDirective,
                        ConfirmationPopoverWindowComponent,
                        FocusDirective
                    ],
                    imports: [CommonModule],
                    exports: [ConfirmationPopoverDirective, FocusDirective],
                    entryComponents: [ConfirmationPopoverWindowComponent]
                },] },
    ];
    return ConfirmationPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ConfirmationPopoverModule, ConfirmationPopoverOptions as ɵd, ConfirmationPopoverWindowOptions as ɵf, ConfirmationPopoverWindowComponent as ɵe, ConfirmationPopoverDirective as ɵc, USER_OPTIONS as ɵa, optionsFactory as ɵb, FocusDirective as ɵg };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zaG9wLWNvbXBvbmVudHMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLXNob3AtY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXNob3AtY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2ZvY3VzLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvY29uZmlybWF0aW9uLXBvcG92ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVGhlIHBvcG92ZXIgdGl0bGVcbiAgICovXG4gIHBvcG92ZXJUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgbWVzc2FnZVxuICAgKi9cbiAgcG9wb3Zlck1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIGNvbmZpcm1hdGlvbiBidXR0b24gdGV4dFxuICAgKi9cbiAgY29uZmlybVRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIGNhbmNlbCBidXR0b24gdGV4dFxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgY29uZmlybSBidXR0b24gdHlwZSBlLmcuIGBzdWNjZXNzYCwgYGRhbmdlcmAgZXRjXG4gICAqL1xuICBjb25maXJtQnV0dG9uVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgY2FuY2VsIGJ1dHRvbiB0eXBlICBlLmcuIGBzdWNjZXNzYCwgYGRhbmdlcmAgZXRjXG4gICAqL1xuICBjYW5jZWxCdXR0b25UeXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBwbGFjZW1lbnQuIENhbiBiZSBgdG9wYCwgYGJvdHRvbWAsIGBsZWZ0YCwgYHJpZ2h0YFxuICAgKi9cbiAgcGxhY2VtZW50Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGljaCBidXR0b24gdG8gY2FuY2VsLiBDYW4gYmUgZWl0aGVyIGBjb25maXJtYCBvciBgY2FuY2VsYFxuICAgKi9cbiAgZm9jdXNCdXR0b24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY29uZmlybWF0aW9uIGJ1dHRvblxuICAgKi9cbiAgaGlkZUNvbmZpcm1CdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhbmNlbCBidXR0b25cbiAgICovXG4gIGhpZGVDYW5jZWxCdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBDU1MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIHBvcG92ZXJcbiAgICovXG4gIHBvcG92ZXJDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdGhlIHBvcG92ZXIgdG8gdGhlIGRvY3VtZW50IGJvZHlcbiAgICovXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN3YXAgdGhlIG9yZGVyIG9mIHRoZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgKi9cbiAgcmV2ZXJzZUJ1dHRvbk9yZGVyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgc2hvdWxkIHN0YXkgb3BlbiB3aGVuIGNsaWNraW5nIG91dHNpZGUgaXRcbiAgICovXG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNcbiAgaW1wbGVtZW50cyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZSB7XG4gIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuICBwb3BvdmVyTWVzc2FnZTogc3RyaW5nO1xuICBjb25maXJtVGV4dDogc3RyaW5nID0gJ0NvbmZpcm0nO1xuICBjYW5jZWxUZXh0OiBzdHJpbmcgPSAnQ2FuY2VsJztcbiAgY29uZmlybUJ1dHRvblR5cGU6IHN0cmluZyA9ICdzdWNjZXNzJztcbiAgY2FuY2VsQnV0dG9uVHlwZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xuICBwbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xuICBmb2N1c0J1dHRvbjogc3RyaW5nO1xuICBoaWRlQ29uZmlybUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBoaWRlQ2FuY2VsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIHBvcG92ZXJDbGFzczogc3RyaW5nID0gJyc7XG4gIGFwcGVuZFRvQm9keTogYm9vbGVhbiA9IGZhbHNlO1xuICByZXZlcnNlQnV0dG9uT3JkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2xvc2VPbk91dHNpZGVDbGljazogYm9vbGVhbiA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBDb25maXJtQ2FuY2VsRXZlbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMgZXh0ZW5kcyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyB7XG4gIHB1YmxpYyBvbkNvbmZpcm06IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSA9PiB2b2lkO1xuICBwdWJsaWMgb25DYW5jZWw6IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSA9PiB2b2lkO1xuICBwdWJsaWMgb25BZnRlclZpZXdJbml0OiAoKSA9PiB2b2lkO1xuICBwdWJsaWMgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3ctb3B0aW9ucy5wcm92aWRlcic7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLnBvcG92ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5icy1wb3BvdmVyLXRvcCAuYXJyb3csIC5icy1wb3BvdmVyLWJvdHRvbSAuYXJyb3cge1xuICAgICAgbGVmdDogNTAlO1xuICAgIH1cbiAgICAuYnMtcG9wb3Zlci1sZWZ0IC5hcnJvdywgLmJzLXBvcG92ZXItcmlnaHQgLmFycm93IHtcbiAgICAgIHRvcDogNTAlO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgICAuY29uZmlybS1idG4tY29udGFpbmVyIHtcbiAgICAgIGZsZXgtYmFzaXM6IDUwJTtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgICAuY29uZmlybS1idG4tY29udGFpbmVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bnMtcmV2ZXJzZWQge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zLXJldmVyc2VkIC5jb25maXJtLWJ0bi1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRucy1yZXZlcnNlZCAuY29uZmlybS1idG4tY29udGFpbmVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIGBcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICAgIDxkaXYgW25nQ2xhc3NdPVwiW1xuICAgICAgICAncG9wb3ZlcicsXG4gICAgICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICAncG9wb3Zlci0nICsgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgICdicy1wb3BvdmVyLScgKyBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgb3B0aW9ucy5wb3BvdmVyQ2xhc3NcbiAgICAgIF1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItYXJyb3cgYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZSBwb3BvdmVyLWhlYWRlclwiIFtpbm5lckhUTUxdPVwib3B0aW9ucy5wb3BvdmVyVGl0bGVcIj48L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50IHBvcG92ZXItYm9keVwiPlxuICAgICAgICAgIDxwIFtpbm5lckhUTUxdPVwib3B0aW9ucy5wb3BvdmVyTWVzc2FnZVwiPjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlybS1idG5zXCIgW2NsYXNzLmNvbmZpcm0tYnRucy1yZXZlcnNlZF09XCJvcHRpb25zLnJldmVyc2VCdXR0b25PcmRlclwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImNvbmZpcm0tYnRuLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUNhbmNlbEJ1dHRvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW213bEZvY3VzXT1cIm9wdGlvbnMuZm9jdXNCdXR0b24gPT09ICdjYW5jZWwnXCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ2J0biBidG4tYmxvY2sgYnRuLScgKyBvcHRpb25zLmNhbmNlbEJ1dHRvblR5cGVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvcHRpb25zLm9uQ2FuY2VsKHtjbGlja0V2ZW50OiAkZXZlbnR9KVwiXG4gICAgICAgICAgICAgICAgW2lubmVySHRtbF09XCJvcHRpb25zLmNhbmNlbFRleHRcIj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb25maXJtLWJ0bi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFvcHRpb25zLmhpZGVDb25maXJtQnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbbXdsRm9jdXNdPVwib3B0aW9ucy5mb2N1c0J1dHRvbiA9PT0gJ2NvbmZpcm0nXCJcbiAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ2J0biBidG4tYmxvY2sgYnRuLScgKyBvcHRpb25zLmNvbmZpcm1CdXR0b25UeXBlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib3B0aW9ucy5vbkNvbmZpcm0oe2NsaWNrRXZlbnQ6ICRldmVudH0pXCJcbiAgICAgICAgICAgICAgICBbaW5uZXJIdG1sXT1cIm9wdGlvbnMuY29uZmlybVRleHRcIj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwib3B0aW9ucy5jdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntvcHRpb25zOiBvcHRpb25zfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucy5vbkFmdGVyVmlld0luaXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmcgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybUNhbmNlbEV2ZW50IHtcbiAgY2xpY2tFdmVudDogTW91c2VFdmVudDtcbn1cblxuLyoqXG4gKiBBbGwgcHJvcGVydGllcyBjYW4gYmUgc2V0IG9uIHRoZSBkaXJlY3RpdmUgYXMgYXR0cmlidXRlcyBsaWtlIHNvICh1c2UgYENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpYCB0byBjb25maWd1cmUgdGhlbSBnbG9iYWxseSk6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uXG4gKiAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICogIG13bENvbmZpcm1hdGlvblBvcG92ZXJcbiAqICBbcG9wb3ZlclRpdGxlXT1cInBvcG92ZXJUaXRsZVwiXG4gKiAgW3BvcG92ZXJNZXNzYWdlXT1cInBvcG92ZXJNZXNzYWdlXCJcbiAqICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAqICAoY29uZmlybSk9XCJjb25maXJtQ2xpY2tlZCA9IHRydWVcIlxuICogIChjYW5jZWwpPVwiY2FuY2VsQ2xpY2tlZCA9IHRydWVcIlxuICogIFsoaXNPcGVuKV09XCJpc09wZW5cIj5cbiAqICAgU2hvdyBjb25maXJtIHBvcG92ZXIhXG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ29uZmlybWF0aW9uUG9wb3Zlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgcG9wb3ZlclxuICAgKi9cbiAgQElucHV0KCkgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib2R5IHRleHQgb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyTWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBvZiB0aGUgY29uZmlybSBidXR0b24uIERlZmF1bHQgYENvbmZpcm1gXG4gICAqL1xuICBASW5wdXQoKSBjb25maXJtVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBvZiB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdCBgQ2FuY2VsYFxuICAgKi9cbiAgQElucHV0KCkgY2FuY2VsVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBwb3BvdmVyLiBJdCBjYW4gYmUgZWl0aGVyIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCBvciBgbGVmdGAuIERlZmF1bHQgYHRvcGBcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9vdHN0cmFwIGJ1dHRvbiB0eXBlIG9mIHRoZSBjb25maXJtIGJ1dHRvbi4gSXQgY2FuIGJlIGFueSBzdXBwb3J0ZWQgYm9vdHN0cmFwIGNvbG9yIHR5cGVcbiAgICogZS5nLiBgZGVmYXVsdGAsIGB3YXJuaW5nYCwgYGRhbmdlcmAgZXRjLiBEZWZhdWx0IGBzdWNjZXNzYFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlybUJ1dHRvblR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBidXR0b24gdHlwZSBvZiB0aGUgY2FuY2VsIGJ1dHRvbi4gSXQgY2FuIGJlIGFueSBzdXBwb3J0ZWQgYm9vdHN0cmFwIGNvbG9yIHR5cGVcbiAgICogZS5nLiBgZGVmYXVsdGAsIGB3YXJuaW5nYCwgYGRhbmdlcmAgZXRjLiBEZWZhdWx0IGBkZWZhdWx0YFxuICAgKi9cbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gZWl0aGVyIGBjb25maXJtYCBvciBgY2FuY2VsYCB0byBmb2N1cyB0aGUgY29uZmlybSBvciBjYW5jZWwgYnV0dG9uLlxuICAgKiBJZiBvbWl0dGVkLCBieSBkZWZhdWx0IGl0IHdpbGwgbm90IGZvY3VzIGVpdGhlciBidXR0b24uXG4gICAqL1xuICBASW5wdXQoKSBmb2N1c0J1dHRvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNvbmZpcm0gYnV0dG9uLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlQ29uZmlybUJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYW5jZWwgYnV0dG9uLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlQ2FuY2VsQnV0dG9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc2FibGUgc2hvd2luZyB0aGUgcG9wb3Zlci4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaWxsIG9wZW4gb3Igc2hvdyB0aGUgcG9wb3ZlciB3aGVuIGNoYW5nZWQuXG4gICAqIENhbiBiZSBzdWdhcmVkIHdpdGggYGlzT3BlbkNoYW5nZWAgdG8gZW11bGF0ZSAyLXdheSBiaW5kaW5nIGxpa2Ugc28gYFsoaXNPcGVuKV09XCJpc09wZW5cImBcbiAgICovXG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byBhIDxuZy10ZW1wbGF0ZT4gdGFnIHRoYXQgaWYgc2V0IHdpbGwgb3ZlcnJpZGUgdGhlIHBvcG92ZXJzIHRlbXBsYXRlLiBVc2UgbGlrZSBzbzpcbiAgICogYGBgaHRtbFxuICAgKiA8bmctdGVtcGxhdGUgI2N1c3RvbVRlbXBsYXRlIGxldC1vcHRpb25zPVwib3B0aW9uc1wiPlxuICAgKiAgIDxkaXYgW2NsYXNzXT1cIidwb3BvdmVyICcgKyBvcHRpb25zLnBsYWNlbWVudFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj5cbiAgICogICAgIE15IGN1c3RvbSB0ZW1wbGF0ZVxuICAgKiAgIDwvZGl2PlxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKiBgYGBcbiAgICpcbiAgICogVGhlbiBwYXNzIGN1c3RvbVRlbXBsYXRlIHRvIHRoZSBtd2xDb25maXJtYXRpb25Qb3BvdmVyIGRpcmVjdGl2ZSBsaWtlIHNvIGBbY3VzdG9tVGVtcGxhdGVdPVwiY3VzdG9tVGVtcGxhdGVcImBcbiAgICovXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBXaWxsIGVtaXQgd2hlbiB0aGUgcG9wb3ZlciBpcyBvcGVuZWQgb3IgY2xvc2VkXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY29uZmlybTogRXZlbnRFbWl0dGVyPENvbmZpcm1DYW5jZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPENvbmZpcm1DYW5jZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIENTUyBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgcG9wb3ZlclxuICAgKi9cbiAgQElucHV0KCkgcG9wb3ZlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCB0byB0aGUgZG9jdW1lbnQgYm9keSByYXRoZXIgdGhhbiB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN3YXAgdGhlIG9yZGVyIG9mIHRoZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgKi9cbiAgQElucHV0KCkgcmV2ZXJzZUJ1dHRvbk9yZGVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIHNob3VsZCBzdGF5IG9wZW4gZXZlbiB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgaXRcbiAgICovXG4gIEBJbnB1dCgpIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcG9wb3ZlcjogQ29tcG9uZW50UmVmPENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogUG9zaXRpb25pbmcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgIGlmIChjaGFuZ2VzLmlzT3Blbi5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zaG93UG9wb3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQ29uZmlybShldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSB7XG4gICAgdGhpcy5jb25maXJtLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQ2FuY2VsKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRvZ2dsZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMuc2hvd1BvcG92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsb3NlT25PdXRzaWRlQ2xpY2sgPSB0eXBlb2YgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrICE9PSAndW5kZWZpbmVkJyA/IFxuICAgICAgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrIDogdGhpcy5kZWZhdWx0T3B0aW9ucy5jbG9zZU9uT3V0c2lkZUNsaWNrO1xuICAgIGlmIChcbiAgICAgIHRoaXMucG9wb3ZlciAmJlxuICAgICAgIXRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgIXRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2tcbiAgICApIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIHdvcmsgYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9pc3N1ZXMvNjVcbiAgICAgIC8vIG90aGVyd2lzZSB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgZ2V0cyBmaXJlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgIC8vIHRoYXQgdHJpZ2dlcmVkIHRoZSBwb3BvdmVyIHRvIG9wZW4gKG5vIGlkZWEgd2h5IHRoaXMgaXMgc28pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHRoaXMucG9zaXRpb25Qb3BvdmVyKCkpXG4gICAgICAgIF07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucygpO1xuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB0aGlzLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIG9uQ29uZmlybTogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ29uZmlybShldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMub25DYW5jZWwoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFmdGVyVmlld0luaXQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJhbXM6IEFycmF5PGtleW9mIENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmU+ID0gW1xuICAgICAgICAnY29uZmlybVRleHQnLFxuICAgICAgICAnY2FuY2VsVGV4dCcsXG4gICAgICAgICdwbGFjZW1lbnQnLFxuICAgICAgICAnY29uZmlybUJ1dHRvblR5cGUnLFxuICAgICAgICAnY2FuY2VsQnV0dG9uVHlwZScsXG4gICAgICAgICdmb2N1c0J1dHRvbicsXG4gICAgICAgICdoaWRlQ29uZmlybUJ1dHRvbicsXG4gICAgICAgICdoaWRlQ2FuY2VsQnV0dG9uJyxcbiAgICAgICAgJ3BvcG92ZXJDbGFzcycsXG4gICAgICAgICdhcHBlbmRUb0JvZHknLFxuICAgICAgICAnY3VzdG9tVGVtcGxhdGUnLFxuICAgICAgICAncmV2ZXJzZUJ1dHRvbk9yZGVyJyxcbiAgICAgICAgJ3BvcG92ZXJUaXRsZScsXG4gICAgICAgICdwb3BvdmVyTWVzc2FnZSdcbiAgICAgIF07XG4gICAgICBvcHRpb25hbFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAob3B0aW9ucyBhcyBhbnkpW3BhcmFtXSA9IHRoaXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxcbiAgICAgICAgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudFxuICAgICAgPiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQpO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zLFxuICAgICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5wYXJlbnRJbmplY3RvclxuICAgICAgKTtcbiAgICAgIHRoaXMucG9wb3ZlciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgIGNoaWxkSW5qZWN0b3JcbiAgICAgICk7XG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Qb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHBvcG92ZXJFbGVtZW50ID0gdGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBwb3BvdmVyUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHBvcG92ZXJFbGVtZW50LFxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCB0aGlzLmRlZmF1bHRPcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucy5hcHBlbmRUb0JvZHlcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHBvcG92ZXJFbGVtZW50LCAndG9wJywgYCR7cG9wb3ZlclBvc2l0aW9uLnRvcH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgcG9wb3ZlckVsZW1lbnQsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgYCR7cG9wb3ZlclBvc2l0aW9uLmxlZnR9cHhgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlkZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlcikge1xuICAgICAgdGhpcy5wb3BvdmVyLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnBvcG92ZXI7XG4gICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBoZWxwZXIgZGlyZWN0aXZlIHRvIGZvY3VzIGJ1dHRvbnMuIFlvdSB3aWxsIG9ubHkgbmVlZCB0aGlzIGlmIHVzaW5nIGEgY3VzdG9tIHRlbXBsYXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xGb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbXdsRm9jdXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm13bEZvY3VzICYmIHRoaXMubXdsRm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nIH0gZnJvbSAncG9zaXRpb25pbmcnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNJbnRlcmZhY2Vcbn0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci1vcHRpb25zLnByb3ZpZGVyJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfT1BUSU9OUzogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbihcbiAgJ2NvbmZpcm1hdGlvbiBwb3BvdmVyIHVzZXIgb3B0aW9ucydcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25zRmFjdG9yeShcbiAgdXNlck9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zXG4pOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyB7XG4gIGNvbnN0IG9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zID0gbmV3IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zKCk7XG4gIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZSxcbiAgICBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50LFxuICAgIEZvY3VzRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZSwgRm9jdXNEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNJbnRlcmZhY2UgPSB7fVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogb3B0aW9uc0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1VTRVJfT1BUSU9OU11cbiAgICAgICAgfSxcbiAgICAgICAgUG9zaXRpb25pbmdcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQXdFQTs7MkJBSXdCLFNBQVM7MEJBQ1YsUUFBUTtpQ0FDRCxTQUFTO2dDQUNWLFNBQVM7eUJBQ2hCLEtBQUs7aUNBRUksS0FBSztnQ0FDTixLQUFLOzRCQUNWLEVBQUU7NEJBQ0QsS0FBSztrQ0FDQyxLQUFLO21DQUNKLElBQUk7O3FDQXZGckM7SUF3RkM7Ozs7Ozs7Ozs7SUNoRnFEQSxvREFBMEI7Ozs7O2dCQUQvRSxVQUFVOzsyQ0FQWDtFQVFzRCwwQkFBMEI7Ozs7OztBQ1JoRjs7OztJQStGRSw0Q0FBbUIsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7S0FBSTs7OztJQUVoRSw0REFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ2hDOztnQkE3RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLE1BQU0sRUFBRTt3QkFDTiw4M0JBcUNEO3FCQUNBO29CQUNELFFBQVEsRUFBRSxveURBNENUO2lCQUNGOzs7O2dCQTVGUSxnQ0FBZ0M7OzZDQUR6Qzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStLRSxzQ0FDVSxrQkFDQSxLQUNBLGdCQUNBLEtBQ0EsVUFDQTtRQUxBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDaEIsUUFBRyxHQUFILEdBQUc7UUFDSCxtQkFBYyxHQUFkLGNBQWM7UUFDZCxRQUFHLEdBQUgsR0FBRztRQUNI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