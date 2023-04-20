import React, { useState } from "react";
export default function Footer() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const thisYear = new Date().getFullYear();
  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(getTime, 1000);
  return (
    <footer>
      <p>
        Copyright &copy; {thisYear} | {time}
      </p>
    </footer>
  );
}
