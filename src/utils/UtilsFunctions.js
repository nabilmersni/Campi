export const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

export function formatDateRange(startDate, endDate) {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Convert the date strings to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Extract the day and month
  const startDay = start.getDate();
  const endDay = end.getDate();
  const startMonth = months[start.getMonth()];
  const endMonth = months[end.getMonth()];

  // Check if the month is the same
  if (startMonth === endMonth) {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
  } else {
    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
  }
}

export function extractCartIdAndQuantity(cartItems) {
  return cartItems.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});
}

export function formatDateV2(dateString) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function formatDateV1(dateString) {
  const [day, month, year] = dateString.split('/');

  return `${year}-${month}-${day}`;
}
