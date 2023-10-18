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
            className={`fixed blur-bg top-0 bottom-0 w-screen  flex justify-center items-center px-3 transform transition-transform ease-in-out duration-300 ${
                isShowModal ? 'translate-x-0 z-30' : 'translate-x-full z-30'
            }`}
        >
            <form
                onSubmit={handleSubmit(submit)}
                className="relative bg-white p-3 rounded-md grid gap-4 w-[min(100%,_300px)] shadow-lg shadow-[#0a2472]"
            >
                <h2 className="text-center font-bold text-2xl text-[#0a2472]">
                    {idToUserEdit ? 'Editar Usuario' : 'Nuevo Usuario'}
                </h2>
                <button
                    className="absolute text-[#a6e1fa] top-2 right-2 transition-colors rounded-lg hover:bg-[#0a2472]"
                    type="button"
                    onClick={handleClosedModal}
                >
                    <IconSquareRoundedX />
                </button>

                <div className="relative grid">
                    <label
                        className="relative font-medium "
                        htmlFor="first_name"
                    >
                        Nombre
                    </label>
                    <input
                        className="icon outline-none border-2 px-2
                        py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="first_name"
                        placeholder=''
                        {...register('first_name', {
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
                                value: 1,
                                message: 'Minimo 1 caracter',
                            },
                        })}
                    />
                    {errors.first_name && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.first_name.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-medium" htmlFor="last_name">
                        Apellidos
                    </label>
                    <input
                        className="icon outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="last_name"
                        placeholder=''
                        {...register('last_name', {
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
                                value: 1,
                                message: 'Minimo 1 caracter',
                            },
                        })}
                    />
                    {errors.last_name && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.last_name.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-medium" htmlFor="email">
                        Email
                    </label>

                    <input
                        type="text"
                        id="email"
                        className="icon outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        placeholder=''
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Campo requerido',
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message:
                                    'Correo invalido, (caracteres necesarios "@, .com")',
                            },
                            maxLength: {
                                value: 150,
                                message:
                                    'Supero la cantidad maxima 150 caracteres',
                            },
                            minLength: {
                                value: 1,
                                message: 'Minimo 1 caracter',
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-medium" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="icon outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="password"
                        placeholder=''
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
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-medium" htmlFor="image_url">
                        Imagen URL
                    </label>
                    <input
                        className="icon outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="text"
                        id="image_url"
                        placeholder=''
                        {...register('image_url')}
                    />
                </div>

                <div className="relative grid gap-1">
                    <label className="relative font-medium" htmlFor="birthday">
                        Cumpleaños
                    </label>
                    <input
                        className="outline-none border-2 px-2 py-1 rounded-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                        type="date"
                        id="birthday"
                        
                        {...register('birthday', {
                            required: {
                                value: true,
                                message: 'Campo requerido',
                            },
                        })}
                    />
                    {errors.birthday && (
                        <span className="text-red-500 absolute -bottom-1/4 text-xs">
                            {errors.birthday.message}
                        </span>
                    )}
                </div>

                <button
                    className="bg-[#0a2472] text-white p-2 px-4 uppercase font-bold rounded-2xl transition-colors hover:bg-[#000] mt-2"
                    type="submit"
                >
                    {idToUserEdit ? 'Guardar Cambios' : 'Agregar Nuevo Usuario'}
                </button>
            </form>
        </section>
    );
};
