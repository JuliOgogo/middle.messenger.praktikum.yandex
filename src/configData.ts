export const loginInputs = [
    {
        name: 'login', id: 'login', type: 'text', label: 'Логин',
    },
    {
        name: 'password', id: 'password', type: 'password', label: 'Пароль',
    },
];

export const registrationInputs = [
    {
        name: 'email', id: 'email', type: 'email', label: 'Почта',
    },
    {
        name: 'login', id: 'login', type: 'text', label: 'Логин',
    },
    {
        name: 'first_name', id: 'first_name', type: 'text', label: 'Имя',
    },
    {
        name: 'second_name', id: 'second_name', type: 'text', label: 'Фамилия',
    },
    {
        name: 'phone', id: 'phone', type: 'tel', label: 'Телефон',
    },
    {
        name: 'password', id: 'password', type: 'password', label: 'Пароль',
    },
    {
        name: 'password-check', id: 'password-check', type: 'password', label: 'Пароль (ещё раз)',
    },
];

export const profileRows = [
    { title: 'Почта', value: 'qqq@qq.com' },
    { title: 'Логин', value: 'ivanivanov' },
    { title: 'Имя', value: 'Иван' },
    { title: 'Фамилия', value: 'Иванов' },
    { title: 'Имя в чате', value: 'Иван' },
    { title: 'Телефон', value: '+7 (909) 967 30 30' },
];

export const profileChangeDataInputs = [
    {
        name: 'email', id: 'email', type: 'email', title: 'Почта', value: 'qqq@qq.com',
    },
    {
        name: 'login', id: 'login', type: 'text', title: 'Логин', value: 'ivanivanov',
    },
    {
        name: 'first_name', id: 'first_name', type: 'text', title: 'Имя', value: 'Иван',
    },
    {
        name: 'second_name', id: 'second_name', type: 'text', title: 'Фамилия', value: 'Иванов',
    },
    {
        name: 'display_name', id: 'display_name', type: 'text', title: 'Имя в чате', value: 'Иван',
    },
    {
        name: 'phone', id: 'phone', type: 'tel', title: 'Телефон', value: '+7 (909) 967 30 30',
    },
];

export const profileChangePasswordInputs = [
    {
        name: 'oldPassword', id: 'oldPassword', type: 'password', title: 'Старый пароль', value: '12345',
    },
    {
        name: 'newPassword', id: 'newPassword', type: 'password', title: 'Новый пароль', value: '12345',
    },
    {
        name: 'password-check', id: 'password-check', type: 'password', title: 'Повторите новый пароль', value: '12345',
    },
];

export const chats = [
    {
        name: 'Lera', message: 'Hello', time: '11:15', alerts: '1',
    },
    { name: 'Nastya', message: '...', time: '21:15' },
    {
        name: 'Lenka Top', message: 'hahahah', time: '00:15', alerts: '8',
    },
];
