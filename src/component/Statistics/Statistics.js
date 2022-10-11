import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
           <h1>Data </h1>
          {
             
                  <LineChart width={500} height={300} data ={data}>
                      <XAxis dataKey= {data.length} />
                   <YAxis  dataKey= 'name' />
                      
                  </LineChart>
                
          }

           
        </div>
    );
};

export default Statistics;