import React, { Component } from 'react'
import PlantContext from '../PlantContext';

class MyPlantsPage extends Component {
  static contextType = PlantContext;


  //do component did mount here

renderPlants = () => {
  const {myPlants} = this.context
  return myPlants.map(plant => {
    return (
      <div className='MyPlantItem'>
        <h2>{plant.name}</h2>
        <p>{plant.plant_type}</p>
        <p>{plant.toxicity}</p>
        <p>{plant.care_details}</p>

      </div>
    )
  })
}

  render () {

    return (
      <div>
        <h1>My Plants</h1>
          {this.renderPlants()}
      </div>
    )
  }
}

export default MyPlantsPage;