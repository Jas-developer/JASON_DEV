"use client";

import React, { useState } from "react";

export default function CalendarIcon() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysInMonth = (month: any, year: any) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: any, year: any) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(
      selectedDate.getMonth(),
      selectedDate.getFullYear()
    );
    const startingDay = firstDayOfMonth(
      selectedDate.getMonth(),
      selectedDate.getFullYear()
    );

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      days.push(
        <div
          key={`day-${day}`}
          className="h-10 w-10 flex justify-center items-center cursor-pointer"
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    setSelectedDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    setSelectedDate(nextMonth);
  };

  const handleDateClick = (day: any) => {
    const selectedDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    setSelectedDate(selectedDay);
    // You can perform any actions when a date is clicked
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="px-2 py-1 rounded dark:bg-gray-900 hover:bg-gray-300"
          onClick={handlePrevMonth}
        >
          &lt;
        </button>
        <h2 className="text-xl font-bold">{`${
          monthNames[selectedDate.getMonth()]
        } ${selectedDate.getFullYear()}`}</h2>
        <button
          className="px-2 py-1 rounded dark:bg-gray-900 hover:bg-gray-300"
          onClick={handleNextMonth}
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="h-10 w-10 flex justify-center items-center font-semibold"
          >
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}
