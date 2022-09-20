const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI3MzIzZThkYTUyNTAwMjFhOTdhNTAiLCJpYXQiOjE2NjM1MTMxNTB9.D3ULqax4ERvKpUP01q_Fq1J7NvffwivofsrJtTcCR6I';
const API = `https://coding-challenge-api.aerolab.co/products?token=${token}`;

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;

    try 
    {
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    } catch(error) 
    {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getData;