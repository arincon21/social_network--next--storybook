export interface Story {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    imageUrl: string;
    timestamp: Date;
    viewed: boolean;
}

export type StoriesData = Story[];
