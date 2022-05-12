import './Predictions.css'

export default function Predictions({facts}) {
    console.log(facts)
    return (
        <>
        <h1 className="">Predictions</h1>
        <form>
            <label>{facts && facts.localTeam.data.name}</label>
            <select className="select">
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
            <select className="select">
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
        </>
    )
}