import React, { useState } from "react";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const generateCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();

    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    const calendar = [];

    let dayOfWeek = 0;
    let week = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      week.push(<td key={dayOfWeek}></td>);
      dayOfWeek++;
    }

    for (let i = 1; i <= daysInMonth; i++) {
      week.push(<td key={dayOfWeek}>{i}</td>);
      dayOfWeek++;

      if (dayOfWeek === 7) {
        calendar.push(<tr key={i}>{week}</tr>);
        week = [];
        dayOfWeek = 0;
      }
    }

    if (week.length > 0) {
      for (let i = dayOfWeek; i < 7; i++) {
        week.push(<td key={i}></td>);
      }
      calendar.push(<tr key={daysInMonth + 1}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <h2>Calendar</h2>
      <input type="month" value={selectedDate.toISOString().slice(0, 7)} onChange={handleChange} />
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
}

export default Calendar;
