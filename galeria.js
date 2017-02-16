// JSON contendo todos os dados

galeria = {
  "algoritmos_e_programacao_de_computadores" : {
    titulo: "ALGORITMOS E PROGRAMAÇAO DE COMPUTADORES",
    autores: "DILERMANDO PIVA JUNIOR, ANGELA DE MENDONÇA ENGELBRECHT, GILBERTO SHIGUEO NAKAMITI, FRANCISCO BIANCHI",
    editora: "CAMPUS",
    ano: "2012",
    resumo: "Com estrutura que busca ser didática e contribuições significativas, o objetivo de 'Algoritmos e programação de computadores' é tornar o processo de aprendizagem de programação de computadores menos traumático para o estudante da disciplina. Nele, cada tema é trabalhado a partir de uma situação-problema, passando pela resolução da situação, ampliação do tópico, conceituação e aplicação em diversas linguagens de programação e, por fim, pelos exercícios de fixação.",
    imagem: "imagens/algoritmos_e_programacao_de_computadores.jpeg"
  },

  "curso_essencial_de_logica_de_programacao": {
    titulo: "Curso essencial de lógica de programação",
    autores: "Marilane Almeida",
    editora: "Universo dos Livros",
    ano: "desconhecido",
    resumo: "A lógica de programação tem como objetivo principal definir, de forma lógica, os métodos para solucionar um determinado problema. Dessa forma, ela fornece uma base de raciocínio fundamental para qualquer profissional que deseja atuar na área de programação de softwares.",
    imagem: "imagens/curso_essencial_de_logica_de_programacao.jpeg"
  },

  "programming_ruby": {
    titulo: "Programming Ruby",
    autores: "Andy Hunt, Dave Thomas",
    editora: "Pragmatic Programmers",
    ano: "2004",
    resumo: "Ruby is the fastest growing and most exciting dynamic language out there. If you need to get working programs delivered fast, you should add Ruby to your toolbox. This book is the only complete reference for both Ruby 1.9 and Ruby 2.0, the very latest version of Ruby.",
    imagem: "imagens/programming_ruby.jpeg"
  },

  "learning_java": {
    titulo: "Learning Java",
    autores: "Jonathan Knudsen, Patrick Niemeyer",
    editora: "O'Reilly",
    ano: "2000",
    resumo: "Java is the preferred language for many of today’s leading-edge technologies—everything from smartphones and game consoles to robots, massive enterprise systems, and supercomputers. If you’re new to Java, the fourth edition of this bestselling guide provides an example-driven introduction to the latest language features and APIs in Java 6 and 7. Advanced Java developers will be able to take a deep dive into areas such as concurrency and JVM enhancements.",
    imagem: "imagens/learning_java.jpeg"
  },

  "construcao_algoritmos_estruturas_de_dados": {
    titulo: "Logica de programação: a construção de algoritmos e estruturas de dados",
    autores: "André Luiz Villar Forbellone, Henri Frederico Eberspacher",
    editora: "Pearson",
    ano: "2005",
    resumo: "Este livro introduz o leitor no universo da lógica aplicada à programação de computadores. Ao final do estudo, o aluno estará capacitado a construir algoritmos, assim como a assimilar mais facilmente qualquer linguagem de programação existente ou futura. O texto não requer nenhum conhecimento prévio de informática e é independente de características de máquina. Cada capítulo conta com exercícios de fixação, que visam sedimentar os assuntos de cada subitem, e com exercícios propostos, que cobrem todo o conteúdo do capítulo. No anexo encontram-se resoluções dos exercícios de fixação. A pseudolinguagem utilizada é intencionalmente próxima das linguagens de programação comumente adotadas como primeira linguagem, para facilitar a posterior tradução e implementação prática.",
    imagem: "imagens/construcao_algoritmos_estruturas_de_dados.jpeg"
  }
}


// Código que pega o parâmetro da URL. Copie e cole no seu código
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Função que leva um item do JSON para a página
function exibeDetalhes(item) {
  document.getElementById("imagem_detalhes").src = item.imagem;
  document.getElementById("titulo_detalhes").innerHTML = item.titulo;
  document.getElementById("resumo_detalhes").innerHTML = item.resumo;
  document.getElementById("autores_detalhes").innerHTML = item.autores;
  document.getElementById("editora_detalhes").innerHTML = item.editora;
  document.getElementById("ano_detalhes").innerHTML = item.ano;
}

// Seleciona o item do JSON a partir do código que veio da URL
var codigo = getParameterByName('codigo');
exibeDetalhes(galeria[codigo]);
