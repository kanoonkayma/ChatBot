import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { fazerPergunta } from './pergunta.js';
import { perguntar } from './perguntaLivre.js';
import { consultar } from './consultaDestino.js';
import { processaImagem } from './processaImagem.js';

dotenv.config();

// criar a chave de api pra acessar via variavel de ambiente
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  3. Ver informações com base na imagem;
  \nOpção desejada: `);

  if (escolha === '1') {
    await perguntar();
  } else if (escolha === '2') {
    await consultar();
  } else if (escolha === '3'){
    const imagem = await fazerPergunta("\nMe informe o caminho completo e nome da imagem: ")
    await processaImagem(imagem);
  } else {
    console.log('Escolha inválida.');
  }
}

principal();
