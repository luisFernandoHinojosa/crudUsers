import { IconCake, IconMailFilled, IconUserFilled } from '@tabler/icons-react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

export const User = ({
    user,
    setConfirmDeleteUser,
    handleClickUpdate,
    setUserToDelete,
}) => {
    return (
        <article className="relative rounded-lg grid gap-2 overflow-hidden p-[2px] text-gray-800 ">
            <div className="absolute w-full h-full bg-gradient-to-r from-[#0a2472] via-[#0a2472] to-transparent -top-1/2 -left-1/2 animate-spin-slow origin-bottom-right "></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-[#0a2472] via-[#0a2472] to-transparent -top-1/2 -left-1/2 animate-spin-delay origin-bottom-right"></div>

            <article className=" bg-slate-100  rounded-lg z-10 overflow-hidden flex flex-col h-full">
                <div className="flex-grow">
                    <div className=" pt-2 p-4 rounded-md shadow-md shadow-[#0a2472]">
                        <img
                            src={user.image_url}
                            alt=""
                            className="relative w-[200px] left-1/2 -translate-x-1/2 rounded-[50%] transform scale-100 cursor-pointer hover:scale-95 transition-transform z-0 "
                        />
                    </div>

                    <div className="grid items-center  pt-4 pb-4 px-2">
                        <h5 className="relative flex gap-1 items-start text-lg font-bold">
                            <span className='relative top-[5px]'><IconUserFilled size={18}/></span>
                            {user.first_name} {user.last_name}
                        </h5>
                        <ul className="grid gap-1">
                            <li className="truncate flex items-center">
                                <span>{<IconMailFilled size={18}/>}</span>
                        
                                    <span className="font-semibold pl-1">Correo: </span>
                                    {user.email}
                            </li>
                            <li className="truncate flex items-center">
                            <span>{<IconCake size={18}/>}</span>
                                <span className="font-semibold pl-1">
                                    Cumpleaños:
                                </span>
                                {user.birthday}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative flex gap-2 justify-end bottom-2 right-2">
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
                            setConfirmDeleteUser(true), setUserToDelete(user);
                        }}
                    >
                        <IconTrash size={20} />
                    </button>
                </div>
            </article>
        </article>
    );
};
