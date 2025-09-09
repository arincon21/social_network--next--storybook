import Navbar from "@/components/layouts/Navbar";
import SidebarLeft from "@/components/layouts/sidebar-left";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-5">
      <Navbar />
      <SidebarLeft/>
    </div>
  );
}
