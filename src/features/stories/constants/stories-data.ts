import { StoriesData } from '../types/stories-types';

// Function to generate stories data with relative timestamps
export const getStoriesData = (): StoriesData => {
    const now = Date.now();

    return [
        {
            id: '1',
            userId: 'user1',
            userName: 'Sarah Johnson',
            userAvatar: 'https://i.pravatar.cc/150?img=1',
            imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 30), // 30 minutes ago
            viewed: false,
        },
        {
            id: '2',
            userId: 'user2',
            userName: 'Michael Chen',
            userAvatar: 'https://i.pravatar.cc/150?img=12',
            imageUrl: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 45), // 45 minutes ago
            viewed: false,
        },
        {
            id: '3',
            userId: 'user3',
            userName: 'Emma Wilson',
            userAvatar: 'https://i.pravatar.cc/150?img=5',
            imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 60), // 1 hour ago
            viewed: false,
        },
        {
            id: '4',
            userId: 'user4',
            userName: 'James Rodriguez',
            userAvatar: 'https://i.pravatar.cc/150?img=13',
            imageUrl: 'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 90), // 1.5 hours ago
            viewed: false,
        },
        {
            id: '5',
            userId: 'user5',
            userName: 'Olivia Martinez',
            userAvatar: 'https://i.pravatar.cc/150?img=9',
            imageUrl: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 120), // 2 hours ago
            viewed: false,
        },
        {
            id: '6',
            userId: 'user6',
            userName: 'David Kim',
            userAvatar: 'https://i.pravatar.cc/150?img=14',
            imageUrl: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 180), // 3 hours ago
            viewed: false,
        },
        {
            id: '7',
            userId: 'user7',
            userName: 'Sophia Anderson',
            userAvatar: 'https://i.pravatar.cc/150?img=10',
            imageUrl: 'https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 240), // 4 hours ago
            viewed: false,
        },
        {
            id: '8',
            userId: 'user8',
            userName: 'Alexander Brown',
            userAvatar: 'https://i.pravatar.cc/150?img=15',
            imageUrl: 'https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?w=800&h=1200&fit=crop',
            timestamp: new Date(now - 1000 * 60 * 300), // 5 hours ago
            viewed: false,
        },
    ];
};
