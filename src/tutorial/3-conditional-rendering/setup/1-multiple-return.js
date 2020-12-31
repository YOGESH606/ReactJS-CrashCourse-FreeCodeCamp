import React, { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user');

    useEffect(() => {
     
        fetch(url)
        .then((rep) =>{
            if(rep.status>=200 && rep.status<=299){
               return rep.json()
            }  
            else{
                setIsLoading(false);
                setIsError(true);
                throw new Error(rep.statusText);
            }   
        })
        .then((user)=>{
            const { login } = user;
            setUser(login);
            setIsLoading(false) 
        })
        .catch((error) => console.log(error))
    }, [])
    if (isLoading) {
        return (
            <div>
                <h1>
                    Loading....
                </h1>
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                <h1>
                    Error....
                </h1>
            </div>
        );
    }
    return (
        <div>
            <h2>
                {user}
            </h2>
        </div>
    );
}

export default MultipleReturns;