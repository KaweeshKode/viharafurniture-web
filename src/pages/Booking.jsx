import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  // State for the calendar view (tracks which month is currently visible)
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // State for the actual selected value
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const consultant = {
    name: "Dr. A. Perera",
    position: "Senior Interior Consultant",
    description:
      "Over 15 years of experience in transforming living spaces. specialized in modern and traditional Sri Lankan architectural blends. I help you choose the right furniture that fits your lifestyle and budget.",
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "04:00 PM",
  ];

  // --- CALENDAR LOGIC ---

  const months = [
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

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    // Standard JS getDay(): 0=Sun, 1=Mon...
    // We want 0=Mon, 1=Tue... to match your "Mo Tu We" header
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const changeMonth = (offset) => {
    const newDate = new Date(
      currentMonth.setMonth(currentMonth.getMonth() + offset)
    );
    setCurrentMonth(new Date(newDate));
  };

  const isDateDisabled = (day) => {
    const today = new Date();
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    // Reset hours for accurate comparison
    today.setHours(0, 0, 0, 0);
    checkDate.setHours(0, 0, 0, 0);

    return checkDate < today;
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleDateClick = (day) => {
    const newSelectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(newSelectedDate);
  };

  const renderCalendar = () => {
    const totalDays = getDaysInMonth(currentMonth);
    const startDay = getFirstDayOfMonth(currentMonth);
    const daysArray = [];

    // Add empty slots for days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      daysArray.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Add actual days
    for (let day = 1; day <= totalDays; day++) {
      const isDisabled = isDateDisabled(day);
      const currentDateObj = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isSelected = isSameDay(currentDateObj, selectedDate);

      daysArray.push(
        <button
          key={day}
          className={`calendar-day ${isSelected ? "selected" : ""} ${
            isDisabled ? "disabled" : ""
          }`}
          onClick={() => !isDisabled && handleDateClick(day)}
          disabled={isDisabled}
        >
          {day}
        </button>
      );
    }

    return <div className="calendar-grid">{daysArray}</div>;
  };

  // --- SUBMISSION LOGIC ---

  const handleBookNow = () => {
    if (selectedDate && selectedTime) {
      setShowConfirm(true);
    } else {
      alert("Please select both a date and a time.");
    }
  };

  const confirmBooking = () => {
    setShowConfirm(false);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 3000);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="consultant-header">
          <div className="consultant-avatar">
            <div className="avatar-circle"></div>
          </div>
          <div className="consultant-info">
            <h1>{consultant.name}</h1>
            <h2>{consultant.position}</h2>
            <div className="description-box">
              <p>{consultant.description}</p>
            </div>
          </div>
        </div>

        <div className="selection-container">
          {/* Calendar Section */}
          <div className="selection-box">
            <div
              className="calendar-header-controls"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <button
                onClick={() => changeMonth(-1)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                &lt;
              </button>
              <h3 style={{ margin: 0 }}>
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={() => changeMonth(1)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                &gt;
              </button>
            </div>

            <div className="calendar-wrapper">
              <div className="calendar-header-row">
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>Su</span>
              </div>
              {renderCalendar()}
            </div>
          </div>

          {/* Time Section */}
          <div className="selection-box">
            <h3>Available Time</h3>
            <div className="time-grid">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  className={`time-slot ${
                    selectedTime === time ? "selected" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="action-area">
          <button className="book-now-main-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h2>Booking Confirmation</h2>
            <p>Are you sure you want to book this session?</p>
            <div className="modal-details">
              <small>
                Date: {selectedDate ? selectedDate.toDateString() : ""} | Time:{" "}
                {selectedTime}
              </small>
            </div>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmBooking}>
                Yes
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {bookingSuccess && (
        <div className="success-notification">
          Booking Confirmed Successfully!
        </div>
      )}
    </div>
  );
};

export default Booking;
