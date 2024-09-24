import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import the FullCalendar module
import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // Plugin para la vista de cuadrícula

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {

  calendarOptions: CalendarOptions;

  constructor() {
    this.loadSavedTurnos();

    this.calendarOptions = {
      plugins: [interactionPlugin, dayGridPlugin],  
      initialView: 'dayGridMonth',
      selectable: true,
      editable: true,
      events: this.loadSavedTurnos(),     
      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),  // Maneja los clics en eventos
    };
  }
  
  // Manejador para añadir nuevos turnos al hacer clic en una fecha
  handleDateClick(arg: any) {
    const title = prompt('Introduce un nombre para el turno:');
    if (title) {
      const newEvent = { title: title, start: arg.dateStr };
      const currentEvents = this.loadSavedTurnos();
      currentEvents.push(newEvent);
      this.saveTurnos(currentEvents);
      this.calendarOptions.events = [...currentEvents]; 
    }
  }

  // Manejador para clic en eventos (para editar o eliminar)
  handleEventClick(clickInfo: any) {
    const action = prompt('Escribe "editar" para modificar o "eliminar" para borrar el turno:');

    if (action === 'editar') {
      const newTitle = prompt('Introduce un nuevo nombre para el turno:', clickInfo.event.title);
      if (newTitle) {
        clickInfo.event.setProp('title', newTitle);
        this.updateEvent(clickInfo.event); // Actualiza el evento en localStorage
      }
    } else if (action === 'eliminar') {
      if (confirm(`¿Deseas eliminar el turno: "${clickInfo.event.title}"?`)) {
        clickInfo.event.remove();  // Remueve el evento visualmente
        this.removeEvent(clickInfo.event);  // Lo elimina del localStorage
      }
    }
  }

  // Carga los turnos desde el localStorage
  loadSavedTurnos() {
    const savedTurnos = localStorage.getItem('turnos');
    return savedTurnos ? JSON.parse(savedTurnos) : [];
  }

  // Guarda los turnos en el localStorage
  saveTurnos(turnos: any) {
    localStorage.setItem('turnos', JSON.stringify(turnos));
  }

  // Actualiza un turno (evento) existente en localStorage
  updateEvent(updatedEvent: any) {
    const currentEvents = this.loadSavedTurnos();
    const eventIndex = currentEvents.findIndex((event: any) => 
      event.start === updatedEvent.startStr && event.title === updatedEvent.oldTitle
    );
    if (eventIndex !== -1) {
      currentEvents[eventIndex].title = updatedEvent.title;  // Actualiza el título del evento
      this.saveTurnos(currentEvents);
    }
  }

  // Elimina un turno (evento) del localStorage
  removeEvent(eventToRemove: any) {
    const currentEvents = this.loadSavedTurnos();
    const updatedEvents = currentEvents.filter((event: any) => 
      event.start !== eventToRemove.startStr || event.title !== eventToRemove.title
    );
    this.saveTurnos(updatedEvents); // Guarda los eventos actualizados
  }
}
