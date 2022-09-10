# Descripcion de Metodología de Desarrollo
## _Metodología Ágil y Scrum_

Este proyecto se trabajo con un enfoque de una metodología ágil, la cual tiene como principal caracteristica ser iterativo en cuanto a gestión de proyectos y desarrollo en software. 

Para ser mas especificos se trabajo la metodología scrum, la cual permite un trabajo colaborativo. Scrum se considera en algunas ocasiones un marco de trabajo ágil. Ademas de ser utilizada con mas frecuencia en el desarrollo de software, la metodologia scrum incluye realizar varias reuniones, tener herramientas de trabajo y funciones que ayudan al equipo a estructurar/gestionar el trabajo.

### Fases de metodología Scrum

* Planificación: Product Backlog
    Product Backlog es la fase en la que se enlistan las tareas prioritarias para el proyecto en desarrollo. No es necesario enlistar todas las tareas en un inicio, ya que es un proceso iterativo. Esta fase tiene permitido cambiar y crecer tantas veces como sea necesario en funcion del desarrollo del proyecto/producto.

* Ejecución: Sprint
    El Sprint es una de las cosas mas importantes en la metodologia Scrum, es un tiempo que como maximo tiene una duración de un mes y es la fase donde se produce el desarrollo de un producto que es entregable.

    Dentro del sprint hay varias fases a tomar en cuenta:
    
    * **Sprint Planning Meeting:**  reunión con el equipo para definir las tareas que se abordarán y cual sera el objetivo del sprint. Se concentra en contestar ¿ Que se va a hacer en el sprint? ¿Como se va a hacer?
    * **Scrum diario o Daily Scrum:** Son 15 minutos como máximo diarios para poder definir que se hará en el día y tener la oportunidad para inspeccionar el trabajo. Se concentra en contestar ¿Que hice ayer? ¿Que hare hoy? ¿Hay algun impedimento?
    * **Sprint Review:** Unica reunion a la que el cliente asiste. Se hace al final del sprint y tiene una duracion de 4 horas. El cliente valida los cambios y realiza un feedback para agregar tareas al Product Backlog. Se concentra en contestar ¿Que se logro en el sprint? ¿ Se cumplio la meta?
    * **Sprint Retrospective:** Ultimo evento de Scrum, oportunidad del equipo para inspeccionarse a asi mismo. Se concentra en contestar ¿ Que se puede mejorar ? ¿ Como se puede ser mas productivo ?
    
### Justificacion de Metodologia Scrum
*   Los planes, requisitos y resultados son evaluadas de manera continua en el proyecto. Esto hace **el equipo actue con rapidez** con los cambios que va teniendo el proyecto.
*  El **product Backlog evoluciona** y crece mientras el proyecto por fases se va desarrollando, por lo que scrum es una buena metodologia a seguir.
*  Scrum es ideal para grupos que tienen entre tres y nueve miembros, **siendo nuestro grupo de cuatro integrantes**, scrum es ideal.
*  El aspecto mas importante es que Scrum **responde al cambio**, este proyecto es manejado por fases, por lo que el cambio sera dado constantemente.

# Descripcion de Modelo de Branching
## _Modelo Git Flow_
Git flow es un flujo de trabajo basado en Git, con este modelo se tiene un mejor control y organizacion en el proceso de integración continua. 

### Funcionamiento e Implementación
* Creacion de Rama Develop: En lugar de solo tener una rama main, este modelo trabaja con una rama develop que funciona como integracion de las funciones de aplicacion.

* Funcionamiento de Rama Main: La rama main solamente funcionara como historial de publicaciones oficiales de la aplicacion.

* Funcionamiento de Ramas de Funcion (Ramas Feature): Las funciones que seran implementadas en la aplicación tendrán su propia rama. Al finalizar la implementacion estas son enviadas al repositorio central. Estas son ramificadas a la rama develop.

* Funcionamiento de Ramas de publicacion (Releases): Cuando nuesta rama develop adquiera las implmenetaciones necesarias para una version o publicacion se debe realizar una rama a partir de la rama deelop. En esta rama no se implementan nuevas funciones, solo corregimiento de errores. Al finalizar la rama se debe fusionar en la rama main y tambien debe fusionarse con la rama develop, ya que se pudieron haber corregido errores que la rama develop aun tendria.

*  Funcionamiento de Ramas de Correccion (HotFix): Reparan rapidamente las publicaciones de produccion. Estas ramas se basan en la rama main (y es la unica). Al finalizar de reparar rapidamente en la rama, debe realizarse la fusion a la main directamente y tambien en la develop para aplicar cualquier cambio no realizado. Esta seria otra version de la rama main.

### Comandos Git Flow
* Inicialización de repositorio con git flow. Automaticamente se crea la rama develop.
```sh
$ git flow init

Initialized empty Git repository in ~/project/.git/
No branches exist yet. Base branches must be created now.
Branch name for production releases: [main]
Branch name for "next release" development: [develop]


How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```

* Creacion de Ramas de Funcion o Features: Esto nos creara una rama para implementar una funcion en la aplicación a partir de la rama develop actual.
```sh 
$ git flow feature start feature_branch
```

* Finalizar Ramas de Funcion o Features: Esto nos hara un merge a la rama develop de la funcion implementada en la rama feature. 
```sh 
$ git flow feature finish feature_branch
```

* Creacion de Ramas de Publicacion o Releases: Creara una rama a partir de la rama develop con las funciones implementadas. 
```sh 
$ git flow release start version
```

* Finalizacion de Ramas de Publicacion o Releases: Realizará un merge a la rama main con los errores corregidos en la rama release y tambien hara merge a la rama develop con los errores corregidos en la rama release.
```sh 
$ git flow release finish version
```

* Creacion de Ramas HotFix o de correccion: Creara una rama de hotfix a partir de la rama main.
```sh 
$ git flow hotfix start hotfix_branch
```

* Finalizacion de ramas Hotfix: Realizara un merge de la rama hotfix a la rama main y tambien a la rama develop para realizar los cambios de las correcciones en la rama develop.
```sh 
$ git flow hotfix finish hotfix_branch
```

[//]: # (Links consultados para realizar la descripcion de metodologias de desarrollo y modelo branching)
   [Metodologia Scrum]: <https://www.atlassian.com/es/agile/scrum>
   [Metodologia Scrum 2]: <https://www.wearemarketing.com/es/blog/metodologia-scrum-que-es-y-como-funciona.html#>
   [Metodologia Ágil]: <https://www.atlassian.com/es/agile>
   [Modelo Branching]: <https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=%C2%BFQu%C3%A9%20es%20Gitflow%3F,vez%20y%20quien%20lo%20populariz%C3%B3.>


