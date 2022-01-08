import axios from "axios";

const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCNqSlVr9_fJ-682ILT-MBHA&maxResults=2&order=date&type=video&key=${process.env.VUE_APP_GPKEY}`;

export default class {
	static async getRecentUpload() {
		const response = await axios.get(endpoint);
		const data = await response.data;
		return data.items;
	}
}
