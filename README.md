# Help Channel
O serviço que você precisa quando algo der errado.

---

## 🔍 Sobre o projeto

### 🎓 O que é?
Desenvolvido pelos alunos **Lucas Ferreira**, **Théo Gallo** e **Raphael Ferraz** (do curso de Análise e Desenvolvimento de Sistemas no Centro Universitário IESB) para compor a nota da disciplina _Construção Frontend_, o _Help Channel_ foi projetado para oferecer serviços de suporte ao usuário.

### 🦾 O que faz?
A plataforma web possui dois tipos de acessos, o de usuários comuns e o de funcionários, onde um cria requerimentos e o segundo soluciona, respectivamente.

### 🤖 Tecnologias utilizadas
- Docker;
- JavaScript;
- React
- Json-server;
- Tailwindcss.

## ⚙️ Instalação
Siga o passo-a-passo para a correta instalação e uso da aplicação.

### 1° passo - Clonagem do repositório
Em um terminal bash acesse uma pasta vazia e escreva: 
```
git clone https://github.com/LightThe/adS032-trabalho-frontend.git
```

O reposiótio será clonado para a pasta atual.

### 2° passo - Acessando o container
**❗Atenção: é obrigatório que o Docker esteja devidamente baixado e instalado em seu computador para poder rodar os comandos a partir daqui.**

Ainda na pasta do projeto recém clonado, escreva o seguinte comando para iniciar o container a partir do arquivo `docker-compose.yml`
```
docker compose up -d
```
❓O que acontecerá? O container será criado a partir do arquivo docker compose e a _flag_ **-d** permite que o mesmo permaneça em segundo plano sem que feche imediatamente.

Com o container levantado, escreva o seguinte comando para acessá-lo utilizando um terminal CLI.
```
docker container exec -it projeto-frontend-react bash
```
Para finalizar, entre na pasta `projeto-help-channel`.
```
cd projeto-help-channel
```

### 3° passo - Instalação de dependências
Já dentro do container e da pasta principal, escreva o comando abaixo para instalar as dependências descritas no arquivo `package.json`.
```
npm install
```

### 4° passo - Acessando frontend e backend
Tenha certeza que há dois terminais abertos, um para o frontend e outro para backend (repita o 2° passo).

Criando o **frontend**
```
npm run dev -- --host
```
❓ O que acontecerá? A _flag_ **-- --host** abrirá uma porta de acesso local.

Criando o **backend**
```
npm run test
```
❓ O que acontecerá? A API REST será acessível pela porta **:3000**.

## ⚡ Utilização
Mais detalhes sobre o comportamento da aplicação.

### 🌐 Endpoints

Endpoint time de suporte: ``http://localhost:3000/administracao``

Endpoint cliente: ``http://localhost:3000/clientes/novo-cliente``

**Métodos:**
- GET (Listagem de tickets): ``*/tickets``
- GET (Abrir ticket): ``*/tickets/:ticketId``
- POST (Cliente criando ticket): ``/ticketS``
- GET (Busca ticket específico de um cliente): ``/clientes/:id/tickets/:ticketId``
- PATCH (Adiciona comentário ao ticket): ``/clientes/:id/tickets/:ticketId``
- POST (login): ``administracao/:id``
- POST (Criar usuário funcionário): ``administracao/novo-usuario``
- PATCH (Adicionar funcionário a um ticket): ``/administracao/tickets/:ticketId``

---

## ⭐ Agradecimentos
Foi graças à orientação do [Professor José Reginaldo](https://github.com/profjosereginaldo) que fomos capazes de desenvolver a atividade de maneira técnica e mantendo as boas práticas exigidas no mercado de trabalho.

Muito obrigado por todo conhecimento acumulado durante as aulas e fora delas a partir das atividade práticas!
