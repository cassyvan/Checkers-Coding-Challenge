import React from 'react'
import Countdown from 'react-countdown'
import {connect} from 'react-redux'
import {passTurn} from 'store/turns'
import Typography from '@material-ui/core/Typography'
import {notify} from '../../store/notification'
import {resetMovement} from '../../store/movement'

function Timer({dispatch, currentPlayer}) {
  const nextPlayer = currentPlayer === 1 ? 2 : 1
  const notificationMsg = `Player ${currentPlayer}'s turn has has timed out. Player ${nextPlayer}'s turn starting now.`

  const onComplete = () => {
    dispatch(passTurn())
    dispatch(notify(notificationMsg))
    dispatch(resetMovement())
  }

  return (
    <div className="timerContainer">
      <Typography className="timerTitle">
        PLAYER {currentPlayer}'s turn
      </Typography>
      <div className="timer">
        <Countdown
          key={currentPlayer}
          date={Date.now() + 5000}
          onComplete={onComplete}
          renderer={props => (
            <span>
              {props.minutes}:{props.formatted.seconds}
            </span>
          )}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPlayer: state.turns.currentPlayer,
})

export default connect(mapStateToProps)(Timer)
