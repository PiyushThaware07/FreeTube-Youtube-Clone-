const ApiKey = import.meta.env.VITE_REACT_APP_API_KEY;

async function fetchVideoDetails(videoId) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${ApiKey}`);
    const data = await response.json();
    return data;
}

export { fetchVideoDetails };













/*
 // Video Handling
    const [videoDetails, setVideoDetails] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchVideoDetails(props.video.id);
                setVideoDetails(data.items[0]);
            } catch (error) {
                console.error("Error fetching channel details:", error);
            }
        };
        fetchData();
    }, [props.video]);
    console.log("fetch video by api : ",videoDetails);
*/
