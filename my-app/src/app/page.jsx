"use client"
import DoughnutChart from '@/components/Doughnutchart'
import React from 'react'

const page = () => {
  return (
    <div>
        <DoughnutChart planned={90} actual={40}/>
    </div>
  )
}

export default page