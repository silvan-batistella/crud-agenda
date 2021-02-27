# CRUD de Agenda

Esta aplicação tem por objetivo atender os pré-requisitos solicitados como teste para a empresa **Ponto Sistemas - Soluções Web**


**Descrição da Aplicação**

Foi desenvolvido um CRUD de Agenda de contatos, utilizando as seguintes tecnologias:
- Java 15
- NodeJS 14.16.0
- MySQL 8.0


**Aplicações requeridas para aplicação**

Como requisitos para rodar a aplicação é necessário possuir os seguintes softwares instalados:
- Java JDK 15 (Preferencialmente Oracle JDK)
- NodeJS v 14.16.0
- npm v 6.14.11
- MySQL 8.0


**Configurações de Ambiente**

- Para que a aplicação rode, será necessário criar a base de bados, para que isso seja feito, um script de SQL se encontra na raiz do projeto.
- Também será necessário editar as configurações de banco de dados no arquivo 'application.properties', onde será necessário informar o usuário do MySQL, com permissão de 'Admin', senha de acesso e o nome da Base de dados que será usada na String de Conexão.


**Uso da Aplicação**

Como a aplicação foi desenvolvida de forma separada, também foram feitas as requisições no "Insomnia" e exportadas, para que pudessem ser testadas de forma individual usando o "curl", que podem ser feitas para testar as requisições de back-end ao Java / Spring-boot, que também serão deixadas na pasta de "config-utils".

**OBS: Vale destacar que o comandos com curl são interessantes de serem rodados antes da execução da aplicação, pois os id são gerados dinamicamente pelo hibernate, a não ser que os comandos sejam editados.**

**Rodando a aplicação**
Para que aplicação rode será necessário rodar de forma separada o back-end e o front-end, onde será destacado como rodar cada uma das partes de forma separada.

- 1 - Back-end
Para rodar o back-end será necessário executar o arquivo 'AgendaApplication.java' podendo ser aberto na IDE de preferencia e executar o projeto como todo.

**OBS:** O back-end roda na porta '8080'.

- 2 -Front-end
Para rodar o front-end será necessário rodar o comando 'npm start' dentro da pasta 'front-agenda'.

**OBS:** O front-end roda na porta '4200' e poderá ser acessado pelo link: 'http://localhost:4200'


**Pastas principais dos projetos**

**[BACK]** = [raiz-projeto]

**[FRONT]** = [raiz-projeto]\front\front-agenda
