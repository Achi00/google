import React, { useState, useEffect } from 'react'
import '../global.css'

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      setInterval(() => setDate(new Date()), 1000);
    }, []);
  
    const hours = date.getHours();
    const minute = date.getMinutes();
  
  
    return (
      <div className="Clock">
        <div className="Digits">
          {("0" + date.getHours()).slice(-2)}
          <span>:</span>
          {("0" + date.getMinutes()).slice(-2)}
        </div>
      </div>
    );
}
