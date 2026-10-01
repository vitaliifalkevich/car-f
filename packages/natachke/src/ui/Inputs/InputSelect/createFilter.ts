import memoizeOne from 'memoize-one'
import { stripDiacritics } from './diacritics'

const transliterationMap: { [key: string]: string[] } = {
  А: ['A'],
  Б: ['B'],
  В: ['V', 'W'],
  Г: ['G'],
  Ґ: ['G'],
  Д: ['D'],
  Е: ['E'],
  Ё: ['E'],
  Ж: ['Zh'],
  З: ['Z'],
  И: ['I'],
  І: ['I'],
  Ї: ['Yi'],
  Й: ['Y'],
  К: ['K', 'C'],
  Л: ['L'],
  М: ['M'],
  Н: ['N'],
  О: ['O'],
  П: ['P'],
  Р: ['R'],
  С: ['S', 'C'],
  Т: ['T'],
  У: ['U'],
  Ф: ['F'],
  Х: ['Kh', 'X'],
  Ц: ['Ts'],
  Ч: ['Ch'],
  Ш: ['Sh'],
  Щ: ['Shch'],
  Ы: ['Y'],
  Э: ['E'],
  Ю: ['Yu'],
  Я: ['Ya'],
  а: ['a'],
  б: ['b'],
  в: ['v', 'w'],
  г: ['g'],
  ґ: ['g'],
  д: ['d'],
  е: ['e'],
  ё: ['e'],
  ж: ['zh'],
  з: ['z'],
  и: ['i'],
  і: ['i'],
  ї: ['yi'],
  й: ['y'],
  к: ['k', 'c'],
  л: ['l'],
  м: ['m'],
  н: ['n'],
  о: ['o'],
  п: ['p'],
  р: ['r'],
  с: ['s', 'c'],
  т: ['t'],
  у: ['u'],
  ф: ['f'],
  х: ['kh', 'x'],
  ц: ['ts'],
  ч: ['ch'],
  ш: ['sh'],
  щ: ['shch'],
  ы: ['y'],
  э: ['e'],
  ю: ['yu'],
  я: ['ya'],
  Є: ['Ye'],
  є: ['ye'],
}

function createTransliterationRegex(
  text: string,
  startWith: boolean = false,
): RegExp {
  const regexParts = text.split('').map(char => {
    const transliterations = transliterationMap[char] || [char]
    return `(${transliterations.join('|')})`
  })
  const regexString = regexParts.join('')
  return new RegExp(startWith ? `^${regexString}` : regexString, 'i')
}

export interface FilterOptionOption<Option> {
  readonly label: string
  readonly value: string
  readonly data: Option
}

interface Config<Option> {
  readonly ignoreCase?: boolean
  readonly ignoreAccents?: boolean
  readonly stringify?: (option: FilterOptionOption<Option>) => string
  readonly trim?: boolean
  readonly matchFrom?: 'any' | 'start'
}

const memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics)

const trimString = (str: string) => str.replace(/^\s+|\s+$/g, '')
const defaultStringify = <Option>(option: FilterOptionOption<Option>) =>
  `${option.label} ${option.value}`

export const createFilter = <Option>(config?: Config<Option>) => (
  option: FilterOptionOption<Option>,
  rawInput: string,
): boolean => {
  // eslint-disable-next-line no-underscore-dangle
  if ((option.data as { __isNew__?: unknown }).__isNew__) return true
  const { ignoreCase, ignoreAccents, stringify, trim, matchFrom } = {
    ignoreCase: true,
    ignoreAccents: true,
    stringify: defaultStringify,
    trim: true,
    matchFrom: 'any',
    ...config,
  }
  let input = trim ? trimString(rawInput) : rawInput
  let candidate = trim ? trimString(stringify(option)) : stringify(option)
  if (ignoreCase) {
    input = input.toLowerCase()
    candidate = candidate.toLowerCase()
  }
  if (ignoreAccents) {
    input = memoizedStripDiacriticsForInput(input)
    candidate = stripDiacritics(candidate)
  }
  const transliterationRegex = createTransliterationRegex(
    input,
    matchFrom === 'start',
  )
  const matchesTransliteration = transliterationRegex.test(candidate)

  const matchesNormal =
    matchFrom === 'start'
      ? candidate.substr(0, input.length) === input
      : candidate.indexOf(input) > -1

  return matchesNormal || matchesTransliteration
}
