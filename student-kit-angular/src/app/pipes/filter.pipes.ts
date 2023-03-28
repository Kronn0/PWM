import { Pipe, PipeTransform } from '@angular/core'
import { subject } from '../services/get-subjects-service.service'

@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(items: subject[], searchText: string) {
        if(!items){
            return []
        }
        if(!searchText){
            return items
        }
        searchText = searchText.toLowerCase()
        return items.filter(it => {
            return it.asignatura.toLowerCase().includes(searchText)
        })
    }
}