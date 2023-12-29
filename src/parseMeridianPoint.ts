export default function parsePoint(point: string, meridian: string) {
  point = point.replace(/\s/gim, '');
  if (!point.match(/^[0-9]+$/)) return point;
  return `${point.length < 3 ? meridian : ''}${point.toUpperCase()}`;
}
