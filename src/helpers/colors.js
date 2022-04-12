export const COLORS = {
  primary: '#828282',
  yellow: '#e2b534',
  red: '#db4437',
  blue: '#4285f4',
  green: '#0f9d58',
};

export const colorFilterScore = score => {
  if (score === null) {
    return COLORS.primary;
  }

  const numberScore = Number.parseInt(score);

  if (numberScore >= 90) {
    return COLORS.blue;
  } else if (numberScore >= 80 && numberScore < 90) {
    return COLORS.green;
  } else if (numberScore >= 50 && numberScore < 80) {
    return COLORS.yellow;
  } else return COLORS.red;
};

export const colorFilterSpeed = speed => {
  if (speed === null) {
    return COLORS.primary;
  }

  const speedString = speed.toLowerCase();

  if (speedString === 'above expected') {
    return COLORS.blue;
  } else if (speedString === 'as expected') {
    return COLORS.green;
  } else if (speedString === 'below expected') {
    return COLORS.red;
  } else return COLORS.red;
};

export const isCheckStudent = isCheck => {
  if (isCheck) {
    const style = {
      background: '#F2F2F2',
      outline: '1px solid #C0C0C0',
      boxShadow: '0px 1px 4px rgba(60, 52, 135, 0.15)',
    };
    return style;
  }
};
