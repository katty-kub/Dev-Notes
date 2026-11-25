type PluralForms = {
  one: string
  few: string
  other: string
}

const pluralRules = new Intl.PluralRules('cs')

export const pluralize = (count: number, forms: PluralForms) => {
  const rule = pluralRules.select(count)
  const word = rule === 'one' || rule === 'few' ? forms[rule] : forms.other

  return `${count} ${word}`
}
