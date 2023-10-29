import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    base: '',
    root: resolve(__dirname, 'src'),
    server: {
        port: 3000,
    },

    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                login: resolve(__dirname, 'src/pages/login/login.html'),
                signin: resolve(__dirname, 'src/pages/register/signin.html'),
                profile: resolve(__dirname, 'src/pages/profile/profile.html'),
                messenger: resolve(__dirname, 'src/pages/messenger/messenger.html'),
                404: resolve(__dirname, 'src/pages/404/404.html'),
                500: resolve(__dirname, 'src/pages/500/500.html'),
            },
        }
    },

    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context: {
            chats: [
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Андрей',
                    personMsg: 'Изображение',
                    myMsg: '',
                    chatTime: '10:49',
                    chatUnread: '2',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Киноклуб',
                    personMsg: '',
                    myMsg: 'Стикер',
                    chatTime: '12:00',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Илья',
                    personMsg: 'Друзья, у меня для вас особенный выпуск новостей!...',
                    myMsg: '',
                    chatTime: '15:12',
                    chatUnread: '4',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Вадим',
                    personMsg: 'Круто!',
                    myMsg: '',
                    chatTime: 'Пт',
                    chatUnread: '',
                    isActive: true
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'тет-а-теты',
                    personMsg: 'И Human Interface Guidelines и Material Design рекомендуют...',
                    myMsg: '',
                    chatTime: 'Ср',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: '1, 2, 3',
                    personMsg: 'Миллионы россиян ежедневно проводят десятки часов свое...',
                    myMsg: '',
                    chatTime: 'Пн',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Design Destroyer',
                    personMsg: 'В 2008 году художник Jon Rafman  начал собирать...',
                    myMsg: '',
                    chatTime: 'Пн',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Day.',
                    personMsg: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
                    myMsg: '',
                    chatTime: '1 Мая 2022',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Стас Рогозин',
                    personMsg: 'Можно или сегодня или завтра вечером.',
                    myMsg: '',
                    chatTime: '12 Апр 2022',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Александр Болдин',
                    personMsg: 'Записался на Яндекс Практикум)',
                    myMsg: '',
                    chatTime: '7 Апр 2022',
                    chatUnread: '1',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'ИСБ России',
                    personMsg: 'Сегодня тренировки не будет',
                    myMsg: '',
                    chatTime: '22 марта 2022',
                    chatUnread: '5',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Старые друзья',
                    personMsg: '',
                    myMsg: 'Всем пока',
                    chatTime: '25 января 2022',
                    chatUnread: '',
                    isActive: false
                },
                {
                    chatAvatar: 'https://placehold.co/60x60',
                    personName: 'Чат-заглушка',
                    personMsg: 'Сообщение',
                    myMsg: '',
                    chatTime: 'Дата',
                    chatUnread: '',
                    isActive: false
                },
            ]
        }
    }),
],

});
