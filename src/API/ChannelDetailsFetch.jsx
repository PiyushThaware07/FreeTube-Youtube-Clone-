const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

async function fetchChannelDetails(channelId) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${ApiKey}`);
    const data = await response.json();
    return data;
}

export { fetchChannelDetails };
