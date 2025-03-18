"use client"
import DoughnutChart from '@/components/Doughnutchart'
import StandingRequestsChart from "@/components/barchart";

import React from 'react'

const page = () => {
  return (
    <div>
        <DoughnutChart planned={90} actual={40}/>
        <StandingRequestsChart typeArray={["Neither", "CE", "SE"]} chartData={[
    // [20, 30],
    // [15, 25],
    // [10, 20],
  ]}/>
    </div>
  )
}

export default page