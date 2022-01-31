import axios from "axios";
import _ from "lodash-es";
const endpoint = "https://dimasandhk.showwcase.com/api/user/dimasandhk";

const requiredProps = [
	"title",
	"organizationName",
	"organizationLogo",
	"startDate",
	"endDate",
	"current",
	"url",
	"attachmentUrl"
];

export default class {
	static async getCredentials() {
		const response = await axios.get(`${endpoint}/certifications`);
		const data = await response.data;

		const credentials = [];
		data.forEach((prop) => credentials.push(_.pick(prop, requiredProps)));
		return credentials;
	}
}
