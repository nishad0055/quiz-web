import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] mx-auto'>
           <div className=' p-3 border-2 border-black my-3'>
           <h2 className='text-xl font-bold'>Qu: What is the Porpus Of React Router</h2>
            <p>Ans:
            Router in React JS is a pure JavaScript package that allows you to use React to create complicated client-side apps. Initially launched in 2013, it has become one of the most prominent routing libraries in today's online applications.
            React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.
            </p>
            <h2  className='text-md font-bold'>Need For React Router</h2>
            <p>
            We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

            A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its  applications, check out this blog: Navigate React Router programmatically.
            </p>
           </div>
           <div className=' p-3 border-2 border-black my-3'>
              <h2 className='text-xl font-bold' >Qu:How Does Context Api Work</h2>
              <p>
              React context allows us to pass down and use  data in whatever component we need in our React app without using props.
              React context helps us avoid the problem of props drilling.
              Create context using the createContext method.
              Take your created context and wrap the context provider around your component tree.
              Put any value you like on your context provider using the value prop.
              Read that value within any component by using the context consumer.
              </p>
           </div>
            <div className=' p-3 border-2 border-black my-5'>
              <h2 className='text-xl font-bold' >Qu: UseRef Hooks</h2>
            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
            </div>
        </div>
    );
};

export default Blog;