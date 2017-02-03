const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);

    this.adoptedButton = this.adoptedButton.bind(this)
    this.getAdopted = this.getAdopted.bind(this)

    this.state = {
      isAdopted: this.props.isAdopted
    }
  }

  getAdopted(event){
    this.setState({isAdopted: true})
    this.props.onAdoptPet(this.props.pet.id)
  }

  adoptedButton() {
    if (this.state.isAdopted === false) {
        return (<button className="ui primary button" onClick={this.getAdopted}>Adopt pet</button>)
      } else {
        return (<button className="ui disabled button">Already adopted</button>)
      }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedButton()}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
