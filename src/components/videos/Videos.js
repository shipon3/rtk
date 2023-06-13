import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";

export default function Videos() {
    const {data:videos, isLoading, isError} = useGetVideosQuery();
    let content = null;
    if(isLoading){
        content = <><VideoLoader /> <VideoLoader /><VideoLoader /> <VideoLoader /><VideoLoader /> <VideoLoader /><VideoLoader /> <VideoLoader /><VideoLoader /> <VideoLoader /><VideoLoader /> <VideoLoader /></>
    }
    if(!isLoading && isError){
        content = <Error  message="Error" /> 
    }
    if(!isLoading && !isError && videos?.length === 0){
        content = <Error  message="Videos Not Found" /> 
    }
    if(!isLoading && !isError && videos?.length > 0){
        content = videos.map((video,index)=>{
            return(
                <Video video={video} key={index} />
            )
        })
    }
    return content;
}
