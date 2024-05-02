import React, { useState } from "react";
import { urlGetNodeWork } from "../Config/Firebase";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const PostData = () => {
    const [title, setTitle] = useState("");
    const [des, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);

  const Navigate =useNavigate()
  

    async function postApiWork() {
        try {
           const imgUrl= await urlGetNodeWork({img})

            await fetch("http://localhost:2221/product/post",{
                method: "POST",
                headers:{
                    "content-Type":"application/json"
                },
                body: JSON.stringify({
                    title,
                    des,
                    price,
                    img: imgUrl
                }),
            })
            .then((res) => res.json())
            .then((res) => console.log(res));

            alert("data submit")
            
           
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="sell-form-container">
            <h1>Sell Form</h1>

            <div className="form-group">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    type="text"
                    placeholder="Title"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={des}
                    required
                    type="text"
                    placeholder="Description"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                    type="text"
                    placeholder="Price"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setImg(e.target.files[0])}
                    type="file"
                    required
                />
            </div>
            <button onClick={postApiWork}>Submit</button>
            <button className="mt-1" onClick={() => Navigate ("/Home")}>Go to home</button>

        </div>
    );
};


export default PostData;