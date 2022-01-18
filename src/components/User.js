import React, { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";

const User = () => {

    // const [data , setData] = useState([])
    const columns = useMemo(() => [
        {
            Header:'Name',
            accessor:'name'
        },
        {
            Header:'Year',
            accessor:'year'
        },
        {
            Header:'pantone_value',
            accessor:'pantone_value'
        }

    ],[]);
 const data = [
     {
         name:"Ritika",
         year:'1992',
         pantone_value:'1234'
     },
     
     {
        name:"Motula",
        year:'1990',
        pantone_value:'9999'
     }
 ]

 const {
     getTableBodyProps,
     getTableProps,
     headerGroups,
     rows,
     prepareRow
 } = useTable({ columns, data } )

    // const getData = async () => {
    //     const response = await fetch("https://reqres.in/api/products/3");
    //     const datas = await response.json();
    //     setData(datas)
    // }

    // useEffect(() => {
    //     getData()
    // },[data])
    return(
       <table {...getTableProps()}>
           <thead>
               {headerGroups.map(headerGroup => (
                   <tr {...headerGroup.getHeaderGroupProps()}>
                       {headerGroup.headers.map(column => (
                           <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                       ))}
                   </tr>
               ))}
           </thead>
           <tbody {...getTableBodyProps()}>
               {rows.map((row,i) =>{
                   prepareRow(row);
                   return(
                       <tr {...row.getRowProps()}>
                           {row.cells.map(cell => (
                               <td {...cell.getCellProps()}>
                                   {cell.render('Cell')}
                               </td>
                           ))}
                       </tr>
                   )
               })}
           </tbody>
        </table>
    )
}

export default User