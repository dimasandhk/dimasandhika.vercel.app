import axios from "axios";
const endpoint = "https://api.github.com/users/dimasandhk";

export default class {
	static async getProfile() {
		const response = await axios.get(endpoint);
		const data = await response.data;

		return {
			login: data.login,
			avatar: data.avatar_url,
			repos: data.public_repos,
			gists: data.public_gists,
			page: Math.ceil(data.public_repos / 30)
		};
	}

	static async getReposByPage(page) {
		const { page: maxPage } = await this.getProfile();
		const regex = /[0-9]/gi;

		try {
			if (parseInt(page) > maxPage || parseInt(page) <= 0 || !regex.test(page))
				throw { error: "No Result Found" };

			const response = await axios.get(`${endpoint}/repos?page=${page}`);
			return await response.data;
		} catch (err) {
			return err;
		}
	}
}
