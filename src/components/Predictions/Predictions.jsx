import './Predictions.css'
import { useState, useEffect } from 'react'
import * as predictionsAPI from '../../utilities/prediction-api'
import Results from '../../components/Results/Results'

export default function Predictions({facts, user, group}) {
    // console.log(group)
    const userName = user.name
    console.log(userName)
    const [prediction, setPrediction] = useState([])
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        home: 0,
        away: 0,
        name: userName,
        group: group.id,
        hometeam: facts && facts.localTeam.data.name,
        awayteam: facts && facts.visitorTeam.data.name
    })

    async function getPredictions() {
        const predictionData = await predictionsAPI.getAll()
        setPrediction(predictionData)
        }

    async function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        setError('');
    }
    
    async function handleSubmit(evt) {
        evt.preventDefault()
        try{
            const prediction = {...form}
            setForm(prediction);
            delete prediction.error
            delete prediction.confirm
            predictionsAPI.submit(form)
            getPredictions()
            setForm({home: 0, away: 0, name: userName, group: group.id, hometeam: facts && facts.localTeam.data.name, awayteam: facts && facts.visitorTeam.data.name
            })
        } catch {
            setError('Submit Failed')
        }
    }
    useEffect(() => {
        getPredictions()
    }, [] ) 

    console.log(prediction)
    return (
        <div className='predictions'>
        <h1 className="">Predictions</h1>
        <form onSubmit={handleSubmit} className="pform">
            <label>Home team:</label>
            <input type='text' name='hometeam' value={facts && facts.localTeam.data.name} hidden/>
            <select className="select" name='home' value={form.home} onChange={handleChange}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
            <label>Away Team</label>
            <input type='text' name='awayteam' value={facts && facts.visitorTeam.data.name} hidden/>
            <select className="select" name='away' value={form.away} onChange={handleChange}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>            
            <input type="text" name="name"  value={userName} hidden/>
            <input type="number" name="group" value={group.id} hidden/>
            <button type="submit">Submit</button>
        </form>
        <hr></hr>
        <p>{error}</p>

            {prediction.map((result) => (             
                <Results result={result} f={facts && facts.group_id} facts={facts} />
            ))}
       
        </div>
    )
}