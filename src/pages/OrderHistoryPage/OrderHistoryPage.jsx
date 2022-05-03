
export default function OrderHistoryPage() {
    async function handleCheckToken(){
        alert('clicked')
    }
    return (
        <>
        <h1> Order History Page </h1>
        <button onClick={handleCheckToken} >Check When my Login Expires</button>
        </>
    )
}