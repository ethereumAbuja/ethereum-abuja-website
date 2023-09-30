export const formatNumber = (value: number) => {
  if (value > 1e9) {
    return `${(value / 1e9).toFixed(2)}B`;
  } else if (value > 1e6) {
    return `${(value / 1e6).toFixed(2)}M`;
  } else if (value > 1e3) {
    return `${(value / 1e3).toFixed(2)}K`;
  } else {
    return commaSeperator(Number(Math.sign(value) * Math.abs(value)).toFixed(0));
  }
};

const commaSeperator = (num: string) => {
  return String(num).replace(/^\d+(?=.|$)/, function (int) {
    return int.replace(/(?=(?:\d{3})+$)(?!^)/g, ",");
  });
};
