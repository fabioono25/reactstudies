import React, { useEffect } from "react";

const FormatDate = ({date, date2}) => {
  const [formatted, setFormatted] = React.useState("");

  useEffect(() => {
    setFormatted(new Date(date).toLocaleDateString());
  } , [date]);

  // better way of doing it, without useEffect. This is a better way of doing it.
  const formatted2 = new Date(date2).toLocaleDateString();

  return (
    <div>
      <div>Formatted date: {formatted}</div>
      <div>Formatted date2: {formatted2}</div>
    </div>
  );
};

export default FormatDate;
