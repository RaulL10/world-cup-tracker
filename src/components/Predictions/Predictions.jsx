import './Predictions.css'
import { useState } from 'react'


export default function Predictions({facts}) {
    console.log(facts)
    const [form, setForm] = useState({
        home: '',
        away: '',
    })
    const [error, setError] = useState('')

    function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        setError('');
      }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try{
            console.log(`Home: ${form.home} Away:${form.away}`)
        } catch {
            setError('Submit Failed')
        }
    }
    return (
        <>
        <h1 className="">Predictions</h1>
        <form onSubmit={handleSubmit} >
            <label>{facts && facts.localTeam.data.name}</label>
            <select className="select" name="home" vlaue={form.home} onChange={handleChange}>
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
            <select className="select" name="away" vlaue={form.away} onChange={handleChange}>
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
            <button type="submit">Place Prediction</button>
        </form>
        <p>{error}</p>
        </>
    )
}