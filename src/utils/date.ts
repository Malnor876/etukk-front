export function humanizeDate(lang: string, date: Date) {
  const localeString = date.toLocaleString(lang, { timeStyle: "short", dateStyle: "short" })
  return localeString.replace(", ", " в ")
}
