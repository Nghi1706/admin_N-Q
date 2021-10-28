import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
const Navbar = () => {
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem("accessToken")
        history.replace('/')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light color">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/"><i className="fas fa-tooth logo" /></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Trang chủ</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/banggia">Bảng giá</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/lichkham">Lịch khám</Link>
                        </li>
                    </ul>
                </div>
                <button onClick={logout}>logout</button>
            </div>
        </nav>
    )
}

export default Navbar
