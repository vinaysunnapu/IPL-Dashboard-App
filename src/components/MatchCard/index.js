import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {team} = matchCard
  return (
    <li>
      <h1>{team}</h1>
    </li>
  )
}
export default MatchCard
