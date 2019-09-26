/* eslint-disable prettier/prettier */
export default {
  /**
   * 用户输入敏感字符检测
   * @param {*} typeName  被检测的输入分类
   * @param {*} str       被检测的字符串
   * return 含有的字段组成的数组
   */
  strDetection(typeName, str) {
    let sensitiveChars = {
      fileName: [],
      userName: ['<', '&', '>', '"', "'"]
    };

    let existSensitArr = [];

    sensitiveChars[typeName].forEach(char => {
      if (str.indexOf(char) >= 0) {
        existSensitArr.push(char)
      }
    })
    
    return existSensitArr
  },
}