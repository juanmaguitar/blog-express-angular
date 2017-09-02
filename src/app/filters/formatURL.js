function formatURL () {
  return function (input) {
    let url = input.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>{}[\]]/gi, '')
    url = url.replace(/[\s+]/g, '-')
    return url.toLowerCase()
  }
}

export default formatURL
