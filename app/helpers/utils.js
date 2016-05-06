import 'date-format-lite'

const utils = {
  getDate (timestamp) {
    const date = new Date(timestamp * 1000)
    return date.format('DDDD, MMMM D')
  }
}

export default utils
