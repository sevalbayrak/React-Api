
import axios, { HttpStatusCode } from 'axios';

const searchimge = async (term) =>  {
    const  donur = await axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization : 'Client-ID 4whRzH6BVIcOx371l7Tw6kaHc9j3kPixsXs3Sie_4SU'

      },
      params:{
        query:term,
       
      },


    });
    debugger;
    return donur.data.results;
  }

  export default searchimge;