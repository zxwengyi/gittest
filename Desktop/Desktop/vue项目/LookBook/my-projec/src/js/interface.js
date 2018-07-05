export const sessionSet = function bar (key, keyVelue) {
  window.sessionStorage.setItem(key, keyVelue)
}
export const sessionGet = function bar (key) {
  window.sessionStorage.getItem(key)
}
export const sessionRemove = function bar (key) {
  window.sessionStorage.removeItem(key)
}
export const addPath = function (index) {
  console.log(index)
}
export const vueTouchStart = function (e, element) {
  console.log(element)
  console.log(e)
/*  var vueTouches = {x: 0, y: 0}
  var obj, isTouch, eMove, eEnd
  isTouch = 'ontouchstart' in window
  eMove = isTouch ? 'touchmove' : 'mousemove'
  eEnd = isTouch ? 'touchend' : 'mouseup'
  obj = element
  vueTouches.x = e.clientX
  vueTouches.y = e.clientY
  obj.addEventListener(eEnd, vueTouchStartPrototype.end(e), false)
  obj.addEventListener(eMove, vueTouchStartPrototype.move(e), false) */
}
export const vueTouchStartPrototype = {
  move: function (e) {},
  end: function (e) {}
}
export const isTouchEvent = function () {
  this.isTouch = 'ontouchstart' in window
  this.eStart = this.isTouch ? 'touchstart' : 'mousedown'
  this.eMove = this.isTouch ? 'touchmove' : 'mousemove'
  this.eEnd = this.isTouch ? 'touchend' : 'mouseup'
}
export const vueTouch = function (el, binding, type) {
  console.log(el)
  var _this = this
  var isTouch = false
  var eStart, eMove, eEnd
  this.obj = el
  console.log(this.obj)
  this.binding = binding
  this.touchType = type
  this.vueTouches = {x: 0, y: 0}
  this.vueMoves = true
  this.vueLeave = true
  this.longTouch = true
  isTouch = 'ontouchstart' in window
  eStart = isTouch ? 'touchstart' : 'mousedown'
  eMove = isTouch ? 'touchmove' : 'mousemove'
  eEnd = isTouch ? 'touchend' : 'mouseup'
  // eCancel = isTouch ? 'touchcancel' : 'mouseup';
  // this.vueCallBack = typeof(binding.value) === 'object' ? binding.value.fn: binding.value
  this.vueCallBack = binding.value === 'object' ? binding.value.fn : binding.value
  this.obj.addEventListener(eStart, function (e) {
    _this.start(e)
  }, false)
  this.obj.addEventListener(eEnd, function (e) {
    _this.end(e)
  }, false)
  this.obj.addEventListener(eMove, function (e) {
    _this.move(e)
  }, false)
}

vueTouch.prototype = {
  start: function (e) {
    console.log('==========================')
    this.vueMoves = true
    this.vueLeave = true
    this.longTouch = true
    this.vueTouches = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY}
    this.time = setTimeout(function () {
      if (this.vueLeave && this.vueMoves) {
        this.touchType === 'longtap' && this.vueCallBack(this.binding.value, e)
        this.longTouch = false
      }
    }.bind(this), 1000)
  },
  end: function (e) {
    var disX = e.changedTouches[0].pageX - this.vueTouches.x
    var disY = e.changedTouches[0].pageY - this.vueTouches.y
    clearTimeout(this.time)
    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
      this.touchType === 'swipe' && this.vueCallBack(this.binding.value, e)
      if (Math.abs(disX) > Math.abs(disY)) {
        if (disX > 10) {
          this.touchType === 'swiperight' && this.vueCallBack(this.binding.value, e)
        }
        if (disX < -10) {
          this.touchType === 'swipeleft' && this.vueCallBack(this.binding.value, e)
        }
      } else {
        if (disY > 10) {
          this.touchType === 'swipedown' && this.vueCallBack(this.binding.value, e)
        }
        if (disY < -10) {
          this.touchType === 'swipeup' && this.vueCallBack(this.binding.value, e)
        }
      }
    } else {
      if (this.longTouch && this.vueMoves) {
        this.touchType === 'tap' && this.vueCallBack(this.binding.value, e)
        this.vueLeave = false
      }
    }
  },
  move: function (e) {
    this.vueMoves = false
  }
}
/* Vue.directive('swipe', {
  bind: function (el, binding) {
    new vueTouch(el,binding, 'swipe')
  }
}) */
/*
 Vue.directive("swipeleft", {
  bind:function (el,binding) {
    new vueTouch(el,binding, "swipeleft")
  }
})
Vue.directive("swiperight",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swiperight");
  }
});
Vue.directive("swipedown",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipedown");
  }
});
Vue.directive("swipeup",{
  bind:function(el,binding){
    new vueTouch(el,binding,"swipeup");
  }
});
Vue.directive("longtap",{
  bind:function(el,binding){
    new vueTouch(el,binding,"longtap");
  }
}); */

