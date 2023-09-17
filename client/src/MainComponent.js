import axios from 'axios'
import { useCallback, useState } from 'react'
const MainComponent = () => {
    const [values, setValues] = useState(null)
    const getMessage = useCallback(async () => {
        const values = await axios.get('/api/values')
        setValues(values)
        console.log(values)
    });
    return (
        <div>
            <button onClick={getMessage}>Get all numbers</button>
        </div>
    )
}

export default MainComponent;