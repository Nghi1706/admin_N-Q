import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Axios from 'axios'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions';
import { postsState$ } from '../redux/selectors';
const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState("");
    const newschedule = ({
        name: name,
        phone: phone,
        date: date,
    })
    const dispatch = useDispatch();

    //cai react nay no co phai restart lại khi mà thay đổi code k , ko t cài 
    const datlich = () => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        if (name == '') {
            alert("bạn chưa nhập tên kìa !");
        }
        else if (phone != '' && date != '') {

            if (phone.length != 10) {
                alert("kiểm tra lại số điện thoại bạn nhé !");
            }
            else if (date < today) {
                alert("kiểm tra lại ngày khám nhé bạn !");
            }
            else {
                dispatch(actions.createSchedule.createScheduleRequest(newschedule));
                alert("Hẹn gặp quý khách tại nha khoa NQ :" + date);
            }
        }


    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-xl-2">

                    </div>
                    <div className="col-lg-8 col-md-8 col-xl-8">
                        <div className="row p-3 bg-success bg-gradient text-white">
                            <div className="col-lg-6 col-md-6 col-xl-6">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-xl-1">

                                    </div>
                                    <div className="col-lg-10 col-md-10 col-xl-10">
                                        <h6>ĐẶT LỊCH HẸN NGAY BÂY GIỜ</h6>
                                        <div className="form-group row m-2">
                                            <input type="text" className="form-control" id="inputEmail" placeholder="Nguyễn Văn A" required
                                                onChange={(event) => setName(event.target.value)} />
                                        </div>
                                        <div className="form-group row m-2">
                                            <input type="phone" className="form-control" id="inputName" placeholder="0999999999" required
                                                onChange={(event) => setPhone(event.target.value)} />
                                        </div>
                                        <div className="form-group row m-2">
                                            <label for="inputDate">Ngày khám</label>
                                            <input type="date" className="form-control" id="inputDate" required
                                                onChange={(event) => setDate(event.target.value)} />
                                        </div>
                                        <div className="form-group row m-4">
                                            <button className="btn btn-primary" onClick={datlich}>Đặt lịch</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-xl-1">

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xl-6">
                                <div className="row">
                                    <div className="col-lg-1 col-md-1 col-xl-1">

                                    </div>
                                    <div className="col-lg-10 col-md-10 col-xl-10">
                                        <h6>NHẬN ƯU ĐÃI NGAY. LIÊN HỆ:</h6>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">Địa chỉ chi nhánh 1 :</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2">
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">
                                                <p>XX/XX, tên đường, Phường ABC, Quận/Huyện ABC, TP/Tỉnh</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2">
                                                <i class="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">Địa chỉ chi nhánh 2 :</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2">
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">
                                                <p>XX/XX, tên đường, Phường ABC, Quận/Huyện ABC, TP/Tỉnh</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2">
                                                <i class="fas fa-phone-square"></i>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">CN1: 0987654321</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-xl-2"><i class="fas fa-phone-square"></i>
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-xl-10">
                                                <p>CN2: 0123456789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-1 col-xl-1">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-xl-2">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
