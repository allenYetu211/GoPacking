(function (doc, win) {
  var docEle = doc.documentElement
  var isIos = navigator.userAgent.match(/iphone|ipod|ipad|Android/gi)
  var dpr = Math.min(win.devicePixelRatio, 3)
  var scale = 1 / dpr
  console.log(isIos)
  var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  docEle.dataset.dpr = dpr
  var metaEle = doc.createElement('meta')
  metaEle.name = 'viewport'
  metaEle.content = 'initial-scale=' + scale + ',maximum-scale=' + scale
  docEle.firstElementChild.appendChild(metaEle)
  var recalCulate = function () {
    var width = docEle.clientWidth
    if (width / dpr > 640) {
      console.log('уюЪ')
      width = 640 * dpr
    }
    docEle.style.fontSize = 20 * (width / 320) + 'px'
  }
  recalCulate()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvent, recalCulate, false)
})(document, window)
