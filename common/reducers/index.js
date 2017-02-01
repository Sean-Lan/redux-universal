import { combineReducers } from 'redux'
import Head from './Head'
import Body from './Body'
import Footer from './Footer'

const rootReducer = combineReducers({head: Head, body: Body, footer: Footer})
export default rootReducer
