
import 'bootstrap/dist/css/bootstrap.min.css';

const Jumbotron=(props)=>{
    return(
        <div className="bg-dark">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-5 text-white">
                    <p className="my-5" style={{fontSize:"30px"}}>&#128075; <span className="fw-bold lead">Hey, Welcome</span></p>
                    <h1 className="display-4 fw-bold lh-1">News From <span className="text-warning">Multiverse</span><br /> Of Madness</h1>
                    <p className="lead my-5">Get access to all the publications for $9.90 month</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start my-5 mb-lg-3">
                        <button style={{borderRadius:"50px"}} type="button" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold text-dark">Subscribe</button>
                    </div>
                </div>
                <div className="col-lg-4 p-0 overflow-hidden">
                    <img className="img-fluid" src="book.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Jumbotron;