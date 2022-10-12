import React from 'react';
import { useLoaderData } from 'react-router-dom';
 import  {ResponsiveContainer, BarChart, Bar , XAxis, YAxis ,Tooltip} from 'recharts'

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div className='w-[90%] mx-auto justify-center items-center my-10' >
          <ResponsiveContainer width= '100%'  aspect={3}>
             <BarChart data ={data.data} width={600} height ={400} >
                <XAxis dataKey= 'name' ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="total" fill='blue' ></Bar>
             </BarChart>
          </ResponsiveContainer>

          <h3 className='text-center text-2xl'>Quizes Barchart</h3>
           
        </div>
    );
};

export default Statistics;