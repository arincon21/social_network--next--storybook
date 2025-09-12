import BirthdayCard from "@/features/birthday-card/components/birthday-card";
import Navbar from "@/features/navbar-top/components/navbar-top";
import SidebarLeft from "@/features/sidebar-left/components/sidebar-left";
import SidebarRight from "@/features/sidebar-right/components/sidebar-right";
import SocialPost from "@/features/social-post/components/social-post";
import WeatherForecast from "@/features/weather-chart/components/weather-chart";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <div className="pt-[110px] transition-all duration-300 flex justify-center">
        <main className="w-full max-w-[1300px] flex flex-row">
          
          {/* Columna Izquierda */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px]">
            <WeatherForecast/>
          </aside>

          {/* Columna Central */}
          <section className="flex-1 min-w-0 px-[15px]">
            <SocialPost/>
          </section>

          {/* Columna Derecha */}
          <aside className="w-[325px] shrink-0 hidden lg:block px-[15px]">
            <BirthdayCard/>
          </aside>

        </main>
      </div>
    </>
  );
}
