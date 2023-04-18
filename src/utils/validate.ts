
/**
 * 手机号码验证
 * 用于表单验证
 */
export function validatorMobile(
  rule: any,
  mobile: string | number,
  callback: Function
) {
  // 允许空值，若需必填请添加多验证规则
  if (!mobile) {
    return callback()
  }
  if (!/^(1[3-9])\d{9}$/.test(mobile.toString())) {
    return callback(
      new Error('验证请输入正确的手机号码')
    )
  }
  return callback()
}

/**
 * 账户名验证
 */
export function validatorAccount(rule: any, val: string, callback: Function) {
  if (!val) {
    return callback()
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(val)) {
    return callback(
      new Error('验证请输入正确的帐户')
    )
  }
  return callback()
}

/**
 * 密码验证
 */
export function regularPassword(val: string) {
  const pwdPattern =
    /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
  if (pwdPattern.test(val)) return true
  return false
}
export function validatorPassword(rule: any, val: string, callback: Function) {
  if (!val) {
    return callback()
  }
  if (!regularPassword(val)) {
    return callback(
      new Error('验证请输入正确的密码')
    )
  }
  return callback()
}

/**
 * 变量名验证
 */
export function validatorVarName(rule: any, val: string, callback: Function) {
  if (!val) {
    return callback()
  }
  if (!/^([^\x00-\xff]|[a-zA-Z_$])([^\x00-\xff]|[a-zA-Z0-9_$])*$/.test(val)) {
    return callback(
      new Error('验证请输入正确的名称')
    )
  }
  return callback()
}

export function validatorEditorRequired(
  rule: any,
  val: string,
  callback: Function
) {
  if (!val || val == '<p><br></p>') {
    return callback(
      new Error('验证内容不能为空')
    )
  }
  return callback()
}
