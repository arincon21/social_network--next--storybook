import SidebarLeft from "@/components/layouts/sidebar-left";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-5">
      <Card>
        <p>This is the card content.</p>
      </Card>
      <Button variant="secondary" size="md">Click Me</Button>
      <Button variant="primary" size="md">Click Me</Button>
      <Icon name="olymp-logout-icon" className="w-5 h-5 text-gray-600" />

      <SidebarLeft/>
    </div>
  );
}
