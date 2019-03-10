import * as React from "react";

const Style = () => (

	<style jsx="true" global="true">{`
	.heading {
			background-color: #2fcc71;
			padding: 20px 10px 20px 10px;
			text-align: center;
			color: white;
	}
	.footer {
		background-color: #009933;
		position:fixed;
		left:0px;
		bottom:0px;
		height:50px;
		width:100%;
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
			margin: 20px 0px 100px 0px; 
			
	}

	.btn-custom{
			background-color:#2fcc71;;
			border-color: #009933;
			color: white;
			margin-top: 43px;
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

	.form-container {
		display: flex;
		margin: 16px 16px 16px 16px;  
	}

	/* Mobile */
	.radio-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
	.radio-button {
		width: 100%;
		display: flex;    
		margin: 16px 16px 16px 16px;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	input[type=radio] {
		display: none;
	}

	.radio-label {   
		border: 1px solid #d3d3d3;
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative; /* this makes :after work on absolute */
		text-align: center;
		cursor: pointer;
		box-sizing: border-box;
		box-shadow: 1px 1px #d8d8d8;
		font-size: 20px;
	}

	.radio-input:checked + .radio-label {
		border: 1px solid #2fcc71;
		box-shadow: none;
		color: #4d4d4d;
	}

	.radio-input:checked + .radio-label:after {
		position: absolute;
		content: "\\2713";
		display: flex;
    align-items: center;
    justify-content: center;
		color: #3455a5;
		background-color:white;
		height: 25px;
		width: 25px;
		border-radius: 100%;
		border: 1px solid #3455a5;
		left: 96%;
		top: -16%;
	}
	/* Desktop */
	@media only screen and (min-width: 600px) {
		.radio-container {
			display: flex;
			width: 100%;
			justify-content: space-between;
			flex-direction: row;
		}
		.radio-button {
			width: 100%;
			display: flex;    
			margin: 16px 16px 16px 16px;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
		.radio-input:checked + .radio-label:after {
			left: 90%;
		}
	}
	.home-link {
		text-align: center;

	}
	.results-container {
		display: flex;
    align-items: center;
    flex-direction: column;
	}
	.header-container {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		margin-bottom: 20px;
		flex-direction: column;
	}
	.table-container {
		display: flex;
		align-items: center;
		margin: 0px 16px 0px 16px;
	}
	@media only screen and (min-width: 1200px)
	{
		.table-container {
			width: 80%;
			display: flex;
			justify-content: center;
		}
	}
	.result-table {
		border-collapse: collapse;
		width: 100%;
	}
	.result-table td, .result-table th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	.result-table tbody:nth-child(odd) {
		background-color:  #f2f2f2;
	}

	.result-table .table-data:hover {
		background-color:  #ddd;
	}
	.column-header {
		display: table-row;
		background-color: #4CAF50;
		color: white;
		padding-top: 6px;
		padding-bottom: 6px;
		width: 100%;
		
	}
	.table-data {
		display: table-row;
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
	}
	.book-data {
		display: table-cell;
	}

	.book-details:before {
		display: none;
	}

	.table-footer {
		font-size: 14px;
		float: right;
	}

	@media (max-width: 600px) {
		.result-table {
			border-collapse: collapse;
			width: 100%;
		}
		.column-header {
			display: none;
		}
		.table-data {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 0px;
		}
		
		.book-data {
			text-align: center;
		}

		.book-title {
			background-color: #4CAF50;
			color: white;
			padding-top: 6px;
			padding-bottom: 6px;
			font-weight: bold;
		}
		.book-details {
			background-color: #f2f2f2;
			padding-top: 6px;
			padding-bottom: 6px;
			border: 1px solid #ddd;
		}
		.book-details:before {
			content: attr(data-title);
			float: left;
			width: 50%;
			border-right: 1px solid #ddd; 
			display: block;
		}
		.table-footer {
			display: none;
		}
	}
	.delete-button {
		border: 1px solid #595959;
		background-color: #6666ff;
		color: white;
		padding: 4px 15px 4px 15px;
	}
	@media (max-width: 600px) {
		.delete-button {
			width: 100%;
	}
	`}
	</style>
)

export default Style