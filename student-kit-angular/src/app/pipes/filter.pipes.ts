import { Pipe, PipeTransform } from '@angular/core'
import { subject } from '../services/get-subjects-service.service'

@Pipe({name: 'appFilter'})
export class FilterPipe implements PipeTransform{
    transform(items: subject[], searchText: string, semestersCheckboxes: {name: string, label: string, isChecked: boolean}[]) {
        if(!items){
            return []
        }
        if(!searchText){
            return items
        }

        items = items.filter(it => {
            let matchSemester
            semestersCheckboxes.forEach(semester => {
                if(semester.isChecked){
                    matchSemester = it.duracion === semester.label
                }
            })
            return matchSemester
        })
        return items
            
    }
}