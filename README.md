# **Atividade - React.JS + Node.JS/Express**

>_**Link do repositório:**_ https://github.com/ramonkjl/desafio-ideafix

### **Tecnologias usadas**
#### **TypeScript**
&nbsp;
Linguagem superset do **JavaScript** de tipagem estática.
#### **ReactJS**
&nbsp;
Biblioteca **JavaScript** para criar interfaces de usuário.
#### **NextJS**
&nbsp;
Framework **JavaScript** usado para otimização de aplicações web e renderização serve side.
#### **NodeJS**
&nbsp;
Runtime **JavaScript** que possibilita a execução do mesmo fora do navegador. Usado no back-end.
#### **Express**
&nbsp;
Framework **JavaScript** minimalista. Poderosa ferramenta para facilitar a implementação de rotas das aplicações.

**Mobile Gif**                                                     | **Desktop Gif**
-------------------------------------------------------------------|--------------------------------
<img src="./images/mobile.gif" alt="Git de exemplo" width="400px" height="420px"/>|<img src="./images/desktop.gif" alt="Git de exemplo" width="1080px"/>

**Mobile Image**                                                   | **Desktop Image**
-------------------------------------------------------------------|--------------------------------
<img src="./images/mobile.png" alt="Git de exemplo" width="340px"/>|<img src="./images/desktop.png" alt="Git de exemplo" width="1080px"/>

> Aplicação para criação e visualização de 'notas'.

### **Funcionalidades**
Tudo o que foi Exigido na descrição da atividade.

- [x] Dois campos por nota: Título e descrição.
- [x] Criação dinâmica das notas, sem limites.
- [x] Possibilidade de exclusão das notas.
- [x] Ser responsivo.
- [x] As notas criadas devem ser salvas em um banco de dados e recuperadas - Aplicação pode somente simular essa funcionalidade no back-end, com dados fictícios.
- [x] Separação do back-end e front-end em serviços diferentes.

### **Instruções**
_**Instruções validas tando para o diretório back-end quanto para o front-end.**_
&nbsp;
Para rodar a aplicação em localhost execute o server.
1) No diretório execute ```npm install``` ou ```yarn install``` para instalar as dependências.
2) Para rodar como desenvolvimento. basta o comando ```npm run dev ``` ou ```yarn dev```.
3) Para produção deve ser feito primeiro a build com ```npm run build``` ou ```yarn build``` e depois ```npm start``` ou ```yarn start``` para rodar a aplicação.

### _**Leitura de código.**_
&nbsp;
Somente tipos usados em mais de uma funcionalidade ficam no diretório **```@types```**.

&nbsp;
Devido ao meu querer entregar no prazo estabelecido não fiz algumas verificações necessárias em uma 
aplicação real, nem escrevi testes.

&nbsp;
No back-end a classe **```NotesDatabase```** no diretório **database/** foi feita para simular a interação com um banco de dados.

### Feito por [Ramon Nunes](https://ramonnunes.vercel.app)