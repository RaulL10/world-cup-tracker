import './Predictions.css'
import { useState, useEffect } from 'react'
import * as predictionsAPI from '../../utilities/prediction-api'
import Results from '../../components/Results/Results'

export default function Predictions({facts, user}) {
    const [prediction, setPrediction] = useState([])
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        home: 0,
        away: 0,
        group: '',
        name: ''
    })

    async function getPredictions() {
        const predictionData = await predictionsAPI.getAll()
        console.log(predictionData)
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
            setForm(prediction)
            delete prediction.error
            delete prediction.confirm
            predictionsAPI.submit(form)
            getPredictions()
            setForm({home: 0, away: 0, group: '', name: ''})
        } catch {
            setError('Submit Failed')
        }
    }
    useEffect(() => {
        getPredictions()
    }, [] ) 

    if (!prediction) {
		<p>Loading Predictions…</p>;
	}
    return (
        <>
        <h1 className="">Predictions</h1>
        <form onSubmit={handleSubmit} >
            <label>{facts && facts.localTeam.data.name}</label>
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
            <label>{facts && facts.visitorTeam.data.name}</label>
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
            <input type="hidden" name="name" value={user.name} placeholder={user.name}></input>
            <input type="hidden" name="group" value={facts && facts.group_id} placeholder={facts && facts.group_id} />
            <button type="submit">Submit</button>
        </form>
        <p>{error}</p>

     
            {prediction.map((result) => (
                <Results prediction={prediction} result={result} facts={facts} />
            ))}
       
        </>
    )
}