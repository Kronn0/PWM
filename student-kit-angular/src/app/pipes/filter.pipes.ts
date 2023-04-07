import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        
    }
}