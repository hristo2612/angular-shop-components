/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
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
export { FocusDirective };
function FocusDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    FocusDirective.prototype.mwlFocus;
    /** @type {?} */
    FocusDirective.prototype.elm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJmb2N1cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFXckIsd0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0tBQUk7Ozs7O0lBRXZDLG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQztLQUNGOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVpDLFVBQVU7OzsyQkFjVCxLQUFLOzt5QkFoQlI7O1NBZWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgUmVuZGVyZXIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQSBoZWxwZXIgZGlyZWN0aXZlIHRvIGZvY3VzIGJ1dHRvbnMuIFlvdSB3aWxsIG9ubHkgbmVlZCB0aGlzIGlmIHVzaW5nIGEgY3VzdG9tIHRlbXBsYXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xGb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbXdsRm9jdXM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm13bEZvY3VzICYmIHRoaXMubXdsRm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==