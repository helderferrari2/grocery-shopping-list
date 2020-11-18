import React from "react";

const error404 = () => {
    return (
        <div className="container h-100">
            <div className="row justify-content-center text-center">
                <div>
                    <h1>Ops, page not found!!!</h1>
                    <a className="btn  btn-outline-primary" href="/" role="button">Home</a>
                </div>
            </div>
        </div>

    );
}

export default error404;