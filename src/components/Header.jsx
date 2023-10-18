import { SearchUser } from "../utils/SearchUser";

export const Header = ({handleOpenModal, users, setFilteredUser, setShowFilteredUser}) => {
    return (
        <header className="relative w-full bg-[#00072d] flex justify-between p-2 px-5 font-bold items-center text-white shadow-lg shadow-gray-700">
            <h1>USERS API</h1>
            <SearchUser users={users} setFilteredUser={setFilteredUser} setShowFilteredUser={setShowFilteredUser}/>
            <button onClick={handleOpenModal} className="bg-[#0e6ba8] p-2 my-2 rounded-xl cursor-pointer transition-colors hover:bg-blue-400 text-white">Crear usuario</button>
        </header>
    );
};
