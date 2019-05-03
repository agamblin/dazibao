<p align="center"> 
	<img src="https://i.postimg.cc/T196WcHf/logo-4.png">
</p>

# WORKFLOW / ESPORT-HATCHER


# Norme des commits

## Feature
feat(register): added register logic for simple users on server

## Fix
fix(register): fixed crash when creating a new user with server

## Refacto
refacto(register): dispatched logic in both controller and factory

## Tests
test(register): added tests for unique emails



# Norme des branches
## Feature
feature/auth/register 

## Fix
fix/auth/register

## Refacto
refacto/auth/register

## Tests
tests/auth/register



# Workflow
## Quand créer une branche ?

Lors du développement d’une nouvelle feature/fix/refacto/test (ici dans notre exemple un register), toujours créer une nouvelle branche à partir de “develop”.

Develop est sensé être et rester toujours la branche la plus à jour, sachant que la branche master est réservée à la release soit à la branche stable.

## CI

Lorsque vous pusherez votre code sur votre nouvelle branche, les tests unitaires seront automatiquement lancé. Vous pouvez en avoir le détail sur (www.travis-ci.com).

 ![CI](https://i.ibb.co/6b4N3Dh/Screenshot-2019-04-05-at-10-51-42.png)

Pour pouvoir lancer les tests en local, cela requiert plusieurs steps. Après avoir effectuer le docker-compose up (qui doit normalement toujours être up pour accéder au site), vous pouvez:

#### 1. ```docker ps```
#### 2. Chopper l'id du container api si vous voulez lancez les tests sur l'api sinon choppez celui du client
#### 3. ```docker exec -it {CONTAINER_ID} sh```
#### 4. ```yarn test```

## PR

Une fois votre travail fini, testé et opérationnelle, vous pouvez lancer une pull request depuis github.

![PR](https://i.ibb.co/SPbfKf3/Screenshot-2019-04-05-at-10-54-31.png)

Une pull request est ce qui permet de combiner en toute sécurité le code de deux branches. Ici, nous voulons intégrer votre nouvelle super feature à la branche develop.

Vous devez maintenant vous occupez de remplir les champs:

![Details pr form](https://i.ibb.co/LhrgM7w/Screenshot-2019-04-05-at-10-58-08.png)

#### 1. Correspond à la branche "target", c'est à dire la branche sur laquelle votre code va être mergé. La norme est de mettre toujours develop.

#### 2. Correspond à votre branche contenant votre feature, faites bien attention à selectionner la votre.

#### 3. Permet de mettre quelques commentaires, une bonne pratique est de mettre la carte trello correspondant à la PR.

Une fois tous les champs remplis, créez la pull request. Pour que votre code soit intégré il faudra que deux autres développeurs valident la pull request.

#### Il est très important de ne pas valider les PR sans regarder le code correspondant. Le système est mis en place afin que l'ensemble du groupe soit coordonné et puisse regarder le code des autres groupes avant d'être intégré. Soyez donc rigoureux lorsque vous évaluez une PR.

Une fois votre PR mergé, faites attention de bien pull develop avant de créer une nouvelle branche.



# TRELLO

L'équipe Esport-Hatcher contient 3 board trello

1. API
2. Client Web
3. Client Mobile

Il est important pour une bonne organisation de respecter la logique lié à chaque board. 
Lors du développement d'une nouvelle feature, cela commence d'abord avec mon binôme par une phase de découpage.

## Cards

Par exemple, il m'est demandé de développer un système d'authentification pour l'API, je vais donc créer comme cartes:

1. Login logic
2. Register logic
3. [...]

Mais cela ne s'arrête pas là, pour chaque carte je dois mettre des spécificités. 

![Example trello card](https://i.ibb.co/D7kCPzs/Screenshot-2019-04-05-at-11-13-52.png)


Ici l'on peut voir que pour ma card "register logic" j'ai mis plusieurs checklist. L'une correspond aux règles à respecter pour considérer la tâche comme faite, ici il s'agit de règles de validation.

La seconde correspond aux TU ou TI qui vont être réalisé en rapport avec la tâche, il faut toujours les définir avant de s'attaquer au développement. Ici il est nécessaire de vérifier que chaque email est unique dans la database et que je chaque ajout est bien enregistrer en base.


## Lists

Chaque board trello contient 5 listes.

![board](https://i.ibb.co/6XFQ75J/Screenshot-2019-04-05-at-11-08-41.png)

1. To-Do: Liste les tâches à réaliser
2. Ready: Listes les tâches à réaliser et faisables maintenant/urgentes
3. Doing: Listes les tâches en cours de développement
4. Pull Request: Liste les tâches finies en cours de review sur github
5. Done: Listes des tâches réalisées

Il est important de bien assigner les membres relatifs à chaque carte.
