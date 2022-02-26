import styled from 'styled-components'
import withTheme from '@material-ui/core/styles/withTheme'

export default withTheme()(styled.div`
  overflow: hidden;

  .Container {
    margin: 16px auto;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;

    .Hint {
      margin: ${props => props.theme.spacing.unit}px;
      text-align: center;
      text-transform: uppercase;
    }

    .gameplay-area {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  }

  .timerContainer {
    background-color: #42d7f5;
    padding: 15px 10px;
    margin-top: 25%;
    width: 30%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timer {
    background-color: #000000;
    color: #ffffff;
    width: 50%;

    padding: 15px 30px;
    display: flex;
    justify-content: center;
    font-size: 220%;
    font-family: Arial, Helvetica, sans-serif;
  }

  .timerTitle {
    font-size: 100%;
    text-align: center;
    padding-bottom: 10px;
  }
`)
