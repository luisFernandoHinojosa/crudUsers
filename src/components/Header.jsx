import { SearchUser } from "../utils/SearchUser";

export const Header = ({handleOpenModal, users, setFilteredUser, setShowFilteredUser}) => {
    return (
        <header className="relative w-full bg-red-500/40 flex justify-between p-2 px-5 font-bold items-center">
            <h1>USERS</h1>
            <SearchUser users={users} setFilteredUser={setFilteredUser} setShowFilteredUser={setShowFilteredUser}/>
            <button onClick={handleOpenModal} className="bg-blue-500 p-3 rounded-xl cursor-pointer transition-colors hover:bg-blue-700">New User</button>
        </header>
    );
};
