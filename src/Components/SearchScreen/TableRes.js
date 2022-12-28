import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
const options = {
  
  };
  const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "city",
     label: "City",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "state",
     label: "State",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
const TableRes=({})=>{
    const [data, setData] = useState([]);
return(<>
 <MUIDataTable
          title={"ACME Employee list"}
          data={data}
          columns={columns}
          options={options}
        /></>)
}
export default TableRes