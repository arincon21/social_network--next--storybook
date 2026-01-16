// Example usage of the VirtualizedList component
import VirtualizedList from './virtualized-list';

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`
}));

export default function VirtualizedListExample() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Virtualized User List</h2>
      <VirtualizedList
        items={users}
        height={400}
        itemHeight={60}
        className="border rounded-lg"
        renderItem={(user) => (
          <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex-1">
              <div className="font-medium text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
            <div className="text-xs text-gray-400">#{user.id}</div>
          </div>
        )}
      />
    </div>
  );
}
