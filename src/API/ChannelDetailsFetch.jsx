const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

async function fetchChannelDetails(channelId) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=${channelId}&key=${ApiKey}`);
    const data = await response.json();
    return data;
}

export { fetchChannelDetails };



// channel details fetching
/*
const [channelDetails, setChannelDetails] = useState([])
useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchChannelDetails(props.video.snippet.channelId);
            setChannelDetails(data.items[0])
        } catch (error) {
            console.error("Error fetching channel details:", error);
        }
    };
    fetchData();
}, [props.video]);
*/

