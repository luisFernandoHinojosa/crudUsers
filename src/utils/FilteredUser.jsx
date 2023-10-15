import { IconSquareRoundedX } from "@tabler/icons-react"
import { IconEdit, IconTrash } from "@tabler/icons-react"

export const FilteredUser = ({user, handleClickUpdate, deleteUser, showFilteredUser, setShowFilteredUser}) => {

    console.log("mostrarrrrr",user)
  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0  border-2 border-green-300 bg-red-700/40 flex justify-center items-center  ${showFilteredUser? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <article className="relative bg-blue-500 w-[min(100%,_300px)] p-1 rounded-lg">
        <button
                    className="absolute text-red-500 top-2 right-2 transition-colors hover:text-red-700"
                    type="button"
                    onClick={()=>setShowFilteredUser(false)}
                >
                    <IconSquareRoundedX/>
                </button>
            <div>
            <img
                src={user.image_url}
                alt=""
                className="relative w-[200px] left-1/2 -translate-x-1/2 rounded-[50%] transform scale-100 cursor-pointer hover:scale-95 transition-transform z-0"
            />
            </div>
    
            <div className='grid items-center'>
                <h5 className="flex gap-2 items-center text-lg font-bold">
                    {' '}
                    {user.first_name} {user.last_name}
                </h5>
                <ul className="grid gap-1 text-gray-800">
                    <li className='truncate'>
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
                        className="bg-yellow-500 p-1 hover:bg-yellow-700 transition-colors text-white rounded-lg"
                        onClick={() => handleClickUpdate(user)}
                    >
                        <IconEdit size={20} />
                    </button>
                    <button
                        className="bg-red-500 p-1 hover:bg-red-700 transition-colors text-white rounded-lg"
                        onClick={() => deleteUser(user.id)}
                    >
                        <IconTrash size={20} />
                    </button>
                </div>
            </div>
            </article>
        </section>
  )
}