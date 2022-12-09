# Migrate Monolithic service to Microservices

## Clone repository

git clone [https://github.com/tamueka/microservice-section](https://github.com/tamueka/microservice-section)

---

## Install dependencies monolothic arquitecture

``` cmd
cd \microservice-section\monolithic

npm install
```

## Install dependencies microservices arquitecture

### User Microservice:

``` cmd
cd \microservice-section\microservices\user-service\

npm install
```

### Car Microservice:

``` cmd
cd \microservice-section\microservices\car-service\

npm install
```

### Book Microservice:

``` cmd
cd \microservice-section\microservices\book-service\

npm install
```

---

## Run docker compose

### Windows, Mac, Linux:
Check that the Docker daemon is running

``` cmd
docker compose up --build
```

---

## Go to browser

Monolithics Service routes:
* [http://localhost:8080/api/v1/users](http://localhost:8080/api/v1/users)
* [http://localhost:8080/api/v1/books](http://localhost:8080/api/v1/books)
* [http://localhost:8080/api/v1/cars](http://localhost:8080/api/v1/cars)

Microservice routes:
* [http://localhost:8080/api/v2/users](http://localhost:8080/api/v2/users)
* [http://localhost:8080/api/v2/books](http://localhost:8080/api/v2/books)
* [http://localhost:8080/api/v2/cars](http://localhost:8080/api/v2/cars)

## Stop docker compose

### Windows, Mac, Linux:
Check that the Docker daemon is running

``` cmd
docker compose down
```

---