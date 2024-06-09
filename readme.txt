O repositório ChatBot apresenta um estudo referente ao curso da plataforma Alura: Gemini e Node.js: integrando sua aplicação com a API do Google.

Os arquivos criados possuem os respectivos objetivos:

index.js: Classe responsável por toda a estrutura de implementação de código.

modelo.js: a API Gemini possui alguns modelos que podem serem usados. Será passado por parâmetro o modelo, e já vamos devolver esse modelo para que seja usado nos outros arquivos.

pergunta.js: Colocamos um texto e ele devolve o que foi digitado no terminal.

perguntaLivre.js: Responsável pela proposta de ser realizado uma pergunta livre a respeito do nicho de viagens.

processaImagem.js: Responsável por processar uma imagem na intenção de que seja feito um comentário a partir da imagem lida pela AI.

Arquivos nativos: package.json e package-lock.json

OBS: o arquivo .env precisa de uma variavel de ambiente contendo a chave da API Gemini.
