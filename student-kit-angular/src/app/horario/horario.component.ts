import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent {
  buttonToggle: boolean = false;

  calendarOptions: CalendarOptions = {
    initialView: 'daysFiveweek',
    contentHeight: 'auto',
    dayHeaderFormat: {
      weekday: 'long'
    },
    views: {
      daysFiveweek: {
        duration: {weeks: 1},
        type: 'timeGrid',
        slotMinTime: '8:30',
        slotMaxTime: '15:30',
        slotDuration: '01:00:00',
        weekday: 'long',
        allDaySlot: false,
        slotLabelFormat: {
          hour: "2-digit",
          minute: "2-digit",
          omitZeroMinute: true,
          hour12: false

        }
      }
    },
    headerToolbar: {
      start:'',
      center: '',
      end: ''
    },
    weekends: false,// initial value
    plugins: [timeGridPlugin, dayGridPlugin, bootstrap5Plugin]

  };



  toggleMenu(){
    this.buttonToggle = !this.buttonToggle
  }




}
