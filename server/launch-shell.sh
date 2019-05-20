#! /bin/sh

docker exec -it $(docker ps --filter "name=stack_api" -q | xargs) sh