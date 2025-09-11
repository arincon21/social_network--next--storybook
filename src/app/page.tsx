import Navbar from "@/features/navbar-top/components/navbar-top";
import SidebarLeft from "@/features/sidebar-left/components/sidebar-left";
import SidebarRight from "@/features/sidebar-right/components/sidebar-right";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <div className="pt-[110px] transition-all duration-300 flex justify-center">
        <main className="w-full max-w-[1300px] flex flex-row">
          
          {/* Columna Izquierda */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px] border">
            Columna Izquierda
          </aside>

          {/* Columna Central */}
          <section className="flex-1 min-w-0 px-[15px] border">
            Columna Central
          </section>

          {/* Columna Derecha */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px] border">
            Columna Derecha
          </aside>

        </main>
      </div>
    </>
  );
}
