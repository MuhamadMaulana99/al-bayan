import React from "react"
import ColumnGroupingTable from "./ColumnGroupingTable"

export const Dashboard = () => {
    return (
      <React.Fragment>
        <div  className="mt-4" >
          <h1>Dashboard</h1>
        </div>
        <ColumnGroupingTable></ColumnGroupingTable>
      </React.Fragment>

    )
    
  }