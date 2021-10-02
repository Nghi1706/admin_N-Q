import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions';
import { postsState$ } from '../redux/selectors';
import { useState } from 'react';
export default function Costs() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const add = ({
        name: name,
        cost: cost,
    })
    const edit_ser = () => {
        const i = window.event.srcElement.value;
        document.getElementById('id_service_edit').innerHTML = i;
        document.getElementById('name_service_edit').innerHTML = document.getElementById(i + '_name').textContent;
        document.getElementById('cost_service_edit').innerHTML = document.getElementById(i + '_cost').textContent;
        document.getElementById('id_service_edit').value = i;
        document.getElementById('name_service_edit').value = document.getElementById(i + '_name').textContent;
        document.getElementById('cost_service_edit').value = document.getElementById(i + '_cost').textContent;

    }
    const del_ser = () => {
        const i = window.event.srcElement.value;
        document.getElementById('id_service_del').innerHTML = i;
        document.getElementById('name_service_del').innerHTML = document.getElementById(i + '_name').textContent;
        document.getElementById('cost_service_del').innerHTML = document.getElementById(i + '_cost').textContent;
        document.getElementById('id_service_del').value = i;
        document.getElementById('name_service_del').value = document.getElementById(i + '_name').textContent;
        document.getElementById('cost_service_del').value = document.getElementById(i + '_cost').textContent;

    }
    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);
    const add_service = () => {
        if (name != '' && cost != '') {
            dispatch(actions.createCost.createCostRequest(add));
            alert('đã thêm sản phẩm thành công !');
            window.location.reload();
        }
        else {
            alert("điền đầy đủ bạn nhé !")
        }
    }
    const edit_service = () => {
        const id = document.getElementById('id_service_edit').value;
        const name = document.getElementById('name_service_edit').value;
        const cost = document.getElementById('cost_service_save').value;
        if (name != '' && id != '' && cost > 0) {
            const edit_s = {
                _id: id,
                name: name,
                cost: cost,
            }
            dispatch(actions.updateCost.updateCostRequest(edit_s, { name: edit_s.name, cost: edit_s.cost }))
            alert('updated')
            window.location.reload();
            console.log(edit_s);
        }
        else {
            alert('kiểm tra lại thông tin nhé !')
        }
    }
    const del_service = () => {
        const id = document.getElementById('id_service_del').value;
        const dell = { _id: id };
        dispatch(actions.deleteCost.deleteCostRequest(dell));
        alert('xoá thành công !')
        window.location.reload();

    }
    return (

        <div className="container-fluid mt-3">
            <div className="row text-center">
                <div className="col-lg-2 col-md-2 col-xl-2">
                </div>
                <div className="col-lg-8 col-md-8 col-xl-8 border border-2 rounded">
                    <h2>Bảng giá các dịch vụ :</h2>
                    <table className="table table-sm mt-2">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">Tên dịch vụ</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((val, key) => {
                                return (
                                    <tr>
                                        <td style={{ float: 'left' }} id={val._id + '_name'}><p>{val.name}</p></td>
                                        <td id={val._id + '_cost'}>{val.cost.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                                        <td><button type="button" style={{ width: '50px', border: 'none', backgroundColor: 'white', color: 'green' }} value={val._id} data-bs-toggle="modal" data-bs-target="#editModal" onClick={edit_ser}>Edit</button>
                                            <button type="button" style={{ width: '50px', border: 'none', backgroundColor: 'white', color: 'red' }} value={val._id} data-bs-toggle="modal" data-bs-target="#delModal" onClick={del_ser}>Del</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-2 col-md-2 col-xl-2">
                    <button type="button" className="btn btn-success mt-3" style={{ width: '150px' }} data-bs-toggle="modal" data-bs-target="#addModal">Add Service</button>
                </div>
                {/* modal add */}
                <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add service</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <fieldset>
                                        <legend>Tên dịch vụ</legend>
                                        <textarea type="text" class="form-control" name="" id="name_service" placeholder=""
                                            required onChange={(event) => setName(event.target.value)}
                                        ></textarea>
                                        <br />
                                        <legend>Đơn giá</legend>
                                        <input type="number" class="form-control" id="cost_service" required
                                            onChange={(event) => setCost(event.target.value)}
                                        />

                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={add_service}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal delete */}
                <div className="modal fade" id="delModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Delete service</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <fieldset>
                                        <legend>Mã dịch vụ</legend>
                                        <input type="text" class="form-control" name="" id="id_service_del" placeholder=""
                                            required />
                                        <br />
                                        <legend>Tên dịch vụ</legend>
                                        <textarea type="text" class="form-control" name="" id="name_service_del" placeholder=""
                                            required onChange={(event) => setName(event.target.value)}
                                        ></textarea>
                                        <br />
                                        <legend>Đơn giá</legend>
                                        <input type="text" class="form-control" id="cost_service_del" required
                                            onChange={(event) => setCost(event.target.value)}
                                        />
                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" onClick={del_service}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal edit */}
                <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit service</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <fieldset>
                                        <legend>Mã dịch vụ</legend>
                                        <input type="text" class="form-control" name="" id="id_service_edit" placeholder=""
                                            required />
                                        <br />
                                        <legend>Tên dịch vụ</legend>
                                        <textarea type="text" class="form-control" name="" id="name_service_edit" placeholder=""
                                            required onChange={(event) => setName(event.target.value)}
                                        ></textarea>
                                        <br />
                                        <legend>Đơn giá</legend>
                                        <input type="text" class="form-control" id="cost_service_edit" required />
                                        <legend>Đổi giá</legend>
                                        <input type="number" class="form-control" required id="cost_service_save"
                                            onChange={(event) => setCost(event.target.value)}
                                        />
                                    </fieldset>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success" onClick={edit_service}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}


