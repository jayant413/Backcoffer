"use client"

import { useState } from "react";

import { UserData } from "@/constants/Data";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";

export default function Home() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["green", "blue", "orange"],
      borderColor: "black",
      borderWidth: 2
    }]
  });
  return (
    <div className="flex justify-around mt-10">
      <div className="w-[30rem] h-[30rem]">
        <BarChart charData={userData} />
      </div>
      <div className="w-[30rem] h-[30rem]">
        <LineChart charData={userData} />
      </div>
      <div className="w-[30rem] h-[30rem]">
        <PieChart charData={userData} />
      </div>
    </div>
  )
}
