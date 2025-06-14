# 🎵 MusicStore

Projeto de e-commerce desenvolvido com **React** e **Firebase Firestore**.

## 🚀 Funcionalidades

- Lista de produtos com filtro por categoria
- Página de detalhes dos produtos
- Carrinho de compras com Context API
- Checkout e registro do pedido no Firebase
- Navegação SPA com React Router

## 🧪 Tecnologias

- React  
- React Router DOM  
- Firebase Firestore  
- Context API  
- Vite  

## ▶️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/amandaccunha/coderecommerce.git
cd coderecommerce

Instale as dependências:
npm install

Configure o Firebase criando o arquivo src/firebase/config.js com o seguinte conteúdo:
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
Crie um arquivo .env na raiz do projeto com as variáveis do Firebase:
VITE_FIREBASE_API_KEY=Sua_API_Key_Aqui
VITE_FIREBASE_AUTH_DOMAIN=Seu_Auth_Domain_Aqui
VITE_FIREBASE_PROJECT_ID=Seu_Project_ID_Aqui
VITE_FIREBASE_STORAGE_BUCKET=Seu_Storage_Bucket_Aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=Seu_Messaging_Sender_ID_Aqui
VITE_FIREBASE_APP_ID=Seu_App_ID_Aqui

Inicie o servidor de desenvolvimento:
npm run dev