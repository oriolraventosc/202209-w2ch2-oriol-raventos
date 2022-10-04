export const strictEquals = (a, b) => {
  let respuesta;
  if (Object.is(a, b)) {
    respuesta = true;
    return respuesta;
  } else if (Object.is(a, -0) && Object.is(0, b)) {
    respuesta = true;
    return respuesta;
  } else if (Object.is(0, a) && Object.is(b, -0)) {
    respuesta = true;
    return respuesta;
  } else if (Object.is(NaN, NaN)) {
    respuesta = false;
    return respuesta;
  } else {
    respuesta = false;
    return respuesta;
  }
};
