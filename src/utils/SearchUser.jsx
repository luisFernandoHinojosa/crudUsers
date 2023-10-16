import { useState } from 'react';

export const SearchUser = ({users, setFilteredUser, setShowFilteredUser}) => {
    const [userSuggestions, setUserSuggestions] = useState([]);
    
    console.log('suggestions', userSuggestions);

    const handleSearch = (userName) => {
        const filteredUsers = users.filter((user) =>
            user.first_name.toLowerCase().startsWith(userName.trim().toLowerCase())
        );
        setUserSuggestions(filteredUsers);
    };

    const handleInputChange = (e) => {
        const userName = e.target.value;
        if (userName === '') {
            setUserSuggestions([]);
        } else {
            handleSearch(userName);
        }
    };

    return (
        <section className="absolute text-black top-20 left-1/2 -translate-x-1/2 w-[300px] md:top-4 md:w-[400px] z-20">
            <form className="h-8 overflow-hidden rounded-lg">
                <input
                    type="text"
                    className="outline-none w-full h-full text-center font-semibold bg-slate-100"
                    placeholder="Search name user"
                    onChange={handleInputChange}
                />
            </form>

            {userSuggestions.length > 0 && (
                <ul className="absolute blur-bg text-center w-full font-normal max-h-36 overflow-y-auto text-white">
                    {userSuggestions.map((user) => (
                        <li
                            key={user.id}
                            className="cursor-pointer transition-colors hover:bg-[#36151e]"
                            onClick={()=>{ setFilteredUser(user),setShowFilteredUser(true)}}
                        >
                            {user.first_name} {user.last_name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
