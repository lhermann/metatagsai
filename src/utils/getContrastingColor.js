export default function getContrastingColor (
  baseColor,
  { threshold = 0.5, lightColor = '#ffffff', darkColor = '#000000' } = {}
) {
  // Convert the hex code to RGB values
  const baseColorRgb = {
    r: parseInt(baseColor.slice(1, 3), 16),
    g: parseInt(baseColor.slice(3, 5), 16),
    b: parseInt(baseColor.slice(5, 7), 16),
  }

  // Calculate the luminance value of the background color
  const luminance = (0.299 * baseColorRgb.r + 0.587 * baseColorRgb.g + 0.114 * baseColorRgb.b) / 255

  // If the luminance is greater than 0.5, use black text; otherwise, use white text
  console.log('getContrastingColor', luminance, threshold)
  return luminance > threshold ? darkColor : lightColor
}
