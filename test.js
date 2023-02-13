
const postQuery = async () => {
    try{
    const response = await fetch('http://localhost:3000/users',{
        method: 'POST',
        body: JSON.stringify({ message: "Привет сервис, я жду от тебя ответа"}),
        headers: {
            'Content-Type': 'application/json'
        }});
    const message = await response.json();  
    console.log(message);
    }catch(err){
        console.log('Error:', err)
    }
}
postQuery();

