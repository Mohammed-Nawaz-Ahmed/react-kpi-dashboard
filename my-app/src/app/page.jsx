"use client"
import React from 'react'
import DoughnutChart from '@/components/Doughnutchart'
import StandingRequestsChart from "@/components/barchart";
import FilterTable from '@/components/table';
const data = [
  { 
    Primary_specialty: "Cardiology", 
    CCG_Flag: "Yes", 
    Customer_Type: "Clinical Expert(CE)", 
    Customer_Status: "Core",
    HCP_Territory: 100,
    Planned_Engagements: 80,
    Actual_Engagements: 60,
    Planned_Per_Semester: 5,
    Actual_Per_Semester: 4,
    Engagement_Percentage: "75%"
  },
  { 
    Primary_specialty: "Neurology", 
    CCG_Flag: "No", 
    Customer_Type: "Scientific Expert(SE)", 
    Customer_Status: "Core",
    HCP_Territory: 150,
    Planned_Engagements: 90,
    Actual_Engagements: 70,
    Planned_Per_Semester: 6,
    Actual_Per_Semester: 5,
    Engagement_Percentage: "77%"
  },
  // Additional rows...
];


const prop1 = ["Clinical Expert(CE)", "Scientific Expert(SE)", "Neither"];
const prop2 = ["Core", "Non Core", "Prospect"];




const page = () => {
  return (
    <div>
        <DoughnutChart planned={90} actual={40}/>
        <StandingRequestsChart typeArray={["Neither", "CE", "SE"]} chartData={[
    // [20, 30],
    // [15, 25],
    // [10, 20],
  ]}/>
  <FilterTable data={data} prop1={prop1} prop2={prop2} />
    </div>
  )
}

export default page