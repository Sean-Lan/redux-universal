export const START_CHANGE_COLOR = 'CHANGE_COLOR'
export const RECEIVE_NEW_COLOR = 'RECEIVE_NEW_COLOR'

export const changeColor = (part) => ({
  type: START_CHANGE_COLOR,
  payload: part
})

export const receiveColor = (part, color) => ({
  type: RECEIVE_NEW_COLOR,
  payload: {part, color}
})

export const fetchColor = (part) => () =>(dispatch) => {
  console.log(arguments)
  dispatch(changeColor(part))
  fetch('http://localhost:3000/api/color?part='+part)
    .then(response => response.json())
    .then(({color}) => {
      dispatch(receiveColor(part, color))
    })
}
