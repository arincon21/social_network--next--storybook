export interface FriendSuggestion {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
  mutualFriendsList?: string[];
  isOnline?: boolean;
  lastSeen?: string;
  commonInterests?: string[];
}

export const friendSuggestionsData: FriendSuggestion[] = [
  {
    id: '1',
    name: 'Ana García',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 5,
    mutualFriendsList: ['María López', 'Carlos Ruiz', 'Elena Martín'],
    isOnline: true,
    commonInterests: ['Fotografía', 'Viajes', 'Música'],
  },
  {
    id: '2',
    name: 'Pedro Sánchez',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 3,
    mutualFriendsList: ['Juan Pérez', 'Laura Gómez'],
    isOnline: false,
    lastSeen: 'hace 2 horas',
    commonInterests: ['Deportes', 'Tecnología'],
  },
  {
    id: '3',
    name: 'Carmen Rodríguez',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 8,
    mutualFriendsList: ['Ana García', 'María López', 'Carlos Ruiz', 'Elena Martín', 'Juan Pérez'],
    isOnline: true,
    commonInterests: ['Cocina', 'Arte', 'Libros'],
  },
  {
    id: '4',
    name: 'Miguel Torres',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 2,
    mutualFriendsList: ['Laura Gómez', 'Carlos Ruiz'],
    isOnline: false,
    lastSeen: 'hace 1 día',
    commonInterests: ['Videojuegos', 'Películas'],
  },
  {
    id: '5',
    name: 'Isabel Fernández',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 4,
    mutualFriendsList: ['Ana García', 'Pedro Sánchez', 'María López'],
    isOnline: true,
    commonInterests: ['Yoga', 'Medicina natural', 'Fotografía'],
  },
  {
    id: '6',
    name: 'Roberto Díaz',
    avatar: '/assets/images/avatar-placeholder.png',
    mutualFriends: 6,
    mutualFriendsList: ['Carlos Ruiz', 'Elena Martín', 'Juan Pérez', 'Laura Gómez', 'Pedro Sánchez'],
    isOnline: false,
    lastSeen: 'hace 30 minutos',
    commonInterests: ['Programación', 'Inteligencia Artificial', 'Tecnología'],
  },
];

export default friendSuggestionsData;