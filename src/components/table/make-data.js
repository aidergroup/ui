const descriptions = [
  'Viaplay AB',
  'APOTEK HJARTAT K',
  'APPLE.COM/BILL',
  'HAVET',
  'CSN',
  'Övf Lön april',
  'Swish Västtrafik T',
  'HSB BRF Cinnober',
]

export const columns = [
  { Header: 'Beskrivning', accessor: 'description' },
  { Header: 'Summa', accessor: 'amount' },
  { Header: 'Datum', accessor: 'date' },
]

export const makeData = (length = 25) => {
  const getAmount = () =>
    Math.ceil(Math.random() * 500) * (Math.round(Math.random()) ? 1 : -1)

  return Array(length)
    .fill({})
    .map((item, index) => {
      const amount = getAmount()
      return {
        id: index,
        description:
          descriptions[Math.floor(Math.random() * descriptions.length)],
        amount,
        expense: amount < 0,
        verified: false,
        date: '2020-12-31',
      }
    })
}
