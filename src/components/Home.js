import React from 'react'
import Stats from "./Stats";
import StrengthCards from "./StrengthCards";
import Process from "./Process";
import ExploreTech from "./ExploreTech";
import StrategicPartnership from "./StrategicPartnership";
import Infrastructure from "./Infrastructure";
import Herosection from './Hero';

const Home = () => {
  return (
    <div>
        <Herosection/>
        <Stats />
        <StrengthCards />
        <Process />
        <ExploreTech />
        <Infrastructure />
        <StrategicPartnership />

    </div>
  )
}

export default Home