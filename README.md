# 🚀 Spring Boot + React + Docker Compose

A full-stack CRUD application built with Spring Boot, React, MySQL, Docker, and Docker Compose.

---

# 📌 Technologies

### Backend
- Java 17
- Spring Boot 3
- Spring Data JPA
- Maven

### Frontend
- React 19
- Vite
- Axios

### Database
- MySQL 8

### DevOps
- Docker
- Docker Compose

---

# 📂 Project Structure

```
Springboot+react
│
├── Crud                 # Spring Boot Backend
│   ├── src
│   ├── Dockerfile
│   └── pom.xml
│
├── my-app               # React Frontend
│   ├── src
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yaml
└── README.md
```

---

# ⚙️ Features

- User CRUD
- REST API
- React Frontend
- MySQL Database
- Dockerized Backend
- Dockerized Frontend
- Docker Compose Deployment

---

# 🐳 Run with Docker Compose

Clone project

```bash
git clone https://github.com/quocvybe/springboot-react-docker-compose.git
```

Go to project

```bash
cd springboot-react-docker-compose
```

Start project

```bash
docker compose up --build
```

Run in background

```bash
docker compose up -d --build
```

Stop

```bash
docker compose down
```

---

# 🌐 Services

| Service | URL |
|----------|-----|
| React Frontend | http://localhost:5173 |
| Spring Boot API | http://localhost:8080/Crud |
| MySQL | localhost:3306 |

---

# 📷 Screenshots

## Home Page

(Add your screenshot here)

```
images/home.png
```

---

# 🛠 API Example

Get all users

```
GET /Crud/users
```

Create user

```
POST /Crud/users
```

Update user

```
PUT /Crud/users/{id}
```

Delete user

```
DELETE /Crud/users/{id}
```

---

# 📦 Docker

Build Backend

```bash
docker build -t backend ./Crud
```

Build Frontend

```bash
docker build -t frontend ./my-app
```

Run all services

```bash
docker compose up --build
```

---

# 👨‍💻 Author

**Quốc Vỵ**

GitHub:
https://github.com/quocvybe
