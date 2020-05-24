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
- small usage 15.2% [source]
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

From a basic review of multiple Js frameworks available, my choice for this assignment is ReactJs.
In my opinion, for this project it gives the best of what I need.


### List of libraries
- Tests - [Jest]
- Static type check - [flow] (some things need to be said)
- State handling - [redux], [redux-persist], [Ducks] (because it's clean and clear)
- Network communication - [axios], [axios-middleware], [axios-mocks]
- Basic view components - [material-ui], [material-icons] (for a project like this, it makes UX awesome and we don't reinvent the wheel)

### Future work
- Implement SSR
- Quality of code metrics: test/documentation coverage
- Possibly when dealing with huge data, New Relic to analyse bottlenecks

### TODO list
- :white_check_mark: init the project libraries
- :pencil: mocks for API
- :x: basic structer for routes
- :x: basic view for list of (upcoming/past) events
- :x: write tests for view
- :x: detail of an event
- :x: adding new event
- :x: style the app

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
[material-icons]: https://github.com/mui-org/material-ui/tree/master/packages/material-ui-icons
[Ducks]: https://github.com/erikras/ducks-modular-redux
