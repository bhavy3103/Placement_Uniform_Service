import React, { useState, useEffect } from 'react';
import Layout from '@/components/shared/Layout';

const Chats = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    useEffect(() => {
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    return (
        <Layout>
            <p className='text-5xl mt-5'>Welcome To Chats</p>

            {messages.map((msg, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2 mt-2">
                    <p className="text-gray-800">{msg}</p>
                </div>
            ))}

            <div className="min-h-screen flex items-end justify-center">
                <div className="w-full">
                    <div className="bg-white p-8 rounded-lg w-full flex items-center ">
                        <textarea
                            id="message"
                            name="message"
                            rows="1"
                            className="flex-grow bg-transparent focus:outline-none resize-none mr-2 w-full"
                            placeholder="Type your message here"
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chats;
