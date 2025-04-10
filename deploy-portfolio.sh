#!/bin/bash

# Solo desplegar si es push a production
if [[ "$1" == "refs/heads/production" ]]; then
  echo "Actualizando repositorio y reiniciando contenedor..."

  git pull origin main
  docker compose down
  docker compose up -d
else
  echo "Push a otra rama: $1. No se hace nada."
fi
