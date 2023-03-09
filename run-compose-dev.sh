#!/bin/bash

# These environment variables are consumed by the docker-compose file.
export SECRET_KEY=abc123
export DEBUG=True
export API_KEY=someTestValue

docker-compose -f docker-compose.dev.yml up -d --build

# make sure the postgres container is ready, then run migrations
sleep 10 
docker exec solution-sidekick-api-1  python /src/manage.py makemigrations 
docker exec solution-sidekick-api-1  python /src/manage.py migrate