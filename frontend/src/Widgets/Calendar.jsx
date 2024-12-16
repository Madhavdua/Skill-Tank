import React, { useEffect, useState } from 'react';

function Calendar() {



  const [date, setDate] = useState(new Date());
  const daysname = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const year = date.getFullYear();
  const month = date.toLocaleDateString('default', { month: 'long' });
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
  let firstDay = new Date(year, date.getMonth()).getDay();

  let idx = 0;
  function addRows() {
    const tableBody = document.getElementById('tablebody');
    while (idx < daysInMonth) {
      const row = document.createElement('tr');
      for (let d = 0; d < 7; d++) {
        const element = document.createElement('td');
        if (firstDay > 0) {
          firstDay--;
          element.innerText = " ";
        }
        else if (idx < daysInMonth) {
          element.id = "day" + idx;
          idx++;
          element.innerText = idx;
          element.style.fontWeight="500";
        }
        if(d==0){
          element.style.color="red";
        }
        row.appendChild(element);
      }
      tableBody.appendChild(row);
    }
  }
  const tasks = [
    { title: "Opening", date: 12 },
    { title: "Opening", date: 13 },
    { title: "Opening", date: 28 },
    { title: "Opening", date: 1 },
  ]
  function markTasks() {
    tasks.forEach((t) => {
      const target = document.getElementById("day" + (t.date - 1));
      target.style.backgroundColor = "lightblue";
      // target.style.borderRadius="50%";
      target.classList.add("rounded-circle")
    })
  }
  useEffect(() => {
    addRows();
    markTasks();
  }, [])


  return (
    <div className="card shadow" style={{ width: "300px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center ">
          {/* <button className="btn btn-light" onClick={prevMonth}>&lt;</button> */}
          <h5 className=" p-2 text-center hvr-sweep-to-left">
            {month}, {year}
          </h5>
          {/* <button className="btn btn-light" onClick={nextMonth}>&gt;</button> */}
        </div>
        <table className="text-center table" style={{ maxWidth:"300px"}}>
          <thead >
            <tr style={{fontSize:"medium"}}>
              {daysname.map((day,i) => (
                <th key={i} className="text-muted">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody id='tablebody' style={{fontSize:"smaller"}}>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;

