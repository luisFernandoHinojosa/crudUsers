import { useState } from 'react';

export const SearchUser = ({ users, setFilteredUser, setShowFilteredUser }) => {
    const [userSuggestions, setUserSuggestions] = useState([]);
    const [valueInput, setValueInput] = useState('');

    console.log('suggestions', userSuggestions);

    const handleSearch = (userName) => {
        const filteredUsers = users.filter((user) =>
            user.first_name.toLowerCase().startsWith(userName.toLowerCase())
        );
        setUserSuggestions(filteredUsers);
    };

    const handleInputChange = (e) => {
        const userName = e.target.value;
        if (userName === '') {
            setUserSuggestions([]);
            setValueInput('');
        } else {
            handleSearch(userName);
            setValueInput(userName);
        }
    };

    const handleSuggestionClick = (user) => {
        setFilteredUser(user);
        setShowFilteredUser(true);
        setValueInput(user.first_name + ' ' + user.last_name);
        setUserSuggestions([]);
    };
    const handleClearCharacter = (e) => {
        if (e.key === 'Delete' && valueInput.length > 0) {
            const newValue = valueInput.slice(0, valueInput.length -1);
            setValueInput(newValue);
        }
    };

    return (
        <section className="absolute text-black top-20 left-1/2 -translate-x-1/2 w-[300px] md:top-4 md:w-[350px] z-20 ">
            <form className="h-8 overflow-hidden rounded-lg grid border-2 border-[#00072d]">
                <input
                    type="text"
                    value={valueInput}
                    className="outline-none w-full h-full text-center font-semibold bg-slate-100"
                    placeholder="Buscar usuario por nombre"
                    onChange={handleInputChange}
                    onKeyDown={handleClearCharacter}
                />
            </form>

            {userSuggestions.length > 0 && (
                <ul className="absolute blur-bg bg-[#a6e1fa]/40 text-center w-full font-normal max-h-36 overflow-y-auto text-black rounded-t-lg">
                    {userSuggestions.map((user) => (
                        <li
                            key={user.id}
                            className="cursor-pointer transition-colors hover:bg-slate-100"
                            onClick={() => {
                                handleSuggestionClick(user);
                            }}
                        >
                            {user.first_name} {user.last_name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
