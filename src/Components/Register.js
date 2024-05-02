import { useState } from "react"
import { urlGetNodeWork } from "../Config/Firebase"
import { useNavigate } from "react-router-dom"

function RegisterPage() {

    const navigate = useNavigate()

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [fullname, setfullname] = useState()
    const [conutry, setconutry] = useState()
    const [city, setcity] = useState()
    const [age, setage] = useState()
    const [img, setimg] = useState()


    async function postResgister() {
        try {
            const imgUrl = await urlGetNodeWork({ img })

            await fetch("http://localhost:2221/Auth/register", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    fullname,
                    conutry,
                    city,
                    age,
                    img: imgUrl
                }),
            })
                .then((res) => res.json())
                .then((res) => console.log(res));

            alert("REGISTER!")
            navigate("/Login")

        } catch (error) {
            console.log(error)
        }
    }


    return <div>
        <input
            onChange={(e) => setemail(e.target.value)}

            required
            type="text"
            placeholder="email"
        />

        <input
            onChange={(e) => setpassword(e.target.value)}

            required
            type="text"
            placeholder="password"
        />

        <input
            onChange={(e) => setfullname(e.target.value)}

            required
            type="text"
            placeholder="full name"
        />

        <input
            onChange={(e) => setconutry(e.target.value)}

            required
            type="text"
            placeholder="conutry"
        />

        <input
            onChange={(e) => setcity(e.target.value)}

            required
            type="text"
            placeholder="city"
        />

        <input
            onChange={(e) => setage(e.target.value)}

            required
            type="text"
            placeholder="age"
        />

        <input
            onChange={(e) => setimg(e.target.files[0])}
            type="file"
            required
        />
        
        <p>ap ka aacount hai to <a onClick={() => navigate("/Login")}>login</a></p>

        <button onClick={postResgister}>Submit</button>

    </div>
}

export default RegisterPage;