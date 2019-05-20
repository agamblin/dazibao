#! /bin/sh

docker exec -it $(docker ps --filter "name=stack_client_web" -q | xargs) sh