import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			 window.location ="/cadastro";

		   
	
	
	} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container">
      <div className="card mt-2 bg-warning">
        <div className="card-title">
          <div className="row">
            <div className="col">
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h4>Login to Your Account</h4>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h4>New Here ?</h4>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		</div>
		</div>
		
	);
};

export default Login;
