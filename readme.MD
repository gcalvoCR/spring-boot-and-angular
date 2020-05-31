# spring-boot-and-angular

In this repo I put together a fullstack development project using:

1. Angular for the front-end.
2. Spring Boot for the back-end.


## General commands

1. Angular
  - Installation `npm install -g @angular/cli`
  - Check installation `ng version`
  - Build and run app `ng serve`
  - To create a component `ng generate component NAME` or `ng g c NAME`


## Lessons and take-aways

-  `LINT` is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. To run the tool type `ng lint`
- `DIST` is the only folder you need to deploy your code. Take that folder, put it in a web server to run the app, and that's it. To generate it run `ng build`.
- `e2e testing` is a testing methodology that simulate the real user scenario and validate the system under test and its components for integration and data integrity. To run e2e tests type `ng e2e`.



## Dictionary
 - Interpolation - `{{ data }}`
 - Event binding - `(click)=handleAction()`
 - 2way binding - `[(ngModel)]="property"` *banana in a box*
 - Angular directives - Additional attributes on top in HTML, i.e. `ngModel`
 - Angular directive --> `*ngIf="property"` 


### Useful links for examples

- [UDEMY COURSE](https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/)

___

### By Gabriel Calvo Vargas

¿Do you want to get in touch? Let's do it [here](https://www.linkedin.com/in/gabriel-calvo-vargas-932b3357/)! 
