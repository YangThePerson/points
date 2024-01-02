export const PointNames: [
  'Jing_Well',
  'Ying_Spring',
  'Shu_Stream',
  'Jing_River',
  'He_Sea'
] = ['Jing_Well', 'Ying_Spring', 'Shu_Stream', 'Jing_River', 'He_Sea'];

const Elements: ['Wood', 'Fire', 'Earth', 'Metal', 'Water'] = [
  'Wood',
  'Fire',
  'Earth',
  'Metal',
  'Water',
];

export type validPointNames =
  | 'Jing_Well'
  | 'Ying_Spring'
  | 'Shu_Stream'
  | 'Jing_River'
  | 'He_Sea';

export function ShuPointToElement({
  category,
  pointName,
}: {
  category: 'Yin' | 'Yang';
  pointName:
    | 'Jing_Well'
    | 'Ying_Spring'
    | 'Shu_Stream'
    | 'Jing_River'
    | 'He_Sea';
}): 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water' {
  let start = 0;
  if (category === 'Yin') start = 0;
  else if (category === 'Yang') start = 3;

  let added = PointNames.indexOf(pointName) + start;
  if (added >= 5) added -= 5;

  return Elements[added];
}
