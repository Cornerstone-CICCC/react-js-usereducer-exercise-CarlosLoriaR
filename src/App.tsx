import { useReducer } from 'react'
import './App.css'

interface State {
  isDark: boolean
  fSize: number
}

type Action = { type: 'TOGGLE_DARK' } | { type: 'INCREASE_FONT' } | { type: 'DECREASE_FONT' }

const initialState: State = {
  isDark: false,
  fSize: 16,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_DARK':
      return { ...state, isDark: !state.isDark }
    case 'INCREASE_FONT':
      return { ...state, fSize: state.fSize + 1 }
    case 'DECREASE_FONT':
      return { ...state, fSize: Math.max(1, state.fSize - 1) }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div
      style={{
        backgroundColor: state.isDark ? '#000' : '#fff',
        color: state.isDark ? '#fff' : '#000',
        fontSize: `${state.fSize}px`,
        padding: '40px',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}
    >
      <p>
        This is a dummy text to demonstrate the dark mode and font size changes.
        You can toggle dark mode and adjust the font size using the buttons below.
      </p>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button
          onClick={() => dispatch({ type: 'TOGGLE_DARK' })}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: state.isDark ? '#333' : '#ddd',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          Toggle Dark Mode
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREASE_FONT' })}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: state.isDark ? '#333' : '#ddd',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          Increase Font Size
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREASE_FONT' })}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: state.isDark ? '#333' : '#ddd',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          Decrease Font Size
        </button>
      </div>

      <p style={{ marginTop: '20px' }}>Current font size: {state.fSize}px</p>
    </div>
  )
}

export default App
