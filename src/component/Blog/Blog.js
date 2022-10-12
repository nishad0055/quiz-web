import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90] mx-auto bg-slate-400'>
            <h2>Qu: What is the Porpus Of React Router</h2>
            <p>Ans:
            Router in React JS is a pure JavaScript package that allows you to use React to create complicated client-side apps. Initially launched in 2013, it has become one of the most prominent routing libraries in today's online applications.
            React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.
            </p>
            <h3>Need For React Router</h3>
            <p>
            We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

            A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its  applications, check out this blog: Navigate React Router programmatically.
            </p>

        </div>
    );
};

export default Blog;