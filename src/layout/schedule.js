import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions';
import { scheduleState$ } from '../redux/selectors';
import nodemailer from 'nodemailer';
import moment from 'moment'
export default function Costs() {
    const dispatch = useDispatch();
    const Schedules = useSelector(scheduleState$);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nguyenvannghi17062000@gmail.com',
            pass: 'nguyenvannghi17062000' // naturally, replace both with your real credentials or an application-specific password
        }
    });
    React.useEffect(() => {
        dispatch(actions.fetchSchedule.fetchScheduleRequest());
    }, [dispatch]);
    const came = () => {
        const id = window.event.srcElement.value;
        const schedule = {
            _id: id,
            status: "came",
        }
        dispatch(actions.updateSchedule.updateScheduleRequest(schedule, { status: schedule.status }))
        alert('came')
        window.location.reload();

    }
    const sendmail = () => {
        const mail = window.event.srcElement.value;
        const mailOptions = {
            from: 'nguyenvannghi170620000@gmail.com',
            to: 'nguyenvantri23052009@gmail.com',
            subject: '[Lịch khám] tại [Nha khoa NQ]',
            text: 'Nha khoa NQ rất vui khi được đón tiếp anh/chị trong thời gian sắp tới. Trân trọng!'
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                alert('gửi mail thành công')
            }
        });

    }
    return (

        <div className="container-fluid mt-3">
            <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-xl-12 border border-2 rounded">
                    <h2>Lịch Khám :</h2>
                    <table className="table table-sm mt-2">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">Họ và tên</th>
                                <th scope="col">SDT</th>
                                <th scope="col">Mail</th>
                                <th scope="col">Ngày khám</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Schedules.map((val, key) => {
                                return (
                                    <tr>
                                        <td id={val._id + '_name'} style={{ float: 'left' }} value={val.name}>{val.name}</td>
                                        <td>0{val.phone}</td>
                                        <td id={val._id + '_mail'} value={val.mail}>{val.mail}</td>
                                        <td id={val._id + '_date'} value={moment(val.date).format('DD-MM-YYYY')}>{moment(val.date).format('DD-MM-YYYY')}</td>
                                        <td>{val.status}</td>
                                        <td>
                                            <button type="button" style={{ width: '95px', border: 'none', backgroundColor: 'white', color: 'green' }} value={val.mail} onClick={sendmail}>Send_mail</button>
                                            <button type="button" style={{ width: '70px', border: 'none', backgroundColor: 'white', color: 'red' }} value={val._id} onClick={came}>came</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}


