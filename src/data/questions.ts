export const questions = [
  {
    question: "En una población de 100 peces, 40 son truchas. Si se capturan 10 peces al azar sin reemplazo, la distribución del número de truchas capturadas sigue una distribución hipergeométrica.",
    type: "truefalse",
    correctAnswer: "Verdadero",
    solution: "La situación se modela con una distribución hipergeométrica porque se realiza una selección sin reemplazo y se cuenta el número de éxitos (truchas) en la muestra."
  },
  {
    question: "La distribución hipergeométrica es apropiada cuando se realizan selecciones ______________ reemplazo.",
    type: "fillintheblank",
    correctAnswer: "sin",
    solution: "La distribución hipergeométrica se utiliza cuando las selecciones se hacen sin reemplazo."
  },
  {
    question: "La distribución binomial puede usarse en lugar de la hipergeométrica cuando el tamaño de la población es muy grande en comparación con el tamaño de la muestra.",
    type: "truefalse",
    correctAnswer: "Verdadero",
    solution: "Cuando N es mucho mayor que n, la diferencia entre muestreos con y sin reemplazo es insignificante, por lo que la distribución binomial aproxima bien a la hipergeométrica."
  },
  {
    question: "En la fórmula de la distribución hipergeométrica, el parámetro K representa el número de ______________ en la población.",
    type: "fillintheblank",
    correctAnswer: "éxitos",
    solution: "K es el número total de éxitos en la población."
  },
  {
    question: "Si extraemos cartas de una baraja estándar sin reemplazo, calcular la probabilidad de obtener cierto número de ases es un problema que involucra la distribución hipergeométrica.",
    type: "truefalse",
    correctAnswer: "Verdadero",
    solution: "Se aplica la distribución hipergeométrica porque las extracciones son sin reemplazo y se cuenta el número de éxitos (ases) en la muestra."
  },
  {
    question: "La varianza de la distribución hipergeométrica se calcula con la fórmula Var(X) = n * (K/N) * ((N - K)/N) * ((N - n)/(N - 1)). Aquí, el factor de corrección es ______________.",
    type: "fillintheblank",
    correctAnswer: "((N - n)/(N - 1))",
    solution: "El factor de corrección de la varianza debido al muestreo sin reemplazo es ((N - n)/(N - 1))."
  },
  {
    question: "En un muestreo aleatorio simple con reemplazo, es apropiado utilizar la distribución hipergeométrica para calcular probabilidades.",
    type: "truefalse",
    correctAnswer: "Falso",
    solution: "La distribución binomial es la apropiada para muestreos con reemplazo, mientras que la hipergeométrica es para muestreos sin reemplazo."
  },
  {
    question: "Cuando el tamaño de la muestra n es igual al tamaño de la población N, la varianza de la distribución hipergeométrica es ______________.",
    type: "fillintheblank",
    correctAnswer: "cero",
    solution: "La varianza es cero porque no hay variabilidad; toda la población es la muestra."
  },
  {
    question: "La distribución hipergeométrica se utiliza para modelos donde las probabilidades cambian después de cada ensayo debido al cambio en la composición de la población.",
    type: "truefalse",
    correctAnswer: "Verdadero",
    solution: "Sin reemplazo implica que la población cambia con cada selección, por lo que las probabilidades de éxito y fracaso varían después de cada ensayo."
  },
  {
    question: "Si K = N, entonces la distribución hipergeométrica es ______________ porque todos los elementos en la población son éxitos.",
    type: "fillintheblank",
    correctAnswer: "degenerada",
    solution: "La distribución es degenerada ya que siempre se obtienen éxitos cuando todos los elementos son éxitos (K = N)."
  }
];