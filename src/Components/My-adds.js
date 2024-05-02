import { useEffect, useState } from "react";
import Navbar from "./Nabar";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

function AddHistory() {
    const navigation = useNavigate();
    const [data, setData] = useState([]);

    
//get reqest with token bi sath hai this secret work//

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            // Token ko localStorage se retrieve karna
            const token = localStorage.getItem('token');
    
            // Fetch request bhejne ke liye options tayyar karna
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Token ko Bearer authentication ke taur par header mein include karna
                    'Content-Type': 'application/json'
                }
            };
    
            // Fetch request bhejna
            const response = await fetch("http://localhost:2221/product/get", requestOptions);
    
            // Response ko parse karna
            const data = await response.json();
    
            // Response ko setData ke zariye set karna
            setData(data.DATA);
    
            // Log kar dena
            console.log(data.DATA);
        } catch (error) {
            // Error handle karna
            console.error("Data fetch karne mein error:", error);
            alert("Network Error");
        }
    };
    
    // Function to navigate to update page with item ID
    const navigateToUpdate = (itemId) => {
        navigation(`/update/${itemId}`, { state: { item: { _id: itemId } } });
    };

    // Function to delete item by ID
    const deleteItem = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:2221/product/${itemId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // If deletion is successful, fetch updated data
                getData();
                console.log("Item deleted successfully!");
                alert("Item deleted successfully!")
            } else {
                console.error("Failed to delete item.");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <h1>My Adds</h1>

            <div className="row">
                {data.map((item) => (
                    <div key={item._id} className="col-md-3 col-sm-6">
                        <div className="product-grid">
                            <div className="product-image">
                                <a href="#" className="image">
                                    <img className="pic-1" src={item.img} alt="" />
                                </a>
                                <ul className="product-links">
                                    <li>
                                        <button className="fa fa-shopping-bag" onClick={() => navigateToUpdate(item._id)}>Update</button>
                                        {console.log(item._id)}
                                    </li>
                                    <li>
                                        <button className="fa fa-trash" onClick={() => deleteItem(item._id)}>Delete</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-content">
                                <h3 className="title"><a href="#">{item.title}</a></h3>
                                <div className="price">{item.price}</div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default AddHistory;
