const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor(props){
    super(props)

    this.createPets = this.createPets.bind(this)
  }

  createPets() {
    return(
      this.props.pets.map( (petObj) => {
        return(
          <Pet pet={petObj} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(petObj.id)} />
        )
      })
    )
  }

  render() {
    return (
      <div className="ui cards">
        {this.createPets()}
      </div>
    );
  }
}

module.exports = PetBrowser;
