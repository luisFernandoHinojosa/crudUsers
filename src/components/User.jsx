import { IconEdit, IconTrash } from '@tabler/icons-react';

export const User = ({
    user,
    setConfirmDeleteUser,
    handleClickUpdate,
    setUserToDelete,
}) => {
    return (
    <article className="relative rounded-lg grid gap-2 overflow-hidden p-1 text-gray-800">
            <div className="absolute w-full h-full bg-gradient-to-r from-[#8cff98] via-[#8cff98] to-transparent -top-1/2 -left-1/2 animate-spin-slow origin-bottom-right "></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-[#8cff98] via-[#8cff98] to-transparent -top-1/2 -left-1/2 animate-spin-delay origin-bottom-right"></div>

            <article className=' bg-[#6f7c12]  rounded-lg z-10 overflow-hidden'>
                <div className='bg-purple-100 pt-2 p-4 rounded-b-2xl'>
                <img
                        src={user.image_url}
                        alt=""
                        className="relative w-[200px] left-1/2 -translate-x-1/2 rounded-[50%] transform scale-100 cursor-pointer hover:scale-95 transition-transform z-0"
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
                            <span className="font-semibold">Cumpleaños: </span>
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
    );
};
