Grid Generator
==============

    Grid = ({width, height, guide, color}={}) ->
      color ?= "rgba(0, 0, 0, 0.3)"
      height ?= 32
      width ?= 32
      guide ?= 4

      canvasWidth = width * guide
      canvasHeight = height * guide

      canvas = document.createElement("canvas")
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      context = canvas.getContext("2d")

      context.fillStyle = color

      [0...guide].forEach (i) ->
        context.fillRect(i * width, 0, 1, canvasHeight)
        context.fillRect(0, i * height, canvasWidth, 1)
    
      # Draw the strong line
      context.fillRect(0, 0, 1, canvasHeight)
      context.fillRect(0, 0, canvasWidth, 1)
    
      backgroundImage: ->
        "url(#{this.toDataURL()})"
    
      toDataURL: ->
        canvas.toDataURL("image/png")

    module.exports = Grid
