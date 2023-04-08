import { Pipe, PipeTransform } from '@angular/core'
import { Subject } from '../models/subject/subject'
@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(items: Subject[], searchText: string, semestersCheckboxes: any) {
        if(!items){
            return []
        }
        if(!searchText){
            return items
        }
        
        searchText = searchText.toLowerCase()
        return items.filter(it => {
            return it.asignatura?.toLowerCase().includes(searchText)
        })
    }
}