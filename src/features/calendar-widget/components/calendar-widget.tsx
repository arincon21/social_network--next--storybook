'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Calendar, Plus } from 'lucide-react';
import { useCalendar } from '../hooks/use-calendar';
import { monthNames, dayNames } from '../constants/calendar-data';

const CalendarWidget = () => {
  const {
    currentDate,
    calendarDays,
    getActivitiesForDate,
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
    isToday,
    isCurrentMonth,
  } = useCalendar();

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-800">Calendario</h3>
        </div>
        <button
          onClick={goToToday}
          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          Hoy
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Mes anterior"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <div className="text-center">
          <div className="text-sm font-medium text-gray-800">
            {currentMonth} {currentYear}
          </div>
        </div>

        <button
          onClick={goToNextMonth}
          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Mes siguiente"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day, index) => (
          <div
            key={day}
            className="text-center text-xs font-medium text-gray-500 py-1"
          >
            {index === 0 ? 'D' : day.charAt(0)}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {calendarDays.map((date, index) => {
          const activities = getActivitiesForDate(date);
          const hasActivities = activities.length > 0;
          const isCurrentDay = isToday(date);
          const isInCurrentMonth = isCurrentMonth(date);

          return (
            <div
              key={index}
              className={`
                relative min-h-[32px] p-1 text-center text-sm cursor-pointer
                hover:bg-gray-50 rounded-md transition-colors
                ${isCurrentDay ? 'bg-blue-100 text-blue-600 font-semibold' : ''}
                ${!isInCurrentMonth ? 'text-gray-400' : 'text-gray-700'}
              `}
            >
              <span className="block">{date.getDate()}</span>

              {/* Activity indicators */}
              {hasActivities && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-0.5">
                    {activities.slice(0, 3).map((activity, idx) => (
                      <div
                        key={activity.id}
                        className={`
                          w-1 h-1 rounded-full
                          ${activity.type === 'meeting' ? 'bg-red-400' :
                            activity.type === 'event' ? 'bg-green-400' :
                            activity.type === 'task' ? 'bg-yellow-400' : 'bg-blue-400'}
                        `}
                        title={activity.title}
                      />
                    ))}
                    {activities.length > 3 && (
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Activities List */}
      <div className="border-t border-gray-200 pt-3">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-700">Actividades de Hoy</h4>
          <button
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Agregar actividad"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="space-y-2 max-h-32 overflow-y-auto">
          {getActivitiesForDate(new Date()).length > 0 ? (
            getActivitiesForDate(new Date()).map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-2 p-2 bg-gray-50 rounded-md"
              >
                <div
                  className={`
                    w-2 h-2 rounded-full mt-1.5 flex-shrink-0
                    ${activity.type === 'meeting' ? 'bg-red-400' :
                      activity.type === 'event' ? 'bg-green-400' :
                      activity.type === 'task' ? 'bg-yellow-400' : 'bg-blue-400'}
                  `}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-gray-800 truncate">
                    {activity.title}
                  </div>
                  {activity.time && (
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-xs text-gray-500 text-center py-2">
              No hay actividades programadas para hoy
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;