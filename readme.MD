# spring-boot-and-angular

In this repo I put together a simple fullstack development project using:

1. Angular for the front-end.
2. Spring Boot for the back-end.


## General commands

1. Angular
  - Installation `npm install -g @angular/cli`
  - Check installation `ng version`
  - Build and run app `ng serve`
  - To create a component `ng generate component NAME` or `ng g c NAME`
  - To create services `ng generate service NAME` or `ng g s NAME`. It's better to have `ng generate service service/NAME`


## Lessons and take-aways

-  `LINT` is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. To run the tool type `ng lint`
- `DIST` is the only folder you need to deploy your code. Take that folder, put it in a web server to run the app, and that's it. To generate it, run `ng build`.
- `e2e testing` is a testing methodology that simulates real-user scenarios and validates the system under test entirely (taking in count the integrity of its components and data). To run e2e tests type `ng e2e`.
- A `Module` is a group of components and/or directives that is dedicated to a specific purpose.
- Use `routerLink` rather than `href`. `routerLink` just routes the part of the page that should change. `href` refreshes the whole site.


## Dictionary
 - Interpolation - `{{ data }}`
 - Event binding - `(click)=handleAction()`

 - Angular directives - Additional attributes on top of HTML, i.e. `ngModel`
    -  `[(ngModel)]="property"` *banana in a box* - 2way binding
    -  `*ngIf="property"` for condidionals
    -  `*ngFor="let property of arrayProperty"` for loops

 - ActivatedRoute --> Object that has the info of the active route

 - Routing directives - Additional attribute on top  of HTML related to routing
    -  `<a> routerLink="/ROUTE" </a>` redirects to /ROUTE

 - Pipes are ways to format data
    - `date` formats date from `Sun May 31 2020 10:07:29 GMT-0600 (Central Standard Time)` to `May 31, 2020`
    - `uppercase`
    - `lowercase`



### Useful links for examples

- [UDEMY COURSE](https://www.udemy.com/course/full-stack-application-development-with-spring-boot-and-angular/)

___

### By Gabriel Calvo Vargas

¿Do you want to get in touch? Let's do it [here](https://www.linkedin.com/in/gabriel-calvo-vargas-932b3357/)! 
