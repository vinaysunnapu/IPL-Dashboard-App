import {Link} from 'react-router-dom'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: updatedData, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <Link to="/">
        <div className="home-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL Dashboard</h1>
          </div>
          <ul className="list-container">
            {isLoading ? (
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            ) : (
              teamList.map(eachList => (
                <TeamCard teamCard={eachList} key={eachList.id} />
              ))
            )}
          </ul>
        </div>
      </Link>
    )
  }
}

export default Home
