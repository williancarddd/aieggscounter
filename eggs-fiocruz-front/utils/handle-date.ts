import {
  parseISO,
  format,
} from 'date-fns';

export function formatDateIso(date: string) {
  try {
    const isoDate = parseISO(date);
    return format(isoDate, 'MM/dd/yyyy');
  } catch {
    return date;
  }
}
