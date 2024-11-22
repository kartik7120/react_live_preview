import { useReducer } from 'react'
import './App.css'
import Form from './components/Form'

export const initialState = {
  configName: '',
  botName: '',
  fontFamily: '',
  headerColor: '',
  headerFontColor: '',
  backgroundColor: '',
  chatFontColor: '',
  avatarImage: '',
  launcherImage: '',
}

export type Action = {
  type: 'SET_CONFIG_NAME' | 'SET_BOT_NAME' | 'SET_FONT_FAMILY' | 'SET_HEADER_COLOR' | 'SET_HEADER_FONT_COLOR' | 'SET_BACKGROUND_COLOR' | 'SET_CHAT_FONT_COLOR' | 'SET_AVATAR_IMAGE' | 'SET_LAUNCHER_IMAGE'
  payload: string
}

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_CONFIG_NAME':
      return { ...state, configName: action.payload }
    case 'SET_BOT_NAME':
      return { ...state, botName: action.payload }
    case 'SET_FONT_FAMILY':
      return { ...state, fontFamily: action.payload }
    case 'SET_HEADER_COLOR':
      return { ...state, headerColor: action.payload }
    case 'SET_HEADER_FONT_COLOR':
      return { ...state, headerFontColor: action.payload }
    case 'SET_BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.payload }
    case 'SET_CHAT_FONT_COLOR':
      return { ...state, chatFontColor: action.payload }
    case 'SET_AVATAR_IMAGE':
      return { ...state, avatarImage: action.payload }
    case 'SET_LAUNCHER_IMAGE':
      return { ...state, launcherImage: action.payload }
    default:
      return state
  }
}
function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <Form state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
