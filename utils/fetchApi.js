import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	console.log(url);
  const { data } = await axios.get((url), {
    headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': 'e296ba5374msh7bbb1be4c2a58c2p1ad034jsn32bec21dbb8d'
		}
  });
    
  return data;
}