export const strictEquals = (a, b) => {
  let result;
  if (a == b && a != NaN) {
    result = true;
    return result;
  } else if (a == b && b == NaN) {
    result = false;
    return result;
  } else if (a == 0 && b == -0) {
    result = true;
    return result;
  } else if (a == -0 && b == 0) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
};
