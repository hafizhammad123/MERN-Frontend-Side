import { useState } from "react";
import { useLocation } from "react-router-dom";
import { urlGetNodeWork } from "../Config/Firebase";

function Updatedata () {
    const { state } = useLocation();
    const item = state.item; // Item ko useLocation se extract karein

    const [title, setTitle] = useState(item.title);
    const [des, setDes] = useState(item.des);
    const [price, setPrice] = useState(item.price);
    const [img, setImg] = useState(null);

   async function updateWork () {
        const imgUrl= await urlGetNodeWork({img})

        fetch(`http://localhost:2221/product/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                des,
                price,
                img:imgUrl
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data UPDATE successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem updating the data:', error);
        });

        alert("your data successfully update")
    }

    return <div>        
        <h1>Update work</h1>
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
                onChange={(e) => setDes(e.target.value)}
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
        <button onClick={updateWork}>Update</button>
    </div>
}
export default Updatedata;
