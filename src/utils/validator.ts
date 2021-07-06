import { patterns } from '@moresec/utils'

export interface IRule {
  field: string
  fullField: string
  type: string | number | boolean
  validator: Function
}

// example
export const validatePhoneNumber = (rule: IRule, value = '', callback: Function): void => {
  if (!value) {
    callback('手机号码不能为空')
  } else if (patterns.phone.test(value)) {
    callback()
  } else {
    callback('手机号码格式不正确')
  }
}
