export function InputEmail() {
    return(
        <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="email" placeholder="Email"/>
            <label htmlFor="floatingInput">Email</label>
            <span id="span-email" className="fs-5 fw-bold text-danger"></span>
        </div>
    );
}