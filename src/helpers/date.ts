const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const displayDateAsMonthYear = (date: Date | null) => {
  return date ? `${months[date.getMonth()]} ${date.getFullYear()}` : 'Present';
};
