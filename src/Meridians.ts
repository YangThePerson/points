const Meridians: {
  [x: string]: {
    name: string;
    element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
    category: 'Yin' | 'Yang';
    Jing_Well: string;
    Ying_Spring: string;
    Shu_Stream: string;
    Jing_River: string;
    He_Sea: string;
    Horary: string;
    Tonification: string;
    Sedation: string;
    Source: string;
    Luo_Connecting: string;
    Xi_Cleft: string;
    Front_Mu: string;
    Back_Shu: string;
    [key: string]: string;
  };
} = {
  LU: {
    name: 'LU',
    element: 'Metal',
    category: 'Yin',
    Jing_Well: 'LU11',
    Ying_Spring: 'LU10',
    Shu_Stream: 'LU9',
    Jing_River: 'LU8',
    He_Sea: 'LU5',
    Horary: 'LU8',
    Tonification: 'LU9',
    Sedation: 'LU5',
    Source: 'LU9',
    Luo_Connecting: 'LU7',
    Xi_Cleft: 'LU6',
    Front_Mu: 'LU1',
    Back_Shu: 'UB13',
  },
  LI: {
    name: 'LI',
    element: 'Metal',
    category: 'Yang',
    Jing_Well: 'LI1',
    Ying_Spring: 'LI2',
    Shu_Stream: 'LI3',
    Jing_River: 'LI5',
    He_Sea: 'LI11',
    Horary: 'LI1',
    Tonification: 'LI11',
    Sedation: 'LI2',
    Source: 'LI4',
    Luo_Connecting: 'LI6',
    Xi_Cleft: 'LI7',
    Front_Mu: 'ST25',
    Back_Shu: 'UB25',
  },
  SP: {
    name: 'SP',
    element: 'Earth',
    category: 'Yin',
    Jing_Well: 'SP1',
    Ying_Spring: 'SP2',
    Shu_Stream: 'SP3',
    Jing_River: 'SP5',
    He_Sea: 'SP9',
    Horary: 'SP3',
    Tonification: 'SP2',
    Sedation: 'SP5',
    Source: 'SP3',
    Luo_Connecting: 'SP4',
    Xi_Cleft: 'SP8',
    Front_Mu: 'LV13',
    Back_Shu: 'UB20',
  },
  ST: {
    name: 'ST',
    element: 'Earth',
    category: 'Yang',
    Jing_Well: 'ST45',
    Ying_Spring: 'ST44',
    Shu_Stream: 'ST43',
    Jing_River: 'ST41',
    He_Sea: 'ST36',
    Horary: 'ST36',
    Tonification: 'ST41',
    Sedation: 'ST45',
    Source: 'ST42',
    Luo_Connecting: 'ST40',
    Xi_Cleft: 'ST34',
    Front_Mu: 'REN12',
    Back_Shu: 'UB21',
  },
  HT: {
    name: 'HT',
    element: 'Fire',
    category: 'Yin',
    Jing_Well: 'HT9',
    Ying_Spring: 'HT8',
    Shu_Stream: 'HT7',
    Jing_River: 'HT4',
    He_Sea: 'HT3',
    Horary: 'HT8',
    Tonification: 'HT9',
    Sedation: 'HT7',
    Source: 'HT7',
    Luo_Connecting: 'HT5',
    Xi_Cleft: 'HT6',
    Front_Mu: 'REN14',
    Back_Shu: 'UB15',
  },
  SI: {
    name: 'SI',
    element: 'Fire',
    category: 'Yang',
    Jing_Well: 'SI1',
    Ying_Spring: 'SI2',
    Shu_Stream: 'SI3',
    Jing_River: 'SI5',
    He_Sea: 'SI8',
    Horary: 'SI5',
    Tonification: 'SI3',
    Sedation: 'SI8',
    Source: 'SI4',
    Luo_Connecting: 'SI7',
    Xi_Cleft: 'SI6',
    Front_Mu: 'REN4',
    Back_Shu: 'UB27',
  },
  KD: {
    name: 'KD',
    element: 'Water',
    category: 'Yin',
    Jing_Well: 'KD1',
    Ying_Spring: 'KD2',
    Shu_Stream: 'KD3',
    Jing_River: 'KD7',
    He_Sea: 'KD10',
    Horary: 'KD10',
    Tonification: 'KD7',
    Sedation: 'KD1',
    Source: 'KD3',
    Luo_Connecting: 'KD4',
    Xi_Cleft: 'KD5',
    Front_Mu: 'GB25',
    Back_Shu: 'UB23',
  },
  UB: {
    name: 'UB',
    element: 'Water',
    category: 'Yang',
    Jing_Well: 'UB67',
    Ying_Spring: 'UB66',
    Shu_Stream: 'UB65',
    Jing_River: 'UB60',
    He_Sea: 'UB40',
    Horary: 'UB66',
    Tonification: 'UB67',
    Sedation: 'UB65',
    Source: 'UB64',
    Luo_Connecting: 'UB58',
    Xi_Cleft: 'UB63',
    Front_Mu: 'REN3',
    Back_Shu: 'UB28',
  },
  PC: {
    name: 'PC',
    element: 'Fire',
    category: 'Yin',
    Jing_Well: 'PC9',
    Ying_Spring: 'PC8',
    Shu_Stream: 'PC7',
    Jing_River: 'PC5',
    He_Sea: 'PC3',
    Horary: 'PC8',
    Tonification: 'PC9',
    Sedation: 'PC7',
    Source: 'PC7',
    Luo_Connecting: 'PC6',
    Xi_Cleft: 'PC4',
    Front_Mu: 'REN17',
    Back_Shu: 'UB14',
  },
  SJ: {
    name: 'SJ',
    element: 'Fire',
    category: 'Yang',
    Jing_Well: 'SJ1',
    Ying_Spring: 'SJ2',
    Shu_Stream: 'SJ3',
    Jing_River: 'SJ6',
    He_Sea: 'SJ10',
    Horary: 'SJ6',
    Tonification: 'SJ3',
    Sedation: 'SJ10',
    Source: 'SJ4',
    Luo_Connecting: 'SJ5',
    Xi_Cleft: 'SJ7',
    Front_Mu: 'REN5',
    Back_Shu: 'UB22',
  },
  LV: {
    name: 'LV',
    element: 'Wood',
    category: 'Yin',
    Jing_Well: 'LV1',
    Ying_Spring: 'LV2',
    Shu_Stream: 'LV3',
    Jing_River: 'LV4',
    He_Sea: 'LV8',
    Horary: 'LV1',
    Tonification: 'LV8',
    Sedation: 'LV2',
    Source: 'LV3',
    Luo_Connecting: 'LV5',
    Xi_Cleft: 'LV6',
    Front_Mu: 'LV14',
    Back_Shu: 'UB18',
  },
  GB: {
    name: 'GB',
    element: 'Wood',
    category: 'Yang',
    Jing_Well: 'GB44',
    Ying_Spring: 'GB43',
    Shu_Stream: 'GB41',
    Jing_River: 'GB38',
    He_Sea: 'GB34',
    Horary: 'GB41',
    Tonification: 'GB43',
    Sedation: 'GB38',
    Source: 'GB40',
    Luo_Connecting: 'GB37',
    Xi_Cleft: 'GB36',
    Front_Mu: 'GB24',
    Back_Shu: 'UB19',
  },
};

export default Meridians;