// Returns an array of interpolated color values between the two supplied
// colors.
exports.interpolateColors = (color1, color2, steps) => {
  const stepFactor = 1 / (steps - 1)
  let interpolatedColorArray = []

  color1 = color1.match(/\d+/g).map(Number)
  color2 = color2.match(/\d+/g).map(Number)

  for (var i = 0; i < steps; i++) {
    interpolatedColorArray.push(
      interpolateColor(color1, color2, stepFactor * i)
    )
  }
  return interpolatedColorArray
}

// Returns a single rgb color interpolation between given rgb color
// based on the factor given; via https://codepen.io/njmcode/pen/axoyD?editors=0010
const interpolateColor = (color1, color2, factor = 0.5) => {
  var result = color1.slice()
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]))
  }
  return result
}
