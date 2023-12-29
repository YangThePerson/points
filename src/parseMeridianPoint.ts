export default function parsePoint(point: string, meridian: string) {
  return `${point.length < 3 ? meridian : ''}${point.toUpperCase()}`;
}
