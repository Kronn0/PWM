import { Pipe, PipeTransform } from '@angular/core'
import { subject } from '../services/getSubjects/get-subjects-service.service'

@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(items: subject[], searchText: string, semestersCheckboxes: {name: string, label: string, isChecked: boolean}[]) {
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