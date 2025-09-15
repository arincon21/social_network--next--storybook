import { BirthdayCard } from "@/features/birthday-card";
import { CalendarWidget } from "@/features/calendar-widget";
import { FriendSuggestions } from "@/features/friend-suggestions";
import { Navbar } from "@/features/navbar-top";
import { NewsFeed } from "@/features/news-feed";
import { SidebarLeft } from "@/features/sidebar-left";
import { SidebarRight } from "@/features/sidebar-right";
import { SocialPost } from "@/features/social-post";
import { WeatherForecast } from "@/features/weather-chart";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <div className="pt-[110px] transition-all duration-300 flex justify-center">
        <main className="w-full max-w-[1300px] flex flex-row">
          
          {/* Columna Izquierda */}
          <aside className="w-[325px] px-[15px] gap-[30px] flex flex-col">
            <WeatherForecast/>
            <CalendarWidget/>
          </aside>

          {/* Columna Central */}
          <section className="flex-1 px-[15px]">
            <SocialPost/>
            <NewsFeed/>
          </section>

          {/* Columna Derecha */}
          <aside className="w-[325px] px-[15px] flex flex-col gap-[30px]">
            <BirthdayCard/>
            <FriendSuggestions/>
          </aside>

        </main>
      </div>
    </>
  );
}
