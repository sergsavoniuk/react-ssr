export const formatPeriod = (value) => {
  switch (value) {
    case "week": {
      const current = new Date();
      const weekBefore = current.setDate(current.getDate() - 7);

      return `?from=${formatDate(new Date(weekBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "month": {
      const current = new Date();
      const monthBefore = current.setMonth(current.getMonth() - 1);

      return `?from=${formatDate(new Date(monthBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "3_months": {
      const current = new Date();
      const threeMonthsBefore = current.setMonth(current.getMonth() - 3);

      return `?from=${formatDate(new Date(threeMonthsBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "all_time": {
      return "";
    }
  }
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
};
