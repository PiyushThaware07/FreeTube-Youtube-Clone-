const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

async function FetchVideos(page_token) {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&pageToken=${page_token}&key=${ApiKey}`);
    const data = await response.json();
    return data;
}

export {FetchVideos};