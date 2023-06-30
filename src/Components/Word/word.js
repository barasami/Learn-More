import axios from 'axios';

const Url='https://word-of-the-day2.p.rapidapi.com/word/today'

const options = {
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
  }
};

export const dayWord=async()=>{

    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.log(error);
    }
}