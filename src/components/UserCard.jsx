import { IconSquareRoundedX } from '@tabler/icons-react';

export const UserCard = ({
    isShowModal,
    handleClosedModal,
    handleSubmit,
    register,
    submit,
    idToUserEdit,
    errors,
}) => {

    return (
        <section
            className={`fixed blur-bg top-0 bottom-0 left-0 right-0 flex justify-center items-center px-3 transform transition-transform ease-in-out duration-300 ${
                isShowModal ? 'translate-x-0 z-30' : '-translate-x-full z-30'
            }`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                className="relative bg-[#8499b1] p-3 rounded-md grid gap-4 w-[min(100%,_300px)] border-2 border-[#7b6d8d]"
            >
                <h2 className="text-center font-bold text-2xl">
                    {idToUserEdit ? 'Editar Usuario' : 'Nuevo Usuario'}
                </h2>
                <button
                    className="absolute text-[#36151e] top-2 right-2 transition-colors hover:text-red-700"
                    type="button"
                    onClick={handleClosedModal}
                >
                    <IconSquareRoundedX />
                </button>

                <div className="relative grid">
                    <label className="relative font-light " htmlFor="first_name">
                        Nombre
                    </label>
                    <input
                        className="outline-none border-2 px-2
                        py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="first_name"
                        autoFocus
                        {...register('first_name', {
                            required: {
                                value: true,
                                message: 'Campo requerido',
                            },
                        })}
                    />
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-light" htmlFor="last_name">
                        Apellidos
                    </label>
                    <input
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="last_name"
                        {...register('last_name')}
                    />
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-light" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Correo invalido',
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-500">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-light" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Campo requerido',
                            },
                            maxLength: {
                                value: 25,
                                message:
                                    'Supero la cantidad maxima 25 caracteres',
                            },
                            minLength: {
                                value: 4,
                                message: 'Minimo 4 caracteres',
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="text-red-500">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-light" htmlFor="image_url">
                        Imagen URL
                    </label>
                    <input
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="image_url"
                        {...register('image_url')}
                    />
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-light" htmlFor="birthday">
                        Cumpleaños
                    </label>
                    <input
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="date"
                        id="birthday"
                        {...register('birthday')}
                    />
                </div>

                <button
                    className="bg-[#593f62] text-black p-2 px-4 uppercase font-semibold rounded-2xl transition-colors hover:bg-purple-950 hover:text-white"
                    type="submit"
                >
                    {idToUserEdit ? 'Guardar Cambios' : 'Agregar Nuevo Usuario'}
                </button>
            </form>
        </section>
    );
};
