export interface Comment {
  id: number;
  author: { name: string; avatar: string };
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
}

export interface Post {
  id: number;
  author: { name: string; avatar: string };
  timeAgo: string;
  content: string;
  image?: string;
  likes: { count: number; users: string[]; isLiked: boolean };
  comments: number;
  shares: number;
  commentsList?: Comment[];
}

export const initialPosts: Post[] = [
  {
    id: 1,
    author: { name: 'Elaine Dreyfuss', avatar: '/assets/images/avatar-placeholder.png' },
    timeAgo: 'hace 9 horas',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.',
    image: '/assets/images/post-placeholder.png',
    likes: { count: 24, users: ['Tú', 'Elaine'], isLiked: false },
    comments: 17,
    shares: 24,
    commentsList: [
      {
        id: 1,
        author: { name: 'James Spiegel', avatar: '/assets/images/avatar-placeholder.png' },
        content: '¡Buena publicación! Estoy de acuerdo con la mayor parte de esto.',
        timeAgo: 'hace 2 horas',
        likes: 2,
        isLiked: false,
      },
      {
        id: 2,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
      {
        id: 3,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
      {
        id: 4,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
      {
        id: 5,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
      {
        id: 6,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
      {
        id: 7,
        author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Buen punto, gracias por compartir.',
        timeAgo: 'hace 1 hora',
        likes: 1,
        isLiked: false,
      },
    ],
  },
  {
    id: 2,
    author: { name: 'James Spiegel', avatar: '/assets/images/avatar-placeholder.png' },
    timeAgo: 'hace 38 minutos',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.',
    likes: { count: 3, users: [], isLiked: false },
    comments: 3,
    shares: 0,
    commentsList: [
      {
        id: 3,
        author: { name: 'Elaine Dreyfuss', avatar: '/assets/images/avatar-placeholder.png' },
        content: 'Respuesta',
        timeAgo: 'hace 30 minutos',
        likes: 0,
        isLiked: false,
      },
    ],
  },
  {
    id: 3,
    author: { name: 'Mathilda Brinker', avatar: '/assets/images/avatar-placeholder.png' },
    timeAgo: 'hace 1 hora',
    content:
      'Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    likes: { count: 8, users: [], isLiked: false },
    comments: 0,
    shares: 0,
  },
];