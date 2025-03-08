import { Link } from "react-router-dom";

export function Banner() {
    return(
        <div className="container d-flex justify-content-center mt-5">
        <Link to="">
            <div className="w-100">
                <img src="./Etica.jpg" className="img-fluid" alt="banner" />
            </div>
        </Link>
        </div>
    );
}