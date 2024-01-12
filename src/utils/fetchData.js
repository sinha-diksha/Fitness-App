

export const exerciseOptions = {
  method: 'GET',
  params: {limit: '1400'},
  headers: {
    'X-RapidAPI-Key': 'b4cef6fe0dmsh83f941f87997639p1de345jsn178cfc03c039' ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': 'b4cef6fe0dmsh83f941f87997639p1de345jsn178cfc03c039',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData=async (url, options)=>{
  const response=await fetch(url, options);
  const data= await response.json();
  return data;
}