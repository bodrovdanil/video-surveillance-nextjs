import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
    throw new Error('Отсутствует токен Telegram или chat ID');
}

const sendToTelegram = async (message: string) => {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
        await axios.post(url, {
            chat_id: CHAT_ID,
            text: message,
        });
    } catch (error) {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ error: 'Необходимо указать имя и телефон' });
        }

        const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;
        await sendToTelegram(message);

        return res.status(200).json({ message: 'Данные успешно отправлены в Telegram' });
    }

    return res.status(405).json({ error: 'Метод не разрешен' });
}
