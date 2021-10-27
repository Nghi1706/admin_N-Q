import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../redux/actions";
import { scheduleState$ } from "../redux/selectors";
import moment from "moment"
export default function Costs() {
    const dispatch = useDispatch();
    const Schedules = useSelector(scheduleState$);
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
        alert("came")
        window.location.reload();

    }
    const smail = async () => {
        const mail = {
            mail:
                window.event.srcElement.value
        };

        const response = await fetch("https://nqguimail.herokuapp.com/sendmail", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mail }),
        }).then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Mail đã gửi");
                } else if (resData.status === "fail") {
                    alert("Gửi mail không thành công !");
                }
            })
        console.log(mail)
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
                                        <td id={val._id + "_name"} style={{ float: "left" }} value={val.name}>{val.name}</td>
                                        <td>0{val.phone}</td>
                                        <td id={val._id + "_mail"} value={val.mail}>{val.mail}</td>
                                        <td id={val._id + "_date"} value={moment(val.date).format("DD-MM-YYYY")}>{moment(val.date).format("DD-MM-YYYY")}</td>
                                        <td>{val.status}</td>
                                        <td>
                                            <button type="button" style={{ width: "95px", border: "none", backgroundColor: "white", color: "green" }} value={val.mail} onClick={smail}>Send_mail</button>
                                            <button type="button" style={{ width: "70px", border: "none", backgroundColor: "white", color: "red" }} value={val._id} onClick={came}>came</button>
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


