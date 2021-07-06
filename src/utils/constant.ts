export const MS_LOGIN_TOKEN = 'you_should_custom_login_100'

export interface IMapItem {
  label: string
  value: string | number
  key?: string | number
}

type ExtractValue<T, K> = T extends { value: K; label: infer R } ? R : never
type ExtractLabel<T, K> = T extends { value: infer R; label: K } ? R : never

export const genMapObject = <T extends Readonly<IMapItem[]>>(originData: T) => {
  type IMapValue = {
    [TK in T[number]['value']]: ExtractValue<T[number], TK>
  }
  type IMapLabel = {
    [TK in T[number]['label']]: ExtractLabel<T[number], TK>
  }
  const valueObject: IMapValue = Object.create(null)
  const labelObject: IMapLabel = Object.create(null)
  originData.forEach(item => {
    // eslint-disable-next-line prettier/prettier
    valueObject[item.value as T[number]['value']] = item.label as ExtractValue<T[number], T[number]['value']>
    // eslint-disable-next-line prettier/prettier
    labelObject[item.label as T[number]['label']] = item.value as ExtractLabel<T[number], T[number]['label']>
  })
  return Object.assign({}, valueObject, labelObject)
}

// example
export const MAP_LEVELS = [
  { label: '一般', value: 'custom' },
  { label: '低危', value: 'low' },
  { label: '中危', value: 'middle' },
  { label: '高危', value: 'high' },
  { label: '严重', value: 'serious' }
]

export const MAP_MAP_LEVELS = genMapObject(MAP_LEVELS)
export type T_MAP_MAP_LEVELS = keyof typeof MAP_MAP_LEVELS
