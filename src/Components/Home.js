import Navbar from "./Nabar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Silder from "./Silder";
import FooterPage from "./Footer";
import Footer from "./Footer";


function Home() {

    const navigate = useNavigate()
    const [data, setData] = useState([])



    useEffect(function () {
        getData()
    }, [])


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

            // Pehle alert dikhana agar server tak connection na ho

            // Fetch request bhejna
            const response = await fetch("http://localhost:2221/product/get", requestOptions);

            // Check karna ke response mila ya nahi


            // Response ko parse karna
            const data = await response.json();

            // Response ko setData ke zariye set karna
            setData(data.DATA);

            // Log kar dena
            console.log(data.DATA);
        } catch (error) {
            // Error handle karna
            console.error("Data fetch karne mein error:", error);
            // Network error ka alert dikhana
            alert("Network Error");
        }
    };



    return (
        <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
            <Navbar />
            <Silder/>
            
            <div className="container py-5 flex-grow-1">
                <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                    {data.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="d-flex justify-content-between p-3">
                                    <p className="lead mb-0"></p>
                                    <div className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style={{ width: '35px', height: '35px' }}>
                                        <p className="text-white mb-0 small">x4</p>
                                    </div>
                                </div>
                                <img src={item.img} className="card-img-top" alt="Laptop" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <p className="small"><a href="#!" className="text-muted"></a></p>
                                        <p className="small text-danger"><s>$1099</s></p>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">{item.title}</h5>
                                        <h5 className="text-dark mb-0">{item.price}</h5>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <p className="text-muted mb-0">Available: <span className="fw-bold">6</span></p>
                                        <div className="ms-auto text-warning">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <button onClick={() => navigate(`/Detail/${item._id}`)}>Detail</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
  
}
export default Home;