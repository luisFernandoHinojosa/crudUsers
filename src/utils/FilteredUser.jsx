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
            className={`fixed top-0 bottom-0 left-0 right-0 blur-bg flex justify-center items-center  ${
                showFilteredUser
                    ? 'visible opacity-100 z-20'
                    : 'invisible opacity-0'
            }`}
        >
            <article className="relative w-[min(100%,_300px)] rounded-lg overflow-hidden border-2 border-green-600">
                <article className=" bg-[#6f7c12]  rounded-lg overflow-hidden ">
                    <button
                        className="absolute text-red-500 top-2 right-2 transition-colors hover:text-red-700"
                        type="button"
                        onClick={() => setShowFilteredUser(false)}
                    >
                        <IconSquareRoundedX />
                    </button>
                    <div className="bg-purple-100 pt-2 p-4 rounded-b-2xl">
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

                        <div className="flex gap-2 justify-center mt-3">
                            <button
                                className="bg-[#000] p-1 hover:bg-yellow-700 transition-colors text-white rounded-lg"
                                onClick={() => handleClickUpdate(user)}
                            >
                                <IconEdit size={20} />
                            </button>
                            <button
                                className="bg-[#000] p-1 hover:bg-yellow-700 transition-colors text-white rounded-lg"
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
            </article>
        </section>
    );
};
