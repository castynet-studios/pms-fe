export const yearsObject = (days: Date[]) => {
  let years: { year: number; span: number }[] = []

  for (const day of days) {
    const year = day.getFullYear()

    if (!years.some((e: any) => e.year === year)) {
      years.push({ year, span: 1 })
    } else {
      const yearIndex = years.findIndex(({ year: yr }) => yr === year)
      years[yearIndex].span = ++years[yearIndex].span
    }
  }

  return years
}

export const monthsObject = (days: Date[]) => {
  let months: { month: number; span: number }[] = []

  for (const day of days) {
    const month = day.getMonth()

    if (!months.some(({ month: m }) => m === month)) {
      months.push({ month: month, span: 1 })
    } else {
      const mIndex = months.findIndex(({ month: m }) => m === month)
      months[mIndex].span = ++months[mIndex].span
    }
  }

  return months
}
