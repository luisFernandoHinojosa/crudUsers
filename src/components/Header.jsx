import { SearchUser } from "../utils/SearchUser";

export const Header = ({handleOpenModal, users, setFilteredUser, setShowFilteredUser}) => {
    return (
        <header className="relative w-full bg-[#36151e] flex justify-between p-2 px-5 font-bold items-center text-white shadow-custom">
            <h1>USERS</h1>
            <SearchUser users={users} setFilteredUser={setFilteredUser} setShowFilteredUser={setShowFilteredUser}/>
            <button onClick={handleOpenModal} className="bg-[#8499b1] p-3 rounded-xl cursor-pointer transition-colors hover:bg-blue-200 text-black">New User</button>
        </header>
    );
};
