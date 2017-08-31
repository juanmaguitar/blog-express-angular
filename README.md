# Project Super COOL

## Installation  

To install the dependencies needed for this project you must do first of all

```
npm install
```

## (local) Use

In order to have this project working you'll need a `.env` file w/ the following settings:

```
PORT=XXXX
DB_URI=XXXXXXXXXXXXXXXX
```

## Register

```
curl localhost:3000/admin/register \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "username": "juanma", "password": "12345" }'
```

## Login

```
curl localhost:3000/admin/login \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{ "username": "juanma", "password": "12345" }'
```

## GET w/o JWT

```
curl localhost:3000/private
```

## Auth w/ JWT

```
curl localhost:3000/data \
  --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5YTg1MGQwMjg0NWE2N2RiY2Y1Y2Y2MyIsInVzZXJuYW1lIjoianVhbm1hIiwiaWF0IjoxNTA0MjAzMDYxfQ.zL142hQ31GgwLShiSg2SEeP1voyGgnrWBeRO1j_EoSs"
``
