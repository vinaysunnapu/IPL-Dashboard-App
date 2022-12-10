import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    teamLogo,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    matchStatus,
    result,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="match-container">
      <div className="result-container">
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{matchStatus}</p>
      </div>
      <img src={teamLogo} alt="teamLogo" className="image-logo" />
      <div className="result-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
