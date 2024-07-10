# Busca Natalidade 🧒

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


<img src="https://i.imgur.com/YJIrZBw.png" alt="Projeto Busca Natalidade" />

O **Busca Natalidade** é um aplicativo web que mostra os dados de natalidade, consumidos da API de Dados Agredados do IBGE - Censo 2010, por cada município brasileiro, através da interação do usuário com um mapa do Brasil e seus municípios renderizados em SVG ou através da busca em campos *select* pelo estado e município correspondente. Os dados são apresentados em forma de gráficos. **A aplicação ainda está em construção - ajustes visuais e no consumo da API estão em andamento!**

## Status

🚧 **Em andamento**

## Tecnologias utilizadas ⚙️

- React: UI;
- Vite: Ferramenta utilizada em conjunto com o React para melhorar a performance da aplicação tanto no desenvolvimento e como na experiência do usuário;
- Material UI: componentes de UI/UX;
- Biblioteca styled-components: criação dos temas padrões da aplicação e utilizado junto com a **ContextAPI** do React para prover o tema claro ou escuro, dependendo do que o usuário escolher;
- Axios: consumo da API do IBGE;
- Biblioteca react-simple-maps: renderização dos mapas em SVG, a partir de um arquivo *.geojson* (com o mapa do Brasil e os limites dos municípios);
- Paleta de cores: baseada nas paletas retiradas do site [Coolors](https://coolors.co/) - [Paleta 1](https://coolors.co/palette/8ecae6-219ebc-023047-ffb703-fb8500) e [Paleta 2](https://coolors.co/palette/bee9e8-62b6cb-1b4965-cae9ff-5fa8d3).

## Como rodar este projeto? 🚀

1 - Primeiro, clone este repositório:

```
  git clone https://github.com/moacirdavidag/busca-natalidade.git
```

2- Depois, vá até o diretório do projeto que foi clonado e instale todas as dependências do projeto:

```
  npm install
```

3- Por último, inicie o servidor de desenvolvimento local e rode o projeto! 🔥

```
  npm run dev
```

## Deploy 💻

Você também pode acessar este projeto acessando o link do *deploy* feito no **Netlify** clicando [aqui](https://buscanatalidade.netlify.app/).

  
