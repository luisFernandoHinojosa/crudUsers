import { IconSquareRoundedX } from '@tabler/icons-react';
import { toast} from 'react-hot-toast'
export const ConfirmDeleteUser = ({
    confirmDeleteUser,
    setConfirmDeleteUser,
    deleteUser,
    userToDelete,
    setShowFilteredUser,
}) => {

    return (
        <section
            className={`fixed top-0 bottom-0 left-0 right-0 blur-bg flex justify-center items-center transform transition-transform ease-in-out duration-300 ${
                confirmDeleteUser
                    ? 'translate-y-0 z-20'
                    : 'translate-y-full z-20'
            }`}
        >
            <div className="relative w-[min(100%,_280px)] bg-[#fff]  text-center grid gap-1 p-2 rounded-lg text-black border-2 border-[#0a2472]">
                <div className="pb-3">
                    <button
                        className="absolute text-[#0a2472] top-1 right-1 transition-colors hover:bg-[#0e6ba8] rounded-lg hover:text-white"
                        type="button"
                        onClick={() => setConfirmDeleteUser(false)}
                    >
                        <IconSquareRoundedX />
                    </button>
                </div>
                <div>
                    <p className='font-medium'>Seguro que deseas eliminar a este usuario?</p>
                </div>
                <button
                    className=" bg-[#0e6ba8] text-white p-2 rounded-2xl  top-1 right-1 transition-colors hover:bg-[#0a2472]"
                    type="submit"
                    onClick={() =>{
                        setConfirmDeleteUser(false);
                        setShowFilteredUser(false);
                        toast.promise(
                            deleteUser(userToDelete.id),
                             {
                               loading: 'Eliminando usuario...',
                               success: <b>Usuario eliminado con exito</b>,
                               error: <b>No se puedo eliminar al usuario</b>,
                             }
                           );
                        }
                    }
                >
                    Confirmar
                </button>
            </div>
        </section>
    );
};
