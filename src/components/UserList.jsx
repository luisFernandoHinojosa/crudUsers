import { User } from "./User"

export const UserList = ({users, setConfirmDeleteUser, handleClickUpdate, setUserToDelete}) => {

  return (
    <section className="grid grid-cols-[repeat(auto-fit,_300px)] justify-center max-w-[1000px] mx-auto gap-3 mt-16 pb-10   md:mt-10 z-0">
        {
            users.map((user)=>(

                <User key={user.id} user={user} setConfirmDeleteUser={setConfirmDeleteUser} handleClickUpdate={handleClickUpdate} setUserToDelete={setUserToDelete}/>
            ))
        }
    </section>
  )
}