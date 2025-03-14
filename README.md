# Dazibao

![Bintray](https://img.shields.io/static/v1.svg?label=Vers&message=1.0.0&color=9cf)
![Bintray](https://img.shields.io/static/v1.svg?label=Build&message=Passing&color=<green>)

Dazibao is a project in collaboration with [Hugo Gamblin](https://gamblinhugo.myportfolio.com/).
This project was presented as part of his final defense for his Master at [École de Condé](https://ecoles-conde.com/).

Dazibao is aimed to showcase various prints and their meaning on society in an interactive experience.

---

## Development

This project is composed of: 

1. **Node.js** for the server - serving as an admin door for content management as the use of a CMS was overkill.
2. **React** for the Web Client - No SSR involved.
3. An **NGINX** container, responsible for rerouting between the _client_ and _server_.

All the parts have been dockerized for an easy and accessible onboarding. 


## Getting Started

In order to make everything working, you'll have to follow some steps

### Prerequisites

All you need is docker. Download docker from their [site](https://www.docker.com/get-started).

Then, launch the following command in the root directory

First, clone the repository in recursive mode
```
git clone git@github.com:agamblin/dazibao.git
```

```
docker-compose up --build
```

### Installing

The website is available in [localhost:8081](http://localhost:8081)

The API is available in [localhost:8080](http://localhost:8080)

You can also access it by typing [localhost:8081/api](http://localhost:8081/api/) who will redirect you automatically to the API

## Database

The database is a MySQL 5.7 automatically created for you with docker


The database is available in localhost:33061 (127.0.0.1)


## Running the tests

To run the tests you'll have to follow some steps.

After launching 
```docker-compose up```

You can either go in the client direcotry and type ``yarn test``, same way for the server.
It will access automatically the container and launch the tests.

You can also specify a certain path for your test suit if you don't want all the tests to be run:

```yarn test /src/tests/your/super/test/suite```


#OR


Follow this commands:

#### 1. ```docker ps```
#### 2. Grab the ID of the API's container otherwise grab's the one from the client if you want to launch test on client
#### 3. ```docker exec -it {CONTAINER_ID} sh```
#### 4. ```yarn test```


## Deployment

Deployment is pretty straightforward. Actually we use some auto-deploy given by travis on AWS when we push on master branch. All is hosted on an elasticBeanstalk instance on the aws cloud.

## Built With

* [Express](http://expressjs.com/) - The web api framework used
* [React](https://reactjs.org/) - The web client framework used
* [Sequelize](http://docs.sequelizejs.com/) - The ORM used

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/esport-hatcher/stack-esport-hatcher/tags). .

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
