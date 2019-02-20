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
export class ConfirmationPopoverDirective {
    /**
     * \@internal
     * @param {?} viewContainerRef
     * @param {?} elm
     * @param {?} defaultOptions
     * @param {?} cfr
     * @param {?} position
     * @param {?} renderer
     */
    constructor(viewContainerRef, elm, defaultOptions, cfr, position, renderer) {
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
     * \@internal
     * @return {?}
     */
    ngOnInit() {
        this.isOpenChange.emit(false);
    }
    /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["isOpen"]) {
            if (changes["isOpen"].currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    ngOnDestroy() {
        this.hidePopover();
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onConfirm(event) {
        this.confirm.emit(event);
        this.hidePopover();
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    onCancel(event) {
        this.cancel.emit(event);
        this.hidePopover();
    }
    /**
     * \@internal
     * @return {?}
     */
    togglePopover() {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        const /** @type {?} */ closeOnOutsideClick = typeof this.closeOnOutsideClick !== 'undefined' ?
            this.closeOnOutsideClick : this.defaultOptions.closeOnOutsideClick;
        if (this.popover &&
            !this.elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target) &&
            closeOnOutsideClick) {
            this.hidePopover();
        }
    }
    /**
     * @return {?}
     */
    showPopover() {
        if (!this.popover && !this.isDisabled) {
            // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
            // otherwise the document click event gets fired after the click event
            // that triggered the popover to open (no idea why this is so)
            setTimeout(() => {
                this.eventListeners = [
                    this.renderer.listen('document', 'click', (event) => this.onDocumentClick(event)),
                    this.renderer.listen('document', 'touchend', (event) => this.onDocumentClick(event)),
                    this.renderer.listen('window', 'resize', () => this.positionPopover())
                ];
            });
            const /** @type {?} */ options = new ConfirmationPopoverWindowOptions();
            Object.assign(options, this.defaultOptions, {
                onConfirm: (event) => {
                    this.onConfirm(event);
                },
                onCancel: (event) => {
                    this.onCancel(event);
                },
                onAfterViewInit: () => {
                    this.positionPopover();
                }
            });
            const /** @type {?} */ optionalParams = [
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
            optionalParams.forEach(param => {
                if (typeof this[param] !== 'undefined') {
                    (/** @type {?} */ (options))[param] = this[param];
                }
            });
            const /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
            const /** @type {?} */ childInjector = Injector.create([
                {
                    provide: ConfirmationPopoverWindowOptions,
                    useValue: options
                }
            ], this.viewContainerRef.parentInjector);
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (options.appendToBody) {
                document.body.appendChild(this.popover.location.nativeElement);
            }
            this.isOpenChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    positionPopover() {
        if (this.popover) {
            const /** @type {?} */ popoverElement = this.popover.location.nativeElement.children[0];
            const /** @type {?} */ popoverPosition = this.position.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            this.renderer.setStyle(popoverElement, 'top', `${popoverPosition.top}px`);
            this.renderer.setStyle(popoverElement, 'left', `${popoverPosition.left}px`);
        }
    }
    /**
     * @return {?}
     */
    hidePopover() {
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.isOpenChange.emit(false);
            this.eventListeners.forEach(fn => fn());
            this.eventListeners = [];
        }
    }
}
ConfirmationPopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlConfirmationPopover]'
            },] },
];
/** @nocollapse */
ConfirmationPopoverDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ConfirmationPopoverOptions },
    { type: ComponentFactoryResolver },
    { type: Positioning },
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLGdCQUFnQixFQUdoQixVQUFVLEVBR1YsUUFBUSxFQUNSLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsV0FBVyxFQUdaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEIxQyxNQUFNOzs7Ozs7Ozs7O0lBNkhKLFlBQ1Usa0JBQ0EsS0FDQSxnQkFDQSxLQUNBLFVBQ0E7UUFMQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ2hCLFFBQUcsR0FBSCxHQUFHO1FBQ0gsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsUUFBRyxHQUFILEdBQUc7UUFDSCxhQUFRLEdBQVIsUUFBUTtRQUNSLGFBQVEsR0FBUixRQUFROzs7OzBCQXpFYSxLQUFLOzs7OztzQkFNVCxLQUFLOzs7OzRCQW1CZ0IsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDOzs7O3VCQUtoQixJQUFJLFlBQVksRUFBRTs7OztzQkFLbkIsSUFBSSxZQUFZLEVBQUU7OEJBMkIzQixFQUFFO0tBWTFDOzs7OztJQUtKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENB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WUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7U0FDMUI7Ozs7WUFsVEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7Ozs7WUEzQ0MsZ0JBQWdCO1lBR2hCLFVBQVU7WUFXSCwwQkFBMEI7WUFQakMsd0JBQXdCO1lBU2pCLFdBQVc7WUFSbEIsU0FBUzs7OzJCQXlDUixLQUFLOzZCQUtMLEtBQUs7MEJBS0wsS0FBSzt5QkFLTCxLQUFLO3dCQUtMLEtBQUs7Z0NBTUwsS0FBSzsrQkFNTCxLQUFLOzBCQU1MLEtBQUs7Z0NBS0wsS0FBSzsrQkFLTCxLQUFLO3lCQUtMLEtBQUs7cUJBTUwsS0FBSzs2QkFjTCxLQUFLOzJCQUtMLE1BQU07c0JBS04sTUFBTTtxQkFLTixNQUFNOzJCQUtOLEtBQUs7MkJBS0wsS0FBSztpQ0FLTCxLQUFLO2tDQUtMLEtBQUs7NEJBbUVMLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LW9wdGlvbnMucHJvdmlkZXInO1xuaW1wb3J0IHsgUG9zaXRpb25pbmcgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybUNhbmNlbEV2ZW50IHtcbiAgY2xpY2tFdmVudDogTW91c2VFdmVudDtcbn1cblxuLyoqXG4gKiBBbGwgcHJvcGVydGllcyBjYW4gYmUgc2V0IG9uIHRoZSBkaXJlY3RpdmUgYXMgYXR0cmlidXRlcyBsaWtlIHNvICh1c2UgYENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpYCB0byBjb25maWd1cmUgdGhlbSBnbG9iYWxseSk6XG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uXG4gKiAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxuICogIG13bENvbmZpcm1hdGlvblBvcG92ZXJcbiAqICBbcG9wb3ZlclRpdGxlXT1cInBvcG92ZXJUaXRsZVwiXG4gKiAgW3BvcG92ZXJNZXNzYWdlXT1cInBvcG92ZXJNZXNzYWdlXCJcbiAqICBwbGFjZW1lbnQ9XCJsZWZ0XCJcbiAqICAoY29uZmlybSk9XCJjb25maXJtQ2xpY2tlZCA9IHRydWVcIlxuICogIChjYW5jZWwpPVwiY2FuY2VsQ2xpY2tlZCA9IHRydWVcIlxuICogIFsoaXNPcGVuKV09XCJpc09wZW5cIj5cbiAqICAgU2hvdyBjb25maXJtIHBvcG92ZXIhXG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ29uZmlybWF0aW9uUG9wb3Zlcl0nXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgcG9wb3ZlclxuICAgKi9cbiAgQElucHV0KCkgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib2R5IHRleHQgb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyTWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBvZiB0aGUgY29uZmlybSBidXR0b24uIERlZmF1bHQgYENvbmZpcm1gXG4gICAqL1xuICBASW5wdXQoKSBjb25maXJtVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBvZiB0aGUgY2FuY2VsIGJ1dHRvbi4gRGVmYXVsdCBgQ2FuY2VsYFxuICAgKi9cbiAgQElucHV0KCkgY2FuY2VsVGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBwb3BvdmVyLiBJdCBjYW4gYmUgZWl0aGVyIGB0b3BgLCBgcmlnaHRgLCBgYm90dG9tYCBvciBgbGVmdGAuIERlZmF1bHQgYHRvcGBcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9vdHN0cmFwIGJ1dHRvbiB0eXBlIG9mIHRoZSBjb25maXJtIGJ1dHRvbi4gSXQgY2FuIGJlIGFueSBzdXBwb3J0ZWQgYm9vdHN0cmFwIGNvbG9yIHR5cGVcbiAgICogZS5nLiBgZGVmYXVsdGAsIGB3YXJuaW5nYCwgYGRhbmdlcmAgZXRjLiBEZWZhdWx0IGBzdWNjZXNzYFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlybUJ1dHRvblR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvb3RzdHJhcCBidXR0b24gdHlwZSBvZiB0aGUgY2FuY2VsIGJ1dHRvbi4gSXQgY2FuIGJlIGFueSBzdXBwb3J0ZWQgYm9vdHN0cmFwIGNvbG9yIHR5cGVcbiAgICogZS5nLiBgZGVmYXVsdGAsIGB3YXJuaW5nYCwgYGRhbmdlcmAgZXRjLiBEZWZhdWx0IGBkZWZhdWx0YFxuICAgKi9cbiAgQElucHV0KCkgY2FuY2VsQnV0dG9uVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gZWl0aGVyIGBjb25maXJtYCBvciBgY2FuY2VsYCB0byBmb2N1cyB0aGUgY29uZmlybSBvciBjYW5jZWwgYnV0dG9uLlxuICAgKiBJZiBvbWl0dGVkLCBieSBkZWZhdWx0IGl0IHdpbGwgbm90IGZvY3VzIGVpdGhlciBidXR0b24uXG4gICAqL1xuICBASW5wdXQoKSBmb2N1c0J1dHRvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNvbmZpcm0gYnV0dG9uLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlQ29uZmlybUJ1dHRvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjYW5jZWwgYnV0dG9uLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAqL1xuICBASW5wdXQoKSBoaWRlQ2FuY2VsQnV0dG9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGRpc2FibGUgc2hvd2luZyB0aGUgcG9wb3Zlci4gRGVmYXVsdCBgZmFsc2VgLlxuICAgKi9cbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaWxsIG9wZW4gb3Igc2hvdyB0aGUgcG9wb3ZlciB3aGVuIGNoYW5nZWQuXG4gICAqIENhbiBiZSBzdWdhcmVkIHdpdGggYGlzT3BlbkNoYW5nZWAgdG8gZW11bGF0ZSAyLXdheSBiaW5kaW5nIGxpa2Ugc28gYFsoaXNPcGVuKV09XCJpc09wZW5cImBcbiAgICovXG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byBhIDxuZy10ZW1wbGF0ZT4gdGFnIHRoYXQgaWYgc2V0IHdpbGwgb3ZlcnJpZGUgdGhlIHBvcG92ZXJzIHRlbXBsYXRlLiBVc2UgbGlrZSBzbzpcbiAgICogYGBgaHRtbFxuICAgKiA8bmctdGVtcGxhdGUgI2N1c3RvbVRlbXBsYXRlIGxldC1vcHRpb25zPVwib3B0aW9uc1wiPlxuICAgKiAgIDxkaXYgW2NsYXNzXT1cIidwb3BvdmVyICcgKyBvcHRpb25zLnBsYWNlbWVudFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2tcIj5cbiAgICogICAgIE15IGN1c3RvbSB0ZW1wbGF0ZVxuICAgKiAgIDwvZGl2PlxuICAgKiA8L25nLXRlbXBsYXRlPlxuICAgKiBgYGBcbiAgICpcbiAgICogVGhlbiBwYXNzIGN1c3RvbVRlbXBsYXRlIHRvIHRoZSBtd2xDb25maXJtYXRpb25Qb3BvdmVyIGRpcmVjdGl2ZSBsaWtlIHNvIGBbY3VzdG9tVGVtcGxhdGVdPVwiY3VzdG9tVGVtcGxhdGVcImBcbiAgICovXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBXaWxsIGVtaXQgd2hlbiB0aGUgcG9wb3ZlciBpcyBvcGVuZWQgb3IgY2xvc2VkXG4gICAqL1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbmZpcm0gYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY29uZmlybTogRXZlbnRFbWl0dGVyPENvbmZpcm1DYW5jZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgQE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPENvbmZpcm1DYW5jZWxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIENTUyBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgcG9wb3ZlclxuICAgKi9cbiAgQElucHV0KCkgcG9wb3ZlckNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgZWxlbWVudCB0byB0aGUgZG9jdW1lbnQgYm9keSByYXRoZXIgdGhhbiB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN3YXAgdGhlIG9yZGVyIG9mIHRoZSBjb25maXJtIGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgKi9cbiAgQElucHV0KCkgcmV2ZXJzZUJ1dHRvbk9yZGVyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIHNob3VsZCBzdGF5IG9wZW4gZXZlbiB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgaXRcbiAgICovXG4gIEBJbnB1dCgpIGNsb3NlT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcG9wb3ZlcjogQ29tcG9uZW50UmVmPENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogUG9zaXRpb25pbmcsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgIGlmIChjaGFuZ2VzLmlzT3Blbi5jdXJyZW50VmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5zaG93UG9wb3ZlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQ29uZmlybShldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KSB7XG4gICAgdGhpcy5jb25maXJtLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG9uQ2FuY2VsKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpIHtcbiAgICB0aGlzLmNhbmNlbC5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHRvZ2dsZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIpIHtcbiAgICAgIHRoaXMuc2hvd1BvcG92ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNsb3NlT25PdXRzaWRlQ2xpY2sgPSB0eXBlb2YgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrICE9PSAndW5kZWZpbmVkJyA/IFxuICAgICAgdGhpcy5jbG9zZU9uT3V0c2lkZUNsaWNrIDogdGhpcy5kZWZhdWx0T3B0aW9ucy5jbG9zZU9uT3V0c2lkZUNsaWNrO1xuICAgIGlmIChcbiAgICAgIHRoaXMucG9wb3ZlciAmJlxuICAgICAgIXRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgIXRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIGNsb3NlT25PdXRzaWRlQ2xpY2tcbiAgICApIHtcbiAgICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dQb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIHdvcmsgYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9pc3N1ZXMvNjVcbiAgICAgIC8vIG90aGVyd2lzZSB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgZ2V0cyBmaXJlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnRcbiAgICAgIC8vIHRoYXQgdHJpZ2dlcmVkIHRoZSBwb3BvdmVyIHRvIG9wZW4gKG5vIGlkZWEgd2h5IHRoaXMgaXMgc28pXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAndG91Y2hlbmQnLCAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICAgICAgdGhpcy5vbkRvY3VtZW50Q2xpY2soZXZlbnQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbignd2luZG93JywgJ3Jlc2l6ZScsICgpID0+IHRoaXMucG9zaXRpb25Qb3BvdmVyKCkpXG4gICAgICAgIF07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucygpO1xuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB0aGlzLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgIG9uQ29uZmlybTogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ29uZmlybShldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMub25DYW5jZWwoZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFmdGVyVmlld0luaXQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uUG9wb3ZlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb3B0aW9uYWxQYXJhbXM6IEFycmF5PGtleW9mIENvbmZpcm1hdGlvblBvcG92ZXJEaXJlY3RpdmU+ID0gW1xuICAgICAgICAnY29uZmlybVRleHQnLFxuICAgICAgICAnY2FuY2VsVGV4dCcsXG4gICAgICAgICdwbGFjZW1lbnQnLFxuICAgICAgICAnY29uZmlybUJ1dHRvblR5cGUnLFxuICAgICAgICAnY2FuY2VsQnV0dG9uVHlwZScsXG4gICAgICAgICdmb2N1c0J1dHRvbicsXG4gICAgICAgICdoaWRlQ29uZmlybUJ1dHRvbicsXG4gICAgICAgICdoaWRlQ2FuY2VsQnV0dG9uJyxcbiAgICAgICAgJ3BvcG92ZXJDbGFzcycsXG4gICAgICAgICdhcHBlbmRUb0JvZHknLFxuICAgICAgICAnY3VzdG9tVGVtcGxhdGUnLFxuICAgICAgICAncmV2ZXJzZUJ1dHRvbk9yZGVyJyxcbiAgICAgICAgJ3BvcG92ZXJUaXRsZScsXG4gICAgICAgICdwb3BvdmVyTWVzc2FnZSdcbiAgICAgIF07XG4gICAgICBvcHRpb25hbFBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3BhcmFtXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAob3B0aW9ucyBhcyBhbnkpW3BhcmFtXSA9IHRoaXNbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxcbiAgICAgICAgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudFxuICAgICAgPiA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQpO1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZShcbiAgICAgICAgW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zLFxuICAgICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnNcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5wYXJlbnRJbmplY3RvclxuICAgICAgKTtcbiAgICAgIHRoaXMucG9wb3ZlciA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnksXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5sZW5ndGgsXG4gICAgICAgIGNoaWxkSW5qZWN0b3JcbiAgICAgICk7XG4gICAgICBpZiAob3B0aW9ucy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Qb3BvdmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBvcG92ZXIpIHtcbiAgICAgIGNvbnN0IHBvcG92ZXJFbGVtZW50ID0gdGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgICBjb25zdCBwb3BvdmVyUG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHBvcG92ZXJFbGVtZW50LFxuICAgICAgICB0aGlzLnBsYWNlbWVudCB8fCB0aGlzLmRlZmF1bHRPcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgfHwgdGhpcy5kZWZhdWx0T3B0aW9ucy5hcHBlbmRUb0JvZHlcbiAgICAgICk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHBvcG92ZXJFbGVtZW50LCAndG9wJywgYCR7cG9wb3ZlclBvc2l0aW9uLnRvcH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgcG9wb3ZlckVsZW1lbnQsXG4gICAgICAgICdsZWZ0JyxcbiAgICAgICAgYCR7cG9wb3ZlclBvc2l0aW9uLmxlZnR9cHhgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlkZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlcikge1xuICAgICAgdGhpcy5wb3BvdmVyLmRlc3Ryb3koKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnBvcG92ZXI7XG4gICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==