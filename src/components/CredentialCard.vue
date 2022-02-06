<template>
	<div class="col-12 col-md-12 col-lg-10 mt-3">
		<div class="credentials-card rounded">
			<div class="row">
				<div class="col-3 col-md-3 col-lg-2">
					<img :src="data.organizationLogo" class="rounded" alt="Organization Logo" />
				</div>
				<div class="col-9 col-md-9 col-lg-10 info-col">
					<a :href="data.url" target="_blank"
						><h3>{{ data.title }} <i class="bi bi-award-fill text-muted"></i></h3
					></a>
					<h5 class="text-muted">
						{{ formatDate(data.startDate, data.endDate) }}
					</h5>
					<h5 class="text-muted">
						Organization: {{ data.organizationName }} [{{ data.organizationId }}]
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import monthNames from "../assets/data/monthNames.json";
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	methods: {
		formatMonth(date) {
			return monthNames[date.split("-")[1] - 1];
		},
		formatDate(date, duedate) {
			const month = this.formatMonth(date);
			const duemonth = this.formatMonth(duedate);
			const due = duedate == date ? "No Expiration" : `${duemonth} ${duedate.split("-")[0]}`;
			return `${month} ${date.split("-")[0]} - ${due}`;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var.scss";
.credentials-card {
	img {
		width: 100%;
	}
	.info-col {
		a {
			color: white !important;
		}
		h3 {
			font-size: 24px;
		}
		h5 {
			font-size: 16px;
		}
	}
	background-color: $contrast;
	border: 1px solid $lighterBorder;
	padding: 15px;
}

@media only screen and (max-width: 768px) {
	.credentials-card {
		.info-col {
			h3 {
				font-size: 16px;
			}
			h5 {
				font-size: 12px;
			}
		}
	}
}
</style>
