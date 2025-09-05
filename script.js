const year = 2000;
const holidays = {
  '1-1': "New Year's Day",
  '1-17': "Martin Luther King Day",
  '2-21': "Presidents' Day",
  '5-29': "Memorial Day",
  '7-4': "Independence Day",
  '9-4': "Labor Day",
  '10-9': "Columbus Day",
  '11-11': "Veterans Day",
  '11-23': "Thanksgiving",
  '12-25': "Christmas Day"
};

const calendarContainer = document.querySelector('.calendar');
const monthNames = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Define 12 colors for each month
const monthColors = [
  '#D3D3D3', // Jan - gray
  '#D3D3D3', // Feb - gray
  '#87CEEB', // Mar - light blue
  '#87CEEB', // Apr - light blue
  '#D3D3D3', // May - gray
  '#D3D3D3', // Jun - gray
  '#87CEEB', // Jul - light blue
  '#87CEEB', // Aug - light blue
  '#D3D3D3', // Sep - gray
  '#D3D3D3', // Oct - gray
  '#87CEEB', // Nov - light blue
  '#87CEEB', // Dec - light blue
];

function generateCalendar(year) {
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 1);
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';

    // Set background color for the month
    monthDiv.style.backgroundColor = monthColors[month];

    monthDiv.innerHTML = `<h2>${monthNames[month]}</h2>`;

    // Add weekdays header
    const weekdaysDiv = document.createElement('div');
    weekdaysDiv.className = 'weekdays';
    weekdays.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      weekdaysDiv.appendChild(dayDiv);
    });

    monthDiv.appendChild(weekdaysDiv);

    // Add days
    const daysDiv = document.createElement('div');
    daysDiv.className = 'days';
    const firstDay = date.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells for the first week
    for (let i = 0; i < firstDay; i++) {
      daysDiv.appendChild(document.createElement('div'));
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement('div');
      const key = `${month + 1}-${day}`;
      dayDiv.textContent = day;

      if (holidays[key]) {
        dayDiv.classList.add('holiday');
        dayDiv.title = holidays[key];
      }

      daysDiv.appendChild(dayDiv);
    }

    monthDiv.appendChild(daysDiv);
    calendarContainer.appendChild(monthDiv);
  }
}

generateCalendar(year);
