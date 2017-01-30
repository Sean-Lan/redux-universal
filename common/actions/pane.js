export const PANE_START_CHANGE_COLOR = 'PANE/START_CHANGE_COLOR'
export const PANE_RECEIVE_NEW_COLOR = 'PANE/RECEIVE_NEW_COLOR'

export const changeColor = () => ({
  type: PANE_START_CHANGE_COLOR,
})

export const receiveColor = (color) => ({
  type: PANE_RECEIVE_NEW_COLOR,
  payload: {color}
})

export const fetchColor = () => (dispatch) => {
  console.log(arguments)
  dispatch(changeColor())
  fetch('http://localhost:3000/api/color')
    .then(response => response.json())
    .then(({color}) => {
      dispatch(receiveColor(color))
    })
}
