import * as React from "react";

const Style = () => (

	<style jsx global>{`
	.heading {
			background-color: #2fcc71;
			padding: 20px 10px 20px 10px;
			text-align: center;
			color: white;
	}
	.footer {
			background-color: #009933;
			padding: 20px 10px 20px 10px;
	}
	.form-label-custom {
			text-align: left;
			padding-bottom: 2px;
			max-width: 100%;
			margin: 20px 0px 10px 0px ;
	}
	.section-label-border {
			border-top: 1px solid #2fcc71;
	}

	.input-field{
	position:relative;
	border-radius:0px;
	width: 100%;
	}

	.submit-button{
			width: 100%;
			border-radius:0px;
			margin: 20px 0px 30px 0px; 
			padding: 0.6rem; 
	}

	.btn-custom{
			background-color:#2fcc71;;
			border-color: #009933;
			color: white;
	}

	.btn-custom:active,.btn-custom:target,
	.btn.btn-custom:active,.btn.btn-custom:focus,.btn.btn-custom:hover 
	{
			-webkit-box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);
			box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);

			background-color: white;
			color: #2fcc71;
			border-color: #2fcc71;
	}
	`}
	</style>
)

export default Style