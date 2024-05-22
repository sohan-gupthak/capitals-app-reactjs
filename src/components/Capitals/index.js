import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = capitalId => {
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === capitalId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selecting-container">
            <select
              className="select-container"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
