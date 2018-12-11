// when i move my mouse, do something
$(document).on("mousemove", function (ev) {

var mouseX = ev.originalEvent.pageX
var mouseY = ev.originalEvent.pageY

//go through all of image and work out the angel

$("img").each(function(){
  var imgX = $(this).position().left + 55
  var imgY = $(this).position().top + 55

  var diffX = mouseX - imgX
  var diffY = mouseY - imgY

  var radians = Math.atan2 (diffY, diffX)

  var angle = radians * 180 / Math.PI

  $(this).css("transform", "rotate(" + angle + "deg)")

})

})

//arrows change every 4 seconds

var count = 0
var images = ["arrows-1.svg", "arrows-2.svg", "arrows-3.svg"]

setInterval(function (){
count = count + 1
count = count % images.length

var image = images[count]

$("img").attr("src",image)

}, 4000)
