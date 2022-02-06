import axios from "axios";
import { pick } from "lodash-es";
const endpoint = "https://dimasandhk.showwcase.com/api/user/dimasandhk";

const requiredProps = [
	"title",
	"organizationName",
	"organizationLogo",
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
		return credentials;
	}
}
