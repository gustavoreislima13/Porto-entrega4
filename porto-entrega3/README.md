# React + Vite

Este projeto utiliza a configuração mínima para rodar React com Vite, oferecendo HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza o [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza o [SWC](https://swc.rs/) para Fast Refresh.

## Como usar Vite com React

1. Instale as dependências do projeto:
    ```bash
    npm install
    ```

2. Execute o servidor de desenvolvimento com Vite:
    ```bash
    npm run dev
    ```

3. Acesse a aplicação em seu navegador:
    ```bash
    http://localhost:3000
    ```

4. Para build de produção:
    ```bash
    npm run build
    ```

## Plugins React + Vite

- O plugin `@vitejs/plugin-react` usa Babel para proporcionar a funcionalidade Fast Refresh no desenvolvimento, o que permite que a aplicação atualize automaticamente sem perder o estado quando mudanças no código ocorrem.
- O plugin `@vitejs/plugin-react-swc` é uma alternativa que usa SWC (Super-fast Web Compiler), oferecendo um desempenho ainda melhor em compilações, especialmente em grandes projetos.

Certifique-se de escolher o plugin que melhor se adapta às suas necessidades. Para projetos pequenos e médios, ambos oferecem uma excelente experiência de desenvolvimento.

## FIGMA
https://www.figma.com/design/mHZOQWad8hmQU6vnQZ7ZNR/Porto-4?node-id=0-1&t=lkkh0FFHAcYfv6Bn-1
