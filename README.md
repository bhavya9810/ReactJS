# ReactJS

All about react and its practice-projects

#Parcel

- It creates Dev Build for the App.
- It creates local server.
- HMR (Hot Module Replacement) in Parcel is a feature that allows you to see changes in your application reflected instantly in the browser without needing to refresh the entire page. It speeds up the development process by preserving the application state and only updating the parts of the application that have changed.
- file watching alogorithm
- gives faster builds because of caching
- will do image optimization as well
- during production build it will do minification of our files also
- will do bundling of files also
- will compress files also
- differential bundling - support older browsers
- better error suggestions,error handling
- tree shaking - remove unused code
- different dev and production bundles

#JSX

- JSX is not like html inside Javascript. It is html like syntax or xml like syntax.
- JSX converts into React.createElement() (Babel transpiles JSX into React.createElement)
- then it converts into React Elements (objects).
- then using root.render method it converts in html elements.

#React Component

- React has 2 types of component  
  -Class based component(old way to create component)
  -Functional component(new way to creating component)

- Functional component is just a javascript function

#Redux-toolkit

- How to write data in Redux Store

Let's take an example of add to cart functionality. When we click on add to cart button it dispatches an action which calls a reducer function which modifies/updates the slice of the redux store. This i how we can write in our redux store.

- How to read data from Redux store

we will use selector here and that selector updates changes in our redux store. This phenomena is called Subscribing to the store.
