import axios from "axios"
const API_URL="";
axios.defaults.baseURL=API_URL;
export const DiscordService={
    async some(name:string){
        return axios.post(`/`,{
            name
        });
    },
}