/**
 * 加密盐
 */
export function salt() {
  return 'gdb9527'
}

export function deepClone(obj:any){
  return JSON.parse(JSON.stringify(obj))
}