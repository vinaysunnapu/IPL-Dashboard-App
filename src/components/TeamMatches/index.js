import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
    bannerUrl: '',
    latestMatchDet: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const TeamBannerUrl = data.team_banner_url
    const latestMatches = data.latest_match_details
    console.log(latestMatches)
    const latestMatchDetails = {
      competingTeam: latestMatches.competing_team,
      teamLogo: latestMatches.competing_team_logo,
      date: latestMatches.date,
      firstInnings: latestMatches.first_innings,
      secondInnings: latestMatches.second_innings,
      manOfTheMatch: latestMatches.man_of_the_match,
      matchStatus: latestMatches.match_status,
      result: latestMatches.result,
      umpires: latestMatches.umpires,
      venue: latestMatches.venue,
      matchId: latestMatches.id,
    }

    const recentMatches = data.recent_matches
    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      team: eachMatch.competing_team,
      teamLogo: eachMatch.competing_team_logo,
      teamResult: eachMatch.result,
      matchStatus: eachMatch.match_status,
      teamId: eachMatch.id,
    }))

    this.setState({
      bannerUrl: TeamBannerUrl,
      isLoading: false,
      latestMatchDet: latestMatchDetails,
      recentMatchesList: formattedRecentMatches,
    })
  }

  renderTeamMatchDetails = () => {
    const {bannerUrl, latestMatchDet, formattedRecentMatches} = this.state
    return (
      <div className="team-matches-container">
        <img src={bannerUrl} alt="team banner" className="banner-image" />
        <p className="latest-matches-para">Latest Matches</p>
        <LatestMatch
          matchDetails={latestMatchDet}
          key={latestMatchDet.matchId}
        />
        <ul>
          {formattedRecentMatches.map(each => (
            <MatchCard matchCard={each} key={each.teamId} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderTeamMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
