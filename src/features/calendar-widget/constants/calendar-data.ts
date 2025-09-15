export interface Activity {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO date string
  time?: string; // HH:MM format
  type: 'meeting' | 'event' | 'reminder' | 'task';
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
}

export const sampleActivities: Activity[] = [
  {
    id: '1',
    title: 'Reunión de equipo',
    description: 'Revisar progreso del proyecto',
    date: '2025-09-15',
    time: '10:00',
    type: 'meeting',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Cumpleaños de Ana',
    description: 'Recordar enviar felicitación',
    date: '2025-09-16',
    type: 'event',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Entregar reporte mensual',
    date: '2025-09-17',
    time: '17:00',
    type: 'task',
    priority: 'high',
  },
  {
    id: '4',
    title: 'Llamada con cliente',
    description: 'Discutir nuevos requerimientos',
    date: '2025-09-18',
    time: '14:30',
    type: 'meeting',
    priority: 'medium',
  },
  {
    id: '5',
    title: 'Revisar correos',
    date: '2025-09-15',
    type: 'reminder',
    priority: 'low',
  },
];

export const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const dayNames = [
  'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
];