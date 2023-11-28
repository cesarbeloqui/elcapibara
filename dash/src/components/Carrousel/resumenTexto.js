const resumenTexto = (textoOriginal, longitudMaxima, final) => {
  const obtenerTextoResumido = () => {
    if (textoOriginal.length <= longitudMaxima) {
      return textoOriginal;
    }
    const cadena = textoOriginal.substring(0, longitudMaxima);
    return `${cadena.slice(0, cadena.length - 1) + final}`;
  };

  const textoResumido = obtenerTextoResumido();

  return textoResumido;
};

export default resumenTexto;
