import { required, email, max } from 'vee-validate/dist/rules'
import { isContainHtmlTags } from '@/utils/validate'
import { extend, setInteractionMode } from 'vee-validate'
import i18n from '@/lang'

setInteractionMode('eager')
extend('required', {
  ...required,
  message: (_, values) => i18n.t('errors.field_must_be_filled', values)
})

extend('max', {
  ...max,
  message: 'This field must be {length} characters or less'
})

extend('email', {
  ...email,
  message: (_, values) => i18n.t('errors.field_must_be_valid_email', values)
})

extend('isHtml', {
  message: (_, values) => i18n.t('errors.field_unauthorized_characters', values),
  validate: value => {
    return !isContainHtmlTags(value)
  }
})

extend('atLeastOne', {
  message: 'At least one item must be selected.',
  validate: (value) => {
    return value.length > 0
  }
})
