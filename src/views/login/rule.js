import i18n from '@/i18n'
export const checkPass = () => {
  return (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (value.length < 6) {
        callback(new Error(i18n.global.t('msg.login.passwordRule')))
      }
      callback()
    }
  }
}
