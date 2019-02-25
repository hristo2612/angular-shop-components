(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('positioning'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-shop-components', ['exports', '@angular/core', 'positioning', '@angular/common'], factory) :
    (factory((global['angular-shop-components'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,positioning,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ConfirmationPopoverOptions = (function () {
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
    var ConfirmationPopoverWindowOptions = (function (_super) {
        __extends(ConfirmationPopoverWindowOptions, _super);
        function ConfirmationPopoverWindowOptions() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConfirmationPopoverWindowOptions.decorators = [
            { type: core.Injectable },
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
    var ConfirmationPopoverWindowComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'mwl-confirmation-popover-window',
                        styles: [
                            "\n    .popover {\n      display: block;\n    }\n    .bs-popover-top .arrow, .bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    .bs-popover-left .arrow, .bs-popover-right .arrow {\n      top: 50%;\n    }\n    .btn {\n      transition: none;\n    }\n    .confirm-btns {\n      display: flex;\n      justify-content: space-around;\n    }\n    .confirm-btn-container {\n      flex-basis: 50%;\n    }\n    .confirm-btn-container:not(:first-child) {\n      margin-left: 4px;\n    }\n    .confirm-btn-container:not(:last-child) {\n      margin-right: 4px;\n    }\n    .confirm-btns-reversed {\n      flex-direction: row-reverse;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:first-child) {\n      margin-right: 4px;\n      margin-left: 0;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:last-child) {\n      margin-right: 0;\n      margin-left: 4px;\n    }\n  "
                        ],
                        template: "\n    <ng-template #defaultTemplate let-options=\"options\">\n      <div [ngClass]=\"[\n        'popover',\n        options.placement,\n        'popover-' + options.placement,\n        'bs-popover-' + options.placement,\n        options.popoverClass\n      ]\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title popover-header\" [innerHTML]=\"options.popoverTitle\"></h3>\n        <div class=\"popover-content popover-body\">\n          <p [innerHTML]=\"options.popoverMessage\"></p>\n          <div class=\"confirm-btns\" [class.confirm-btns-reversed]=\"options.reverseButtonOrder\">\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel({clickEvent: $event})\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm({clickEvent: $event})\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{options: options}\">\n    </ng-template>\n  "
                    },] },
        ];
        /** @nocollapse */
        ConfirmationPopoverWindowComponent.ctorParameters = function () {
            return [
                { type: ConfirmationPopoverWindowOptions }
            ];
        };
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
    var ConfirmationPopoverDirective = (function () {
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
            this.isOpenChange = new core.EventEmitter(true);
            /**
             * An expression that is called when the confirm button is clicked.
             */
            this.confirm = new core.EventEmitter();
            /**
             * An expression that is called when the cancel button is clicked.
             */
            this.cancel = new core.EventEmitter();
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
                            ((options_1))[param] = _this[param];
                        }
                    });
                    var /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
                    var /** @type {?} */ childInjector = core.Injector.create([
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
            { type: core.Directive, args: [{
                        selector: '[mwlConfirmationPopover]'
                    },] },
        ];
        /** @nocollapse */
        ConfirmationPopoverDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.ElementRef },
                { type: ConfirmationPopoverOptions },
                { type: core.ComponentFactoryResolver },
                { type: positioning.Positioning },
                { type: core.Renderer2 }
            ];
        };
        ConfirmationPopoverDirective.propDecorators = {
            popoverTitle: [{ type: core.Input }],
            popoverMessage: [{ type: core.Input }],
            confirmText: [{ type: core.Input }],
            cancelText: [{ type: core.Input }],
            placement: [{ type: core.Input }],
            confirmButtonType: [{ type: core.Input }],
            cancelButtonType: [{ type: core.Input }],
            focusButton: [{ type: core.Input }],
            hideConfirmButton: [{ type: core.Input }],
            hideCancelButton: [{ type: core.Input }],
            isDisabled: [{ type: core.Input }],
            isOpen: [{ type: core.Input }],
            customTemplate: [{ type: core.Input }],
            isOpenChange: [{ type: core.Output }],
            confirm: [{ type: core.Output }],
            cancel: [{ type: core.Output }],
            popoverClass: [{ type: core.Input }],
            appendToBody: [{ type: core.Input }],
            reverseButtonOrder: [{ type: core.Input }],
            closeOnOutsideClick: [{ type: core.Input }],
            togglePopover: [{ type: core.HostListener, args: ['click',] }]
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
    var FocusDirective = (function () {
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
            { type: core.Directive, args: [{
                        selector: '[mwlFocus]'
                    },] },
        ];
        /** @nocollapse */
        FocusDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        FocusDirective.propDecorators = {
            mwlFocus: [{ type: core.Input }]
        };
        return FocusDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ USER_OPTIONS = new core.InjectionToken('confirmation popover user options');
    /**
     * @param {?} userOptions
     * @return {?}
     */
    function optionsFactory(userOptions) {
        var /** @type {?} */ options = new ConfirmationPopoverOptions();
        Object.assign(options, userOptions);
        return options;
    }
    var ConfirmationPopoverModule = (function () {
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
                if (options === void 0) {
                    options = {};
                }
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
                        positioning.Positioning
                    ]
                };
            };
        ConfirmationPopoverModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            ConfirmationPopoverDirective,
                            ConfirmationPopoverWindowComponent,
                            FocusDirective
                        ],
                        imports: [common.CommonModule],
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

    exports.ConfirmationPopoverModule = ConfirmationPopoverModule;
    exports.ɵd = ConfirmationPopoverOptions;
    exports.ɵf = ConfirmationPopoverWindowOptions;
    exports.ɵe = ConfirmationPopoverWindowComponent;
    exports.ɵc = ConfirmationPopoverDirective;
    exports.ɵa = USER_OPTIONS;
    exports.ɵb = optionsFactory;
    exports.ɵg = FocusDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zaG9wLWNvbXBvbmVudHMudW1kLmpzLm1hcCIsInNvdXJjZXMiOltudWxsLCJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLXNob3AtY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXNob3AtY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItc2hvcC1jb21wb25lbnRzL2ZvY3VzLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvY29uZmlybWF0aW9uLXBvcG92ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0geVtvcFswXSAmIDIgPyBcInJldHVyblwiIDogb3BbMF0gPyBcInRocm93XCIgOiBcIm5leHRcIl0pICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gWzAsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7ICB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAob1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIHRpdGxlXG4gICAqL1xuICBwb3BvdmVyVGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIG1lc3NhZ2VcbiAgICovXG4gIHBvcG92ZXJNZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBjb25maXJtYXRpb24gYnV0dG9uIHRleHRcbiAgICovXG4gIGNvbmZpcm1UZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBjYW5jZWwgYnV0dG9uIHRleHRcbiAgICovXG4gIGNhbmNlbFRleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIGNvbmZpcm0gYnV0dG9uIHR5cGUgZS5nLiBgc3VjY2Vzc2AsIGBkYW5nZXJgIGV0Y1xuICAgKi9cbiAgY29uZmlybUJ1dHRvblR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIGNhbmNlbCBidXR0b24gdHlwZSAgZS5nLiBgc3VjY2Vzc2AsIGBkYW5nZXJgIGV0Y1xuICAgKi9cbiAgY2FuY2VsQnV0dG9uVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgcGxhY2VtZW50LiBDYW4gYmUgYHRvcGAsIGBib3R0b21gLCBgbGVmdGAsIGByaWdodGBcbiAgICovXG4gIHBsYWNlbWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hpY2ggYnV0dG9uIHRvIGNhbmNlbC4gQ2FuIGJlIGVpdGhlciBgY29uZmlybWAgb3IgYGNhbmNlbGBcbiAgICovXG4gIGZvY3VzQnV0dG9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNvbmZpcm1hdGlvbiBidXR0b25cbiAgICovXG4gIGhpZGVDb25maXJtQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAqL1xuICBoaWRlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBjdXN0b20gQ1NTIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBwb3BvdmVyXG4gICAqL1xuICBwb3BvdmVyQ2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRoZSBwb3BvdmVyIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAqL1xuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBvcmRlciBvZiB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICovXG4gIHJldmVyc2VCdXR0b25PcmRlcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIHNob3VsZCBzdGF5IG9wZW4gd2hlbiBjbGlja2luZyBvdXRzaWRlIGl0XG4gICAqL1xuICBjbG9zZU9uT3V0c2lkZUNsaWNrPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zXG4gIGltcGxlbWVudHMgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNJbnRlcmZhY2Uge1xuICBwb3BvdmVyVGl0bGU6IHN0cmluZztcbiAgcG9wb3Zlck1lc3NhZ2U6IHN0cmluZztcbiAgY29uZmlybVRleHQ6IHN0cmluZyA9ICdDb25maXJtJztcbiAgY2FuY2VsVGV4dDogc3RyaW5nID0gJ0NhbmNlbCc7XG4gIGNvbmZpcm1CdXR0b25UeXBlOiBzdHJpbmcgPSAnc3VjY2Vzcyc7XG4gIGNhbmNlbEJ1dHRvblR5cGU6IHN0cmluZyA9ICdkZWZhdWx0JztcbiAgcGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcbiAgZm9jdXNCdXR0b246IHN0cmluZztcbiAgaGlkZUNvbmZpcm1CdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgaGlkZUNhbmNlbEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3BvdmVyQ2xhc3M6IHN0cmluZyA9ICcnO1xuICBhcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmV2ZXJzZUJ1dHRvbk9yZGVyOiBib29sZWFuID0gZmFsc2U7XG4gIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ29uZmlybUNhbmNlbEV2ZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci1vcHRpb25zLnByb3ZpZGVyJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zIGV4dGVuZHMgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMge1xuICBwdWJsaWMgb25Db25maXJtOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkgPT4gdm9pZDtcbiAgcHVibGljIG9uQ2FuY2VsOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkgPT4gdm9pZDtcbiAgcHVibGljIG9uQWZ0ZXJWaWV3SW5pdDogKCkgPT4gdm9pZDtcbiAgcHVibGljIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LW9wdGlvbnMucHJvdmlkZXInO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93JyxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5wb3BvdmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYnMtcG9wb3Zlci10b3AgLmFycm93LCAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93IHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG4gICAgLmJzLXBvcG92ZXItbGVmdCAuYXJyb3csIC5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRuLWNvbnRhaW5lciB7XG4gICAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bi1jb250YWluZXI6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zLXJldmVyc2VkIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRucy1yZXZlcnNlZCAuY29uZmlybS1idG4tY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bnMtcmV2ZXJzZWQgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LW9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cIltcbiAgICAgICAgJ3BvcG92ZXInLFxuICAgICAgICBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgJ3BvcG92ZXItJyArIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICAnYnMtcG9wb3Zlci0nICsgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIG9wdGlvbnMucG9wb3ZlckNsYXNzXG4gICAgICBdXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWFycm93IGFycm93XCI+PC9kaXY+XG4gICAgICAgIDxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGUgcG9wb3Zlci1oZWFkZXJcIiBbaW5uZXJIVE1MXT1cIm9wdGlvbnMucG9wb3ZlclRpdGxlXCI+PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudCBwb3BvdmVyLWJvZHlcIj5cbiAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cIm9wdGlvbnMucG9wb3Zlck1lc3NhZ2VcIj48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpcm0tYnRuc1wiIFtjbGFzcy5jb25maXJtLWJ0bnMtcmV2ZXJzZWRdPVwib3B0aW9ucy5yZXZlcnNlQnV0dG9uT3JkZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb25maXJtLWJ0bi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFvcHRpb25zLmhpZGVDYW5jZWxCdXR0b25cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIFttd2xGb2N1c109XCJvcHRpb25zLmZvY3VzQnV0dG9uID09PSAnY2FuY2VsJ1wiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIididG4gYnRuLWJsb2NrIGJ0bi0nICsgb3B0aW9ucy5jYW5jZWxCdXR0b25UeXBlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib3B0aW9ucy5vbkNhbmNlbCh7Y2xpY2tFdmVudDogJGV2ZW50fSlcIlxuICAgICAgICAgICAgICAgIFtpbm5lckh0bWxdPVwib3B0aW9ucy5jYW5jZWxUZXh0XCI+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY29uZmlybS1idG4tY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQ29uZmlybUJ1dHRvblwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW213bEZvY3VzXT1cIm9wdGlvbnMuZm9jdXNCdXR0b24gPT09ICdjb25maXJtJ1wiXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIididG4gYnRuLWJsb2NrIGJ0bi0nICsgb3B0aW9ucy5jb25maXJtQnV0dG9uVHlwZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wdGlvbnMub25Db25maXJtKHtjbGlja0V2ZW50OiAkZXZlbnR9KVwiXG4gICAgICAgICAgICAgICAgW2lubmVySHRtbF09XCJvcHRpb25zLmNvbmZpcm1UZXh0XCI+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm9wdGlvbnMuY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7b3B0aW9uczogb3B0aW9uc31cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMub25BZnRlclZpZXdJbml0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgT25EZXN0cm95LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nIH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1DYW5jZWxFdmVudCB7XG4gIGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQ7XG59XG5cbi8qKlxuICogQWxsIHByb3BlcnRpZXMgY2FuIGJlIHNldCBvbiB0aGUgZGlyZWN0aXZlIGFzIGF0dHJpYnV0ZXMgbGlrZSBzbyAodXNlIGBDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlLmZvclJvb3QoKWAgdG8gY29uZmlndXJlIHRoZW0gZ2xvYmFsbHkpOlxuICogYGBgaHRtbFxuICogPGJ1dHRvblxuICogIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAqICBtd2xDb25maXJtYXRpb25Qb3BvdmVyXG4gKiAgW3BvcG92ZXJUaXRsZV09XCJwb3BvdmVyVGl0bGVcIlxuICogIFtwb3BvdmVyTWVzc2FnZV09XCJwb3BvdmVyTWVzc2FnZVwiXG4gKiAgcGxhY2VtZW50PVwibGVmdFwiXG4gKiAgKGNvbmZpcm0pPVwiY29uZmlybUNsaWNrZWQgPSB0cnVlXCJcbiAqICAoY2FuY2VsKT1cImNhbmNlbENsaWNrZWQgPSB0cnVlXCJcbiAqICBbKGlzT3BlbildPVwiaXNPcGVuXCI+XG4gKiAgIFNob3cgY29uZmlybSBwb3BvdmVyIVxuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENvbmZpcm1hdGlvblBvcG92ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgb2YgdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9keSB0ZXh0IG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcG9wb3Zlck1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLiBEZWZhdWx0IGBDb25maXJtYFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlybVRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHQgYENhbmNlbGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wb3Zlci4gSXQgY2FuIGJlIGVpdGhlciBgdG9wYCwgYHJpZ2h0YCwgYGJvdHRvbWAgb3IgYGxlZnRgLiBEZWZhdWx0IGB0b3BgXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBidXR0b24gdHlwZSBvZiB0aGUgY29uZmlybSBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgc3VjY2Vzc2BcbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b25UeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib290c3RyYXAgYnV0dG9uIHR5cGUgb2YgdGhlIGNhbmNlbCBidXR0b24uIEl0IGNhbiBiZSBhbnkgc3VwcG9ydGVkIGJvb3RzdHJhcCBjb2xvciB0eXBlXG4gICAqIGUuZy4gYGRlZmF1bHRgLCBgd2FybmluZ2AsIGBkYW5nZXJgIGV0Yy4gRGVmYXVsdCBgZGVmYXVsdGBcbiAgICovXG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvblR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIGVpdGhlciBgY29uZmlybWAgb3IgYGNhbmNlbGAgdG8gZm9jdXMgdGhlIGNvbmZpcm0gb3IgY2FuY2VsIGJ1dHRvbi5cbiAgICogSWYgb21pdHRlZCwgYnkgZGVmYXVsdCBpdCB3aWxsIG5vdCBmb2N1cyBlaXRoZXIgYnV0dG9uLlxuICAgKi9cbiAgQElucHV0KCkgZm9jdXNCdXR0b246IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjb25maXJtIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNvbmZpcm1CdXR0b246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaGlkZUNhbmNlbEJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIHNob3dpbmcgdGhlIHBvcG92ZXIuIERlZmF1bHQgYGZhbHNlYC5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2lsbCBvcGVuIG9yIHNob3cgdGhlIHBvcG92ZXIgd2hlbiBjaGFuZ2VkLlxuICAgKiBDYW4gYmUgc3VnYXJlZCB3aXRoIGBpc09wZW5DaGFuZ2VgIHRvIGVtdWxhdGUgMi13YXkgYmluZGluZyBsaWtlIHNvIGBbKGlzT3BlbildPVwiaXNPcGVuXCJgXG4gICAqL1xuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gYSA8bmctdGVtcGxhdGU+IHRhZyB0aGF0IGlmIHNldCB3aWxsIG92ZXJyaWRlIHRoZSBwb3BvdmVycyB0ZW1wbGF0ZS4gVXNlIGxpa2Ugc286XG4gICAqIGBgYGh0bWxcbiAgICogPG5nLXRlbXBsYXRlICNjdXN0b21UZW1wbGF0ZSBsZXQtb3B0aW9ucz1cIm9wdGlvbnNcIj5cbiAgICogICA8ZGl2IFtjbGFzc109XCIncG9wb3ZlciAnICsgb3B0aW9ucy5wbGFjZW1lbnRcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrXCI+XG4gICAqICAgICBNeSBjdXN0b20gdGVtcGxhdGVcbiAgICogICA8L2Rpdj5cbiAgICogPC9uZy10ZW1wbGF0ZT5cbiAgICogYGBgXG4gICAqXG4gICAqIFRoZW4gcGFzcyBjdXN0b21UZW1wbGF0ZSB0byB0aGUgbXdsQ29uZmlybWF0aW9uUG9wb3ZlciBkaXJlY3RpdmUgbGlrZSBzbyBgW2N1c3RvbVRlbXBsYXRlXT1cImN1c3RvbVRlbXBsYXRlXCJgXG4gICAqL1xuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2lsbCBlbWl0IHdoZW4gdGhlIHBvcG92ZXIgaXMgb3BlbmVkIG9yIGNsb3NlZFxuICAgKi9cbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbmZpcm06IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjYW5jZWw6IEV2ZW50RW1pdHRlcjxDb25maXJtQ2FuY2VsRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBDU1MgY2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIHBvcG92ZXJcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50IGJvZHkgcmF0aGVyIHRoYW4gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBvcmRlciBvZiB0aGUgY29uZmlybSBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICovXG4gIEBJbnB1dCgpIHJldmVyc2VCdXR0b25PcmRlcjogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBzaG91bGQgc3RheSBvcGVuIGV2ZW4gd2hlbiBjbGlja2luZyBvdXRzaWRlIG9mIGl0XG4gICAqL1xuICBASW5wdXQoKSBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHBvcG92ZXI6IENvbXBvbmVudFJlZjxDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50PjtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcG9zaXRpb246IFBvc2l0aW9uaW5nLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICBpZiAoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuc2hvd1BvcG92ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNvbmZpcm0oZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkge1xuICAgIHRoaXMuY29uZmlybS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBvbkNhbmNlbChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSB7XG4gICAgdGhpcy5jYW5jZWwuZW1pdChldmVudCk7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0b2dnbGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnNob3dQb3BvdmVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRG9jdW1lbnRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjbG9zZU9uT3V0c2lkZUNsaWNrID0gdHlwZW9mIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljayAhPT0gJ3VuZGVmaW5lZCcgPyBcbiAgICAgIHRoaXMuY2xvc2VPbk91dHNpZGVDbGljayA6IHRoaXMuZGVmYXVsdE9wdGlvbnMuY2xvc2VPbk91dHNpZGVDbGljaztcbiAgICBpZiAoXG4gICAgICB0aGlzLnBvcG92ZXIgJiZcbiAgICAgICF0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICF0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICBjbG9zZU9uT3V0c2lkZUNsaWNrXG4gICAgKSB7XG4gICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93UG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3ZlciAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyB3b3JrIGFyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXIvaXNzdWVzLzY1XG4gICAgICAvLyBvdGhlcndpc2UgdGhlIGRvY3VtZW50IGNsaWNrIGV2ZW50IGdldHMgZmlyZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50XG4gICAgICAvLyB0aGF0IHRyaWdnZXJlZCB0aGUgcG9wb3ZlciB0byBvcGVuIChubyBpZGVhIHdoeSB0aGlzIGlzIHNvKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ3RvdWNoZW5kJywgKGV2ZW50OiBFdmVudCkgPT5cbiAgICAgICAgICAgIHRoaXMub25Eb2N1bWVudENsaWNrKGV2ZW50KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpKVxuICAgICAgICBdO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMoKTtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywgdGhpcy5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgICBvbkNvbmZpcm06IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNvbmZpcm0oZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbDogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2FuY2VsKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BZnRlclZpZXdJbml0OiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblBvcG92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9wdGlvbmFsUGFyYW1zOiBBcnJheTxrZXlvZiBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlPiA9IFtcbiAgICAgICAgJ2NvbmZpcm1UZXh0JyxcbiAgICAgICAgJ2NhbmNlbFRleHQnLFxuICAgICAgICAncGxhY2VtZW50JyxcbiAgICAgICAgJ2NvbmZpcm1CdXR0b25UeXBlJyxcbiAgICAgICAgJ2NhbmNlbEJ1dHRvblR5cGUnLFxuICAgICAgICAnZm9jdXNCdXR0b24nLFxuICAgICAgICAnaGlkZUNvbmZpcm1CdXR0b24nLFxuICAgICAgICAnaGlkZUNhbmNlbEJ1dHRvbicsXG4gICAgICAgICdwb3BvdmVyQ2xhc3MnLFxuICAgICAgICAnYXBwZW5kVG9Cb2R5JyxcbiAgICAgICAgJ2N1c3RvbVRlbXBsYXRlJyxcbiAgICAgICAgJ3JldmVyc2VCdXR0b25PcmRlcicsXG4gICAgICAgICdwb3BvdmVyVGl0bGUnLFxuICAgICAgICAncG9wb3Zlck1lc3NhZ2UnXG4gICAgICBdO1xuICAgICAgb3B0aW9uYWxQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1twYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgKG9wdGlvbnMgYXMgYW55KVtwYXJhbV0gPSB0aGlzW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8XG4gICAgICAgIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnRcbiAgICAgID4gPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50KTtcbiAgICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoXG4gICAgICAgIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucGFyZW50SW5qZWN0b3JcbiAgICAgICk7XG4gICAgICB0aGlzLnBvcG92ZXIgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICBjb21wb25lbnRGYWN0b3J5LFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYubGVuZ3RoLFxuICAgICAgICBjaGlsZEluamVjdG9yXG4gICAgICApO1xuICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBvc2l0aW9uUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICBjb25zdCBwb3BvdmVyRWxlbWVudCA9IHRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgICAgY29uc3QgcG9wb3ZlclBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5wb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgICBwb3BvdmVyRWxlbWVudCxcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5IHx8IHRoaXMuZGVmYXVsdE9wdGlvbnMuYXBwZW5kVG9Cb2R5XG4gICAgICApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShwb3BvdmVyRWxlbWVudCwgJ3RvcCcsIGAke3BvcG92ZXJQb3NpdGlvbi50b3B9cHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHBvcG92ZXJFbGVtZW50LFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgIGAke3BvcG92ZXJQb3NpdGlvbi5sZWZ0fXB4YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZGVQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMucG9wb3Zlci5kZXN0cm95KCk7XG4gICAgICBkZWxldGUgdGhpcy5wb3BvdmVyO1xuICAgICAgdGhpcy5pc09wZW5DaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgaGVscGVyIGRpcmVjdGl2ZSB0byBmb2N1cyBidXR0b25zLiBZb3Ugd2lsbCBvbmx5IG5lZWQgdGhpcyBpZiB1c2luZyBhIGN1c3RvbSB0ZW1wbGF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRm9jdXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG13bEZvY3VzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxtOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5td2xGb2N1cyAmJiB0aGlzLm13bEZvY3VzID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZyB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMsXG4gIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zSW50ZXJmYWNlXG59IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItb3B0aW9ucy5wcm92aWRlcic7XG5cbmV4cG9ydCBjb25zdCBVU0VSX09QVElPTlM6IEluamVjdGlvblRva2VuPHN0cmluZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oXG4gICdjb25maXJtYXRpb24gcG9wb3ZlciB1c2VyIG9wdGlvbnMnXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uc0ZhY3RvcnkoXG4gIHVzZXJPcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc1xuKTogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMge1xuICBjb25zdCBvcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyA9IG5ldyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucygpO1xuICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmUsXG4gICAgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCxcbiAgICBGb2N1c0RpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0NvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmUsIEZvY3VzRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIG9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zSW50ZXJmYWNlID0ge31cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maXJtYXRpb25Qb3BvdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IG9wdGlvbnNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX09QVElPTlNdXG4gICAgICAgIH0sXG4gICAgICAgIFBvc2l0aW9uaW5nXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIiwiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIkluamVjdG9yIiwiRGlyZWN0aXZlIiwiVmlld0NvbnRhaW5lclJlZiIsIkVsZW1lbnRSZWYiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJQb3NpdGlvbmluZyIsIlJlbmRlcmVyMiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiSW5qZWN0aW9uVG9rZW4iLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztTQUNwQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUUvRSx1QkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDMUIsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUN2QyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FB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