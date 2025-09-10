export type Friend = {
  id: string;
  name: string;
  status: string;
  avatar?: string;
  presence?: "online" | "away" | "offline" | "invisible";
};

export const sampleSections: { title: string; friends: Friend[] }[] = [
  {
    title: "AMIGOS CERCANOS",
    friends: [
      { id: "1", name: "Carol Summers", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "2", name: "Mathilda Brinker", status: "¡EN EL TRABAJO!", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "3", name: "Michael Maximoff", status: "AUSENTE", avatar: "https://placehold.co/48x48", presence: "away" },
      { id: "4", name: "Rachel Howlett", status: "DESCONECTADO", avatar: "https://placehold.co/48x48", presence: "offline" },
    ],
  },
  {
    title: "MI FAMILIA",
    friends: [{ id: "5", name: "Sarah Hetfield", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" }],
  },
  {
    title: "SIN CATEGORÍA",
    friends: [
      { id: "6", name: "Bruce Peterson", status: "EN LÍNEA", avatar: "https://placehold.co/48x48", presence: "online" },
      { id: "7", name: "Chris Greyson", status: "AUSENTE", avatar: "https://placehold.co/48x48", presence: "away" },
      { id: "8", name: "Nicholas Grisom", status: "INVISIBLE", avatar: "https://placehold.co/48x48", presence: "invisible" },
    ],
  },
];

export default sampleSections;
