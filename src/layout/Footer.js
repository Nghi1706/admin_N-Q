import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
    return (
        <footer className="bg-light text-black pt-5 pb-4 mt-3">
            <div className="container-fluid">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-tooth"/> Nha Khoa NQ
                    </h6>
                    <p>
                    Trung tâm Nha khoa Bảo Việt tự hào là một trong số ít đơn vị đi đầu trong lĩnh vực nha khoa thẩm mỹ: bọc răng sứ, trồng răng implant, niềng răng và tẩy trắng răng ...
                    </p>
                    </div>
                    <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Các chi nhánh :
                    </h6>
                    <p>
                        <h6>Chi nhánh 1</h6>
                        số XXX , đường XXX, Phường XXX, Quận/Huyện XXX, Thành phố/Tỉnh
                    </p>
                    <p>
                    <h6>Chi nhánh 2</h6>
                        số XXX , đường XXX, Phường XXX, Quận/Huyện XXX, Thành phố/Tỉnh
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        SDT liên hệ
                    </h6>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        nhakhoaXXX@gmail.com
                    </p>
                    <p>Cn1 <i className="fas fa-phone me-3"></i>09xxxxxxxx</p>
                    <p>Cn2 <i className="fas fa-phone me-3"></i>098xxxxxxx</p>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center p-4">
                2021 :
                <a className="text-reset fw-bold" href="/">nhakhoaNQ</a>
            </div>
            </div>
        </footer>
    )
}

export default Footer
