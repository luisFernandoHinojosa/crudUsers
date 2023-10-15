import { User } from "./User"

export const UserList = ({users, deleteUser, handleClickUpdate}) => {

  console.log("Users",users)
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_300px)] justify-center max-w-[1000px] mx-auto gap-3 mt-16 pb-10   md:mt-10" >
        {
            users.map((user)=>(

                <User key={user.id} user={user} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate}/>
            ))
        }
    </section>
  )
}