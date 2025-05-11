export const ACCESS_LEVEL = {
  private: "PRIVATE",
  public: "PUBLIC",
  invite: "INVITE"
}

export const ACCESS_LEVEL_TITLES = {
  [ACCESS_LEVEL.public]: "Публичный список",
  [ACCESS_LEVEL.private]: "Приватный список",
  [ACCESS_LEVEL.invite]: "Групповой список"
}
export const ACCESS_OPTIONS = [
  {
    value: ACCESS_LEVEL.public,
    label: ACCESS_LEVEL_TITLES[ACCESS_LEVEL.public]
  },
  {
    value: ACCESS_LEVEL.private,
    label: ACCESS_LEVEL_TITLES[ACCESS_LEVEL.private]
  }
]

export const PRICE_RANGE = {
  UpTo1000: "UpTo1000",
  From1000To5000: "From1000To5000",
  From5000To10000: "From5000To10000",
  From10000To50000: "From10000To50000",
  Over50000: "Over50000"
}

export const PRICE_RANGE_TITLES = {
  [PRICE_RANGE.UpTo1000]: "До 1000",
  [PRICE_RANGE.From1000To5000]: "От 1000 до 5000",
  [PRICE_RANGE.From5000To10000]: "От 5000 до 10000",
  [PRICE_RANGE.From10000To50000]: "От 10000 до 50000",
  [PRICE_RANGE.Over50000]: "Более 50000"
}

export const PRICE_RANGE_OPTIONS = [
  {
    value: PRICE_RANGE.UpTo1000,
    label: PRICE_RANGE_TITLES[PRICE_RANGE.UpTo1000]
  },
  {
    value: PRICE_RANGE.From1000To5000,
    label: PRICE_RANGE_TITLES[PRICE_RANGE.From1000To5000]
  },
  {
    value: PRICE_RANGE.From5000To10000,
    label: PRICE_RANGE_TITLES[PRICE_RANGE.From5000To10000]
  },
  {
    value: PRICE_RANGE.From10000To50000,
    label: PRICE_RANGE_TITLES[PRICE_RANGE.From10000To50000]
  },
  {
    value: PRICE_RANGE.Over50000,
    label: PRICE_RANGE_TITLES[PRICE_RANGE.Over50000]
  }
]

export const PRIORITY = {
  low: "LOW",
  medium: "MEDIUM",
  high: "HIGH"
}

export const PRIORITY_TITLES = {
  [PRIORITY.low]: "Низкий приоритет",
  [PRIORITY.medium]: "Средний приоритет",
  [PRIORITY.high]: "Высокий приоритет"
}

export const PRIORITY_OPTIONS = [
  {
    value: PRIORITY.low,
    label: PRIORITY_TITLES[PRIORITY.low]
  },
  {
    value: PRIORITY.medium,
    label: PRIORITY_TITLES[PRIORITY.medium]
  },
  {
    value: PRIORITY.high,
    label: PRIORITY_TITLES[PRIORITY.high]
  }
]
