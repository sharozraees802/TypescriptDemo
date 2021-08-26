
import React from 'react'

interface ICreateUser{
    user:any;
    onChangeFrom:Function;
    createUser:Function;
}

const CreateUser = ({user,onChangeFrom,createUser}:ICreateUser) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2 style={{color:'white'}}>Create User</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={e=>onChangeFrom(e)} className="form-control" name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={e=>onChangeFrom(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={e=>onChangeFrom(e)} className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                    </div>
                    <button type="button" onClick={e=>createUser()} className="btn btn-danger mrgnbtm">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser