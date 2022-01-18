import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

const ChartCode = ({chartType}) => {
    const labels = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
    const data = {
        labels,
        datasets:
        [
          {
            label:'Dataset1',
            data:[50,20,40,60,80,30,70],
            fill:true,
            backgroundColor:'pink',
            borderColor:'white'
          },
          {
            label:'Dataset2',
            data:[70,40,50,70,90,50,60],
            fill:true,
            backgroundColor:'green',
            borderColor:'white'
          }
       ]
     };

    const options ={
        responsive:true,
        plugins:{
            legends:{
                position:'top'
            },
            title:{
                display:true,
                text:'Weekly report on Calls & Chats'
            }
        }
     }

     console.log('chartType',chartType)
     if(chartType === 'line'){
        return <Line data ={data} options={options}/>
     } 
     else if(chartType === 'bar'){
        return <Bar data ={data} options={options}/>
     }
     else
    return  <Pie data ={data} options={options}/> 
    //    return(
    //     chartType === 'line' ? <Line data ={data} options={options}/>:
    //     chartType === 'bar'  ?  <Bar data ={data} options={options}/> :
    //     <Pie data ={data} options={options}/>  
    //    )       
}

export default ChartCode