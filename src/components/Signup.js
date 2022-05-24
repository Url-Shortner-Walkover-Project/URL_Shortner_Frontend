import React,{ useState }from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmpassword: "" })
    let navigate = useNavigate()

    const handleSubmit = async (element) => {

        element.preventDefault();
        //fetch("localhost:6500/api/auth/login")
        const { name, email, password } = credentials;
        const response = await fetch("https://shorten-url11.herokuapp.com/api/auth/createuser/", {


            method: 'POST',

            headers: {
                'Content-Type': 'application/json',


            },
            body: JSON.stringify({ name, email, password })

        });

        const json = await response.json();
        


        if(json.success)
        {
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            props.showAlert(" Account Created Successfully","success")
        }
        else{

            props.showAlert("Invalid credentials","danger")
        }
       
        //redirect



    }
    const onChange = (e) => {


        setCredentials({ ...credentials, [e.target.name]: e.target.value })




    }
    return (

        <>
            <div className="container my-3">
                <h2 className="text-center">Create An Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name" name="name" onChange={onChange} aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={onChange} id="password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmpassword" onChange={onChange} id="confirmpassword" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup
