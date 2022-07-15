export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "b424f603bdmshf5440c8e600cb7ep1974cbjsn8be4b11957ad",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b424f603bdmshf5440c8e600cb7ep1974cbjsn8be4b11957ad",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  }, 
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
