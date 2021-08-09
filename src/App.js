import logo from './logo.svg'
import './App.css'

import { useWasm } from './useWasm'

function App() {
	const instance = useWasm()
	return <div className='App'>{instance && instance.exports.add(2, 3)}</div>
}

export default App
