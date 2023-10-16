import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { UserCard } from './components/UserCard';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
    BASE_URL,
    EMPTY_FORM_VALUES,
    URL_IMAGE_DEFAULT,
} from './constants/users';
import { UserList } from './components/UserList';
import { FilteredUser } from './utils/FilteredUser';
import { ConfirmDeleteUser } from './utils/ConfirmDeleteUser';
import { Toaster,toast } from 'react-hot-toast';
function App() {
    //abre el modal dependiendo a su estado
    const [isShowModal, setIsShowModal] = useState(false);
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm();
    const [users, setUsers] = useState([]);
    const [idToUserEdit, setidToUserEdit] = useState(null);
    const [showFilteredUser, setShowFilteredUser] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);
    const [confirmDeleteUser, setConfirmDeleteUser] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    //const [emailError, setEmailError] = useState('')

    const handleOpenModal = () => {
        setIsShowModal(true);
    };

    const handleClosedModal = () => {
        setIsShowModal(false);
        reset(EMPTY_FORM_VALUES);
        console.log('cerre el modal');
        setidToUserEdit(null);
    };

    const submit = (data) => {
        !data.image_url && (data.image_url = URL_IMAGE_DEFAULT);
        !data.birthday && (data.birthday = null);
        if (idToUserEdit) {
            updateUser(data);
            toast.promise(
                 {
                   loading: 'Actualizando usuario...',
                   success: <b>Usuario actualizado con exito</b>,
                   error: <b>No se puedo actualizar al usuario</b>,
                 }
               );
            setFilteredUser(data);
        } else {
            toast.promise(
                createUser(data),
                 {
                   loading: 'Creando usuario...',
                   success: <b>Usuario creado con exito</b>,
                   error: <b>No se puedo crear al usuario</b>,
                 }
               );
        }
    };

    const handleClickUpdate = (userToUpdate) => {
        reset(userToUpdate);
        setidToUserEdit(userToUpdate.id);
        handleOpenModal();
    };

    const createUser = (data) => {
        return axios
            .post(BASE_URL + '/users/', data)
            .then(() => {
                handleClosedModal();
                getUserAll();
            })
            .catch((err) => console.log(err));
    };

    const updateUser = (data) => {
        return axios
            .put(BASE_URL + `/users/${idToUserEdit}/`, data)
            .then(() => {
                getUserAll();
                handleClosedModal();
            })
            .catch((err) => console.log(err));
    };

    const deleteUser = (id) => {
        console.log('ideee', id);
        return axios
            .delete(BASE_URL + `/users/${id}/`)
            .then(() => {
                getUserAll(), setShowFilteredUser(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const getUserAll = () => {
        axios
            .get(BASE_URL + '/users/')
            .then(({ data }) => setUsers(data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUserAll();
    }, []);

    return (
        <main className="font_text min-h-screen">
            <Header
                handleOpenModal={handleOpenModal}
                users={users}
                setFilteredUser={setFilteredUser}
                setShowFilteredUser={setShowFilteredUser}
            />

            <UserCard
                isShowModal={isShowModal}
                handleClosedModal={handleClosedModal}
                handleSubmit={handleSubmit}
                register={register}
                submit={submit}
                idToUserEdit={idToUserEdit}
                errors={errors}
                createUser={createUser}
            />

            <UserList
                users={users}
                setConfirmDeleteUser={setConfirmDeleteUser}
                handleClickUpdate={handleClickUpdate}
                setUserToDelete={setUserToDelete}
            />

            <FilteredUser
                user={filteredUser}
                handleClickUpdate={handleClickUpdate}
                showFilteredUser={showFilteredUser}
                setShowFilteredUser={setShowFilteredUser}
                setConfirmDeleteUser={setConfirmDeleteUser}
                setUserToDelete={setUserToDelete}
            />

            <ConfirmDeleteUser
                confirmDeleteUser={confirmDeleteUser}
                setConfirmDeleteUser={setConfirmDeleteUser}
                deleteUser={deleteUser}
                userToDelete={userToDelete}
                setShowFilteredUser={setShowFilteredUser}
            />
            {/* <button onClick={()=>toast.success('siiiiiiii')}>TOASTER</button> */}
            <Toaster />
        </main>
    );
}

export default App;
