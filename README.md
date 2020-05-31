## Assignment
Write a simple single-page app for event administration in vanilla Javascript (but also feel free to use any JS framework you see fit, if it helps you).
The app should have a list of upcoming and past events and a form for creating a new event.
When user selects an event on the list, details of the event should appear somewhere.


The point of this is to demonstrate your programming habits and show styling (CSS) skills.


Moreover, if you decide to use a framework or library (or not to use any), please give a brief explanation why.

------

### Technologies to consider

### [React]
**Advantages**:
- virtual DOM
- SSR server side rendering
- Usage among developers 31.3% [source]
- library (gives flexibility)
- possibility of using Flow, TypeScript
- component oriented structure
- testability
- possibility to plug only on parts of existing project
- open source backed by Facebook
- strong community

**Disadvanatges**:
- many libraries, no fixed standard

### [Angular]
**Advantages**:
- virtual DOM
- SSR server side rendering
- Usage among developers 30.7% [source]
- component oriented structure
- testability
- TypeScript out of box
- dependency injections, annotations
- suitable for bigger project
- convetions
- Open source backed by Google
- strong community

**Disadvanatges**:
- more robust
- less flexibility

### [Vue]
**Advantages**:
- open source (backed by multiple companies and developers)
- possibility to plug only on parts of existing project
- reusable components
- testability
- virtual DOM

**Disadvanatges**:
- relatively small usage 15.2% [source]
- lack of support
- less plugins

### [jQuery]
**Advantages**:
- Usage among developers 48.7% [source]
- easy import
- small library

**Disadvanatges**:
- speed due to direct interactions with DOM
- less suitable for more complex systems
- small library
- less plugins
- no components

#### Conclusion

From a basic review of multiple Js frameworks and libraries available, my choice for this assignment is ReactJs.
In my opinion, for this project it gives the best of what I need.


### Some of the interesting libraries
- Tests - [Jest]
- Static type check - [flow] (some things need to be said)
- State handling - [redux], [redux-mock-store], [redux-persist], [Ducks] (because it's clean and clear)
- Network communication - [axios], [axios-middleware], [axios-mocks]
- Basic view components - [material-ui], [material-ui-icons], [material-ui-pickers] (For a project like this, it makes UX awesome and we don't reinvent the wheel. Users are familiar with components and still, it gives us enough space to express almost any brand specifics)
- Form handling - [Formik], [Yup] (makes forms less verbose)

### Future work
- Notify the user about server call results (error handling, created Event,...), other features like editing of the event, etc.
- Improve mobile UX
- Multilanguage
- Include more tests
- Continuous integration
- Implement SSR
- Quality of code metrics: test/documentation coverage
- Possibly when dealing with huge data, New Relic to analyse possible bottlenecks

### TODO list
- :white_check_mark: init the project libraries
- :white_check_mark: mocks for API
- :white_check_mark: basic structer for routes
- :white_check_mark: basic view for list of (upcoming/past) events
- :white_check_mark: unit tests (In this example project, there are only few included. In the real world project I'd prefer to test a bit more if possible)
- :white_check_mark: detail of an event
- :white_check_mark: adding new event
- :white_check_mark: style the app

## Final thoughts
This little assignment serves to demonstrate some basic programming habits. There is space to include more functionality as well as tests or devops. Using Formik makes forms less verbose. There is a drawback, that it needs additional libraries to work with material-ui as well as material-ui-pickers. In this project, I used it with Yup. A library to validate inputs of the form. It serves the purpose well enough for this assignment. Although it comes with a price of compatibility with highly customized inputs. If I'm to write more complex business logic to validate a form (e.g. many interconnected inputs, validating wihting each others), I wouldn't use this 3rd party library and write the whole validation by myself.

[source]: https://insights.stackoverflow.com/survey/2019#technology-_-web-frameworks
[React]: https://reactjs.org/
[Angular]: https://angular.io/
[Vue]: https://vuejs.org/
[jQuery]: https://jquery.com/

[Jest]: https://jestjs.io/
[flow]: https://github.com/facebook/flow
[redux]: https://github.com/reduxjs/redux
[redux-persist]: https://github.com/rt2zz/redux-persist
[axios]: https://github.com/axios/axios
[axios-middleware]: https://github.com/svrcekmichal/redux-axios-middleware
[axios-mocks]: https://github.com/ctimmerm/axios-mock-adapter
[material-ui]: https://github.com/mui-org/material-ui
[material-ui-icons]: https://github.com/mui-org/material-ui/tree/master/packages/material-ui-icons
[Ducks]: https://github.com/erikras/ducks-modular-redux
[redux-mock-store]: https://github.com/reduxjs/redux-mock-store
[Formik]: https://github.com/jaredpalmer/formik
[Yup]: https://github.com/jquense/yup
[material-ui-pickers]: https://material-ui-pickers.dev/
