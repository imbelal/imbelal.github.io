import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Pipe({
    name: 'byPassSecurity'
})
export class ByPassSecurityPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}

    transform (value: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
}