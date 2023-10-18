import { IconSquareRoundedX } from '@tabler/icons-react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export const FilteredUser = ({
    user,
    handleClickUpdate,
    showFilteredUser,
    setShowFilteredUser,
    setConfirmDeleteUser,
    setUserToDelete,
}) => {
    return (
        <section
            className={`fixed top-0 bottom-0 left-0 right-0 blur-bg flex transform transition-transform ease-in-out duration-300 justify-center items-center  ${
                showFilteredUser
                    ? 'translate-x-0 z-20'
                    : 'translate-x-full z-20'
            }`}
        >
            <article className="relative w-[min(100%,_300px)] rounded-lg overflow-hidden border-[2px] border-[#001c55] bg-white shadow-xl shadow-[#0a2472]">
                
                    <button
                        className="absolute text-[#0a2472] top-2 right-2 transition-colors hover:text-white hover:bg-[#0a2472] rounded-lg"
                        type="button"
                        onClick={() => setShowFilteredUser(false)}
                    >
                        <IconSquareRoundedX />
                    </button>
                    <div className="pt-2 p-4 shadow-md shadow-[#0a2472] rounded-b-lg">
                        <img
                            src={user.image_url}
                            alt=""
                            className="relative w-[200px] left-1/2 -translate-x-1/2 rounded-[50%] transform scale-100 cursor-pointer hover:scale-95 transition-transform "
                        />
                    </div>

                    <div className="grid items-center  pt-4 pb-4 px-2">
                        <h5 className="flex gap-2 items-center text-lg font-bold">
                            {' '}
                            {user.first_name} {user.last_name}
                        </h5>
                        <ul className="grid gap-1">
                            <li className="truncate">
                                <span className="font-semibold">Correo: </span>
                                {user.email}
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Cumpleaños:{' '}
                                </span>
                                {user.birthday}
                            </li>
                        </ul>

                        <div className="flex gap-2 justify-end mt-3">
                            <button
                                className="bg-[#0e6ba8] p-1 hover:bg-yellow-700 transition-colors text-white rounded-lg"
                                onClick={() => handleClickUpdate(user)}
                            >
                                <IconEdit size={20} />
                            </button>
                            <button
                                className="bg-[#0e6ba8] p-1 hover:bg-yellow-700 transition-colors text-white rounded-lg"
                                type="button"
                                onClick={() => {
                                    setConfirmDeleteUser(true),
                                        setUserToDelete(user);
                                }}
                            >
                                <IconTrash size={20} />
                            </button>
                        </div>
                    </div>
                </article>
            
        </section>
    );
};
