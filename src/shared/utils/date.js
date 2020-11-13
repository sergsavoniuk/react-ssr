export const formatPeriod = ({ label, value }) => {
  switch (label) {
    case "1 week": {
      const current = new Date();
      const weekBefore = current.setDate(current.getDate() - 7);

      return `?from=${formatDate(new Date(weekBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "1 month": {
      const current = new Date();
      const monthBefore = current.setMonth(current.getMonth() - 1);

      return `?from=${formatDate(new Date(monthBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "3 months": {
      const current = new Date();
      const threeMonthsBefore = current.setMonth(current.getMonth() - 3);

      return `?from=${formatDate(new Date(threeMonthsBefore))}&to=${formatDate(
        new Date()
      )}`;
    }
    case "choose month": {
      const { month, year } = value;

      const monthStart = new Date();
      monthStart.setFullYear(year);
      monthStart.setMonth(month);
      monthStart.setDate(1);

      let monthEnd = new Date(
        monthStart.getFullYear(),
        monthStart.getMonth() + 1,
        0
      );

      const current = new Date();

      if (monthEnd > current) {
        monthEnd.setDate(current.getDate() - 1);
      }

      return `?from=${formatDate(monthStart)}&to=${formatDate(monthEnd)}`;
    }
    case "all time": {
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
