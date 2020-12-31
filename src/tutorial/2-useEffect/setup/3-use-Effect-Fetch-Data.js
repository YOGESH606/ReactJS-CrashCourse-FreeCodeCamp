import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        //console.log(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h3>github users</h3>
            <ul className=" row ">
                {
                    users.map((user) => {
                        const { id, login, avatar_url, html_url } = user;
                        const mystyle = {
                            height: "70px",
                            borderRadius: "50px"
                        };
                        return (
                            <div key={id} className='col-md-6'>
                                <div className='mt-2 text-center p-2 border border-danger  d-flex justify-content-around'>
                                    <img style={mystyle} src={avatar_url} alt={login} />
                                    <div>
                                        <h4>{login}</h4>
                                        <a href={html_url}>profile</a>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    )
                }
            </ul>
        </>

    );

};

export default UseEffectSecondArgument;