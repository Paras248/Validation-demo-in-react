import React from "react";
import Card from "../UI/Card";
import styles from "./css/UserList.module.css";

const UserList = ({users}) => {
	return (
		<Card className={styles.users}>
			<ul>
				{users.map((user) => <li key={user.id}>{user.name} ({user.age}  years old)</li>)}
			</ul>
		</Card>
	);
}

export default UserList;