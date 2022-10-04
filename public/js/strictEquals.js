export const strictEquals = (a, b) => {
  let respuesta;
  if (Object.is(Number.isNaN(a, b))) {
    respuesta = false;
    return respuesta;
  } else if (Object.is(a, b)) {
    respuesta = true;
    return respuesta;
  } else if (Object.is(a, -0) && Object.is(0, b)) {
    respuesta = true;
    return respuesta;
  } else if (Object.is(0, a) && Object.is(b, -0)) {
    respuesta = true;
    return respuesta;
  } else {
    respuesta = false;
    return respuesta;
  }
};
