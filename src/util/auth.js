import { TIME_STAMP, TOKEN_TIMEOUT } from '@/constant'
import { getItem, setItem } from '@/util/storage.js'

/**
 *  获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置当前时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export function isTimeout() {
  var currentTime = Date.now()
  var timestamp = getTimeStamp()
  return currentTime - timestamp > TOKEN_TIMEOUT
}
