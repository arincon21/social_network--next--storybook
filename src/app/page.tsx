"use client";
import { BirthdayCard } from "@/features/birthday-card";
import { CalendarWidget } from "@/features/calendar-widget";
import { FriendSuggestions } from "@/features/friend-suggestions";
import { Navbar } from "@/features/navbar-top";
import { NewsFeed } from "@/features/news-feed";
import { SidebarLeft } from "@/features/sidebar-left";
import { SidebarRight } from "@/features/sidebar-right";
import { SocialPost } from "@/features/social-post";
import { WeatherForecast } from "@/features/weather-chart";
import { motion } from "framer-motion";
import ScrollToTopButton from "@/shared/components/scroll-to-top-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <div className="pt-[110px] transition-all duration-300 flex justify-center">
        <motion.main
          className="w-full max-w-[1300px] flex flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Columna Izquierda */}
          <motion.aside
            className="w-[325px] px-[15px] gap-[30px] flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <WeatherForecast />
            <CalendarWidget />
          </motion.aside>

          {/* Columna Central */}
          <motion.section
            className="flex-1 px-[15px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialPost />
            <NewsFeed />
          </motion.section>

          {/* Columna Derecha */}
          <motion.aside
            className="w-[325px] px-[15px] flex flex-col gap-[30px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <BirthdayCard />
            <FriendSuggestions />
          </motion.aside>
        </motion.main>
      </div>
      <ScrollToTopButton />
    </>
  );
}
