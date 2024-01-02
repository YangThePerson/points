const Categories: [
  'Jing_Well',
  'Ying_Spring',
  'Shu_Stream',
  'Jing_River',
  'He_Sea'
] = ['Jing_Well', 'Ying_Spring', 'Shu_Stream', 'Jing_River', 'He_Sea'];

const Elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

function convert({
  category,
  element,
}: {
  category: 'Yin' | 'Yang';
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
}): 'Jing_Well' | 'Ying_Spring' | 'Shu_Stream' | 'Jing_River' | 'He_Sea' {
  let start = 0;
  if (category === 'Yin') start = 0;
  else if (category === 'Yang') start = 2;

  let added = Elements.indexOf(element) + start;
  if (added >= 5) added -= 5;

  return Categories[added];
}

export default convert;
