<p align="center"> 
	<img src="https://i.postimg.cc/T196WcHf/logo-4.png">
</p>


# EH-API

![Bintray](https://img.shields.io/static/v1.svg?label=Vers&message=1.0.0&color=9cf)
![Bintray](https://img.shields.io/static/v1.svg?label=Build&message=Passing&color=<green>)

### Setup

Please refer to the [stack repository](https://github.com/esport-hatcher/stack) to see how to launch the environment. 

Launch ```docker ps```and search for a ``api_web_1``container, if you see it then all is working.


### Tests

Their is two folders for testing:

- Integration tests
- Unit tests

Integrations tests are about the endpoints. They test the API as a real client would do.

Unit tests are more testing specific logic of the app. For example, test that a password is hashed before storing it in the database.


Their is many ways to launch tests. The first one is to launch all tests:

```yarn test```

You can either specifiy a certain testsuite to be run. For example let's say we developped our super test-suit, we don't want every test to be run every time. So we can specify the path.

```yarn test /src/tests/your/super/test/suite```


### Miscellanous

Sometimes you will want to access the docker container. You can type ```yarn shell```.

This is usefull when you want to add new packages to your project.
