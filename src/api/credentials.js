import axios from "axios";
import { pick } from "lodash-es";
const endpoint = "https://cache.showwcase.com/user/dimasandhk";

const requiredProps = [
	"title",
	"organizationName",
	"organizationLogo",
	"company",
	"startDate",
	"endDate",
	"current",
	"url",
	"organizationId"
	// "attachmentUrl"
];

export default class {
	static async getCredentials() {
		const response = await axios.get(`${endpoint}/certifications`);
		const data = await response.data;

		const credentials = [];
		data.forEach((prop) => credentials.push(pick(prop, requiredProps)));
		console.log(credentials);
		return credentials;
	}
}
