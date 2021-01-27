# SalesLoft Code Test

## Code Test For SalesLoft
https://docs.google.com/document/d/1ChozkkouQrRESGlvZYEM4sNAyks5mK-cAODGSKvgYjM/edit

Backend was build in Elixir and Frontend in ReactJS

## Requirements

You need this software installed in your machine in order to execute the application.

-   [Docker](https://docs.docker.com/get-docker/) with docker compose.


## Installation

If you have all the requirements correctly installed your application will run.

---

If is the first time you run the application.

First add the .env files in these directories.

/backend/.env
```bash
MIX_ENV=dev
SALESLOFT_API_KEY=*YOUR_API_KEY*
SALESLOFT_ENDPOINT=https://api.salesloft.com/v2/
SALESLOFT_GET_PEOPLE=people.json

```

/frontend/.env
```bash
REACT_APP_API_URL=http://localhost:4000

```

After that only run this command

```bash
docker-compose up -d
```

Wait a moment and apllication should run on por 3000
http://localhost:3000

Run backend unit test

```bash
docker-compose exec salesloft_backend /bin/sh -c "MIX_ENV=test mix test"
```

Run frontend unit test

```bash
docker-compose exec salesloft_frontend /bin/sh -c "yarn test"
```
