export function humanizeDate(date: Date, lang?: string) {
  const localeString = date.toLocaleString(lang, { timeStyle: "short", dateStyle: "short" })
  return localeString.replace(", ", " в ").replace(".20", ".")
}

export class DateInterval {
  constructor(
    public date1: Date,
    public date2: Date
  ) { }

  get difference(): Date {
    return new Date(this.date1.getUTCMilliseconds() - this.date2.getUTCMilliseconds())
  }

  get humanizedDate1(): string {
    return humanizeDate(this.date1)
  }

  get humanizedDate2(): string {
    return humanizeDate(this.date2)
  }

  humanize(): string {
    return `с ${humanizeDate(this.date1)} по ${humanizeDate(this.date2)}`
  }
}