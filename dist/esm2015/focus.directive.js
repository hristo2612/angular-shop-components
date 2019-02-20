/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
export class FocusDirective {
    /**
     * @param {?} elm
     */
    constructor(elm) {
        this.elm = elm;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["mwlFocus"] && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlFocus]'
            },] },
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
FocusDirective.propDecorators = {
    mwlFocus: [{ type: Input }]
};
function FocusDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FocusDirective.prototype.mwlFocus;
    /** @type {?} */
    FocusDirective.prototype.elm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJmb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQzs7OztBQVF2QixNQUFNOzs7O0lBR0osWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7S0FBSTs7Ozs7SUFFdkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sZ0JBQWEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVpDLFVBQVU7Ozt1QkFjVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGhlbHBlciBkaXJlY3RpdmUgdG8gZm9jdXMgYnV0dG9ucy4gWW91IHdpbGwgb25seSBuZWVkIHRoaXMgaWYgdXNpbmcgYSBjdXN0b20gdGVtcGxhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bEZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtd2xGb2N1czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsbTogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubXdsRm9jdXMgJiYgdGhpcy5td2xGb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIl19