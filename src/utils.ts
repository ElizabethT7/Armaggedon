export const getDate = () => {
  const date = new Date();
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return date.getFullYear() + '-' + month + '-' +  day;
}

export const formatDate = (date: Date) => {
  const formatDate = new Intl.DateTimeFormat("ru", {dateStyle: "medium"}).format(date);
  return formatDate.replace('.', '').slice(0, -3);
}

export const formatName = (name: string) => {
  return name.slice(1, -1);
}

export const formatNumber = (number: number) => {
  const formatNumber = Math.round(number);
  return new Intl.NumberFormat("ru-RU").format(formatNumber);
}

export function plural(value: number, variants = ['лунная орбита', 'лунные орбиты', 'лунных орбит'], locale = 'ru-RU') {
  value = Math.abs(value) % 100; 
  const  value1 = value % 10;
  if (value > 10 && value < 20) { return variants[2]; }
  if (value1 > 1 && value1 < 5) { return variants[1]; }
  if (value1 == 1) { return variants[0]; }
  return variants[2];
}

