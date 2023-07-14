import {useState} from "react";

const users = [
    {
        id: 1,
        email: 'admin@gmail.com',
        password: 'password'
    },
    {
        id: 2,
        email: 'hieu@gmail.com',
        password: '1234'
    }
]
export default function FormLoginOut({props}) {
    let [formData,setFormData] = useState({
        email: "",
        password: "",
        isRememberMe: false
    });
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleLogout = ()=>{
        setIsLoggedIn(false)
        setFormData({
            email: "",
            password: "",
            isRememberMe: false
        })
    }

    const handleClick = () => {
        let userChecked = users.find((user)=>
            user.email === formData.email && user.password === formData.password
        )
        if (userChecked){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
            setFormData({
                email: "",
                password: "",
                isRememberMe: false
            })
        }
    }
    if(isLoggedIn){
      return (
          <div className="container d-flex align-items-center text-center">
              <div className="form-signin">
                  <h1 className="h3 mb-3 fw-normal">Welcome</h1>
                  <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleLogout}>Log out</button>
              </div>
          </div>
      )
    }
    return (
        <>
            <h1>{props}</h1>
            <div className="container d-flex align-items-center text-center">
                <div className="form-signin">
                    <form>
                        <img className="mb-4"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                             alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input className="form-control email" type="email" name="email" value={formData.email} onChange={handleChange}/>
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control password" type="password" name="password" value={formData.password} onChange={handleChange}/>
                            <label>Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" checked={formData.isRememberMe}/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleClick}>Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}