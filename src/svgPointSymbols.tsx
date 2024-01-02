export default {
  Horary: (
    <polygon
      points="100,10 190,80 160,190 40,190 10,80"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Tonification: (
    <polygon
      points="100,10 10,190 190,190"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Sedation: (
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Source: (
    <polygon
      points="190,10 190,190 10,190 10,10"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Luo_Connecting: (
    <polygon
      points="100,10 125,90 190,90 140,130 160,190 100,150 40,190 60,130 10,90 75,90"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Xi_Cleft: (
    <polyline
      points="10,130 100,75 190,130"
      fill="none"
      stroke="#000000"
      strokeWidth={1}
      fillRule="evenodd"
    />
  ),
  Front_Mu: (
    <>
      <polyline
        points="10,155 100,100 190,155"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
      <polyline
        points="10,45 100,100 190,45"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </>
  ),
  Back_Shu: (
    <>
      {' '}
      <polyline
        points="10,155 100,100 190,155"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
      <polyline
        points="10,45 100,100 190,45"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
      <circle
        cx="100"
        cy="50"
        r="10"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
      <circle
        cx="100"
        cy="150"
        r="10"
        fill="none"
        stroke="#000000"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </>
  ),
} as {
  Horary: JSX.Element;
  Tonification: JSX.Element;
  Sedation: JSX.Element;
  Source: JSX.Element;
  Luo_Connecting: JSX.Element;
  Xi_Cleft: JSX.Element;
  Front_Mu: JSX.Element;
  Back_Shu: JSX.Element;
  [key: string]: JSX.Element;
};
