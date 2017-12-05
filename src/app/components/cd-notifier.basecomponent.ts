import { AfterViewChecked, ElementRef, NgZone } from '@angular/core';

export abstract class ChangeDetectionNotifierBaseComponent implements AfterViewChecked {
    constructor(private zone: NgZone, private elementRef: ElementRef) {

    }

    ngAfterViewChecked(): void {
        const element = this.elementRef.nativeElement;
        this.zone.runOutsideAngular(() => {
            element.classList.add('cd-inprogress');

            setTimeout(() => {
                element.classList.remove('cd-inprogress');
            }, 700);
        });
    }
}
