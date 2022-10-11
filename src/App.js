import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Errorpage from './component/Errorpage/Errorpage';
import Home from './component/Home/Home';
import QuizDetails from './component/QuizDetails/QuizDetails';
import Statistics from './component/Statistics/Statistics';
import Root from './Root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element: <Root></Root>, errorElement:<Errorpage></Errorpage>,
       children: [
        {
          path: '/', 
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
          
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
         element: <Statistics></Statistics>
        },
        {
          path: 'blog',
         element: <Blog></Blog>
        },
        {
          path:'home/course/:courseId',
          
          loader: async({params}) =>{
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
           },
           
          element: <QuizDetails></QuizDetails>
        },
        {
          path:'/course/:courseId',
          
          loader: async({params}) =>{
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseId}`)
           },
           
          element: <QuizDetails></QuizDetails>
        }
        
      ]
    }
  ])
  return (
    <div>
      
    
       <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
