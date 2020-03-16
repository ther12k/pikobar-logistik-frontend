export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function isContainHtmlTags(str) {
  const reg = /(\<\w*)((\s\/\>)|(.*\<\/\w*\>))/

  return reg.test(str)
}
