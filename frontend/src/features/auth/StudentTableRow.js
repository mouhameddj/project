import React from "react";

import axios from "axios";

const StudentTableRow = (props) => {
const { _id, titre, description, duree,couleur,code } = props.obj;


return (
	<tr>
	<td>{titre}</td>
	<td>{description}</td>
	<td>{duree}</td>
	<td>{couleur}</td>
	<td>{code}</td>
	<td>
	
	</td>
	</tr>
);
};

export default StudentTableRow;
