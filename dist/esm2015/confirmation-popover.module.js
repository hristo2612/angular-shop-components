/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Positioning } from 'positioning';
import { ConfirmationPopoverDirective } from './confirmation-popover.directive';
import { ConfirmationPopoverWindowComponent } from './confirmation-popover-window.component';
import { FocusDirective } from './focus.directive';
import { ConfirmationPopoverOptions } from './confirmation-popover-options.provider';
export const /** @type {?} */ USER_OPTIONS = new InjectionToken('confirmation popover user options');
/**
 * @param {?} userOptions
 * @return {?}
 */
export function optionsFactory(userOptions) {
    const /** @type {?} */ options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
export class ConfirmationPopoverModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = {}) {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXBvcG92ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zaG9wLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb25maXJtYXRpb24tcG9wb3Zlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUNMLDBCQUEwQixFQUUzQixNQUFNLHlDQUF5QyxDQUFDO0FBRWpELE1BQU0sQ0FBQyx1QkFBTSxZQUFZLEdBQTJCLElBQUksY0FBYyxDQUNwRSxtQ0FBbUMsQ0FDcEMsQ0FBQzs7Ozs7QUFFRixNQUFNLHlCQUNKLFdBQXVDO0lBRXZDLHVCQUFNLE9BQU8sR0FBK0IsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0lBQzdFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Q0FDaEI7QUFZRCxNQUFNOzs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPLENBQ1osVUFBK0MsRUFBRTtRQUVqRCxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLFVBQVUsRUFBRSxjQUFjO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3JCO2dCQUNELFdBQVc7YUFDWjtTQUNGLENBQUM7S0FDSDs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osNEJBQTRCO29CQUM1QixrQ0FBa0M7b0JBQ2xDLGNBQWM7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxjQUFjLENBQUM7Z0JBQ3ZELGVBQWUsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9zaXRpb25pbmcgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zLFxuICBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZVxufSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnY29uZmlybWF0aW9uIHBvcG92ZXIgdXNlciBvcHRpb25zJ1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbnNGYWN0b3J5KFxuICB1c2VyT3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNcbik6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIHtcbiAgY29uc3Qgb3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMgPSBuZXcgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMoKTtcbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlLFxuICAgIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQsXG4gICAgRm9jdXNEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlLCBGb2N1c0RpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZSA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBvcHRpb25zRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbVVNFUl9PUFRJT05TXVxuICAgICAgICB9LFxuICAgICAgICBQb3NpdGlvbmluZ1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==