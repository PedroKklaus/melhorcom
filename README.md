# User Management API

## Descrição
API RESTful desenvolvida com **Node.js**, **TypeScript** e **NestJS** para gerenciar usuários com funcionalidades básicas de CRUD (Create, Read, Update, Delete).

---

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **NestJS**: Framework backend para Node.js.
- **TypeScript**: Linguagem tipada para JavaScript.
- **PostgreSQL**: Banco de dados relacional.
- **PostGIS**: Extensão geoespacial para PostgreSQL.
- **Docker** e **Docker Compose**: Para gerenciamento de containers.
- **Swagger**: Documentação interativa da API.

---

## Requisitos
- **Node.js** (v18+)
- **Docker** e **Docker Compose**
- **Postman** ou qualquer cliente para testar APIs.

---

## Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio


Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

DB_HOST=db
DB_PORT=5432
DB_USER=usuario
DB_PASSWORD=projeto
DB_DATABASE=sistema-de-usuarios


Subir os Containers com Docker
Certifique-se de que o Docker está instalado e execute:
docker-compose up --build


Acessar a Documentação Swagger
A documentação interativa estará disponível em:
http://localhost:3000/api



Testes
Para rodar os testes unitários com Jest, execute:

npm run test

