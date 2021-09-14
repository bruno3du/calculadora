<h1>Calculadora</h1>

Este projeto foi criado com react, como o processo de componetização, deixou o programa bem mais clean de se visualizar, e criar funções com resposabilidades únicas facilitou em muito no tratante resolver bugs pelo caminho.

Quis fazer uma boa calculadora, sem os riscos que o função eval() poderia causar.

Nesta calculadora, procurei validar ao máximo alguns quisitos como:
- Não é possível colocar mais que 1 ponto (.) na numeração, que venha comprometer o calculo, como por exemplo colocar mais de um ponto sequencial, o que não faria sentido em um calculo matemático.
- Não é possível colocar mais que um sinal matematico ou operador sequencial. O mesmo é tratado.
- Ao clicar na tecla de "+" ou "-", identifica se naquele momento, trata-se de um operador ou um sinal de positivo e negativo.
- Se clicado no operador e não houve nenhum numero que o antecedesse, é posto "0" como numero.
- Se ao calcular fosse clicado o botão de resultado novamente, ele replicaria consequentemente o resultado comparado com o calculo anterior.
- Se ao calcular fosse clicado em outro numero (como nas principais calculadoras), ele reseta os números e pressupõe um novo calculo.
- Se ao calcular fosse clicado em um operador, pressupões um novo calculo com o resultado anterior como número a ser calculado.


Essas features foram algumas das quais lembrei, tentei me resguardar da maioria dos bugs possíveis e, transformando-o em uma calculadora operavel.


Veja você mesmo, confira de perto: <a href="calculadorabruno.netlify.app">Calculadora</a>
