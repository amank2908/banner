import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
function App(){
    const columns=[
        {
            name:"S.No.",
            selector:row=>row.S,
            sortable:true

        },
        {
           name:'Banner Image', 
           selector:image =>image.image,
           sortable:true

        },

        {
            name:"Banner Link",
            selector:row=>row.Link,
            sortable:true

        },
        {
            name:"Banner Type",
            selector:row =>row.Type,
            sortable:true

        },
        {
            name:"Position",
            selector:row=>row.Posititon,
            sortable:true
        },
        {
            name:"Created At",
            selector:row=>row.Created,
            sortable:true
        },
        {
            name:"Action",
            selector:row=>row.Action,
            sortsble:true
        }
        
     ];
     const data=[
        {
            S:1,
            image:'google.png',
           Link:'https://www.google.com/',
           Type:'main',
           Position:'0',
           Created:'July 23,12:46 PM'

        },
        {
            S:2,
            image:'insta.png',
           Link:'https://www.instagram.com/',
           Type:'main',
           Position:1,
           Created:'Jan 28,08:23 PM'
        },
        {
            S:3,
            image:'insta.png',
           Link:'https://www.facebook.com/',
           Type:'main',
           Position:1,
           Created:'May 01,05:51 PM'
            
        },
        {

            S:4,
            image:'facebook.png',
           Link:'https://www.facebook.com/',
           Type:'main',
           Position:1,
           Created:'March 27,08:04 PM'
        },
        {
            S:5,
            image:'insta.png',
           Link:'https://www.facebook.com/',
           Type:'main',
           Position:1,
           Created:'May 01,05:51 PM'
        }
            
     ]
      const [records,setRecords]=useState(data);
      function handleFilter(event){
        const newData=records.filter(row=>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
      }

      return (

        <div className='container mt-5'>
            <div className='text-end'><input type="text" onChange={handleFilter}/></div>
            <DataTable 
            columns={columns}
            data={data}
            fixedHeader
            pagination

           ></DataTable>

 
        </div>
    )
}
export default App;