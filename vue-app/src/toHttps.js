var web = {
  tohttps (path) {
    if (path.charAt(4) !== 's' && typeof path !== 'undefined') {
      path = path.substring(0, 4) + 's' + path.substring(4)
    }
    return path
  }
}

export default web
