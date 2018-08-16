import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyfilterPipe implements PipeTransform {
    transform(items: any[], myfilter: (item: any) => boolean): any {
        if (!items || !myfilter) {
            return items;
        }
        return items.filter(item => myfilter(item));
    }
}
