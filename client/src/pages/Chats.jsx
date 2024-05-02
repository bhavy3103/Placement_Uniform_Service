import { useState, useEffect } from 'react';
import Layout from '@/components/shared/Layout';
import AxiosUrl from '../../api/AxiosUrl';
import Message from '@/components/shared/Message';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import StudentList from './StudentList';

const Chats = () => {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [selectedEnrollments, setSelectedEnrollments] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      try {
        const res = await AxiosUrl.post('/api/chats/postMessage', {
          message: message,
          timestamp: new Date(),
          selectedEnrollments: selectedEnrollments,
        });
        // console.log('res', res);
        setMessage('');
        setAllMessages((prev) => [...prev, message]);
      } catch (error) {
        console.error('Error in postMessage:', error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
      handleSubmit(e);
    } else if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      setMessage((prevMessage) => prevMessage + '\n');
      const elem = document.getElementById('textarea-message');
      elem.scrollTo(0, elem.scrollHeight);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await AxiosUrl.get('/api/chats/getAllMessages');
        // console.log('res', res.data);
        setAllMessages(res.data.data);
      } catch (error) {
        console.error('Error in getAllMessages:', error);
      }
    };
    fetchMessages();
  }, [message]); // bad practice

  // scroll to bottom on new message
  useEffect(() => {
    const elem = document.getElementById('main-chat');
    elem.scrollTo(0, elem.scrollHeight);
  }, [allMessages]);

  return (
    <Layout>
      <Dialog>
        <DialogContent className='flex flex-col justify-between sm:max-w-[80vw] w-[70rem] min-h-[80vh] max-h-[90vh] overflow-hidden'>
          <DialogHeader className=''>
            <DialogTitle>Select Students</DialogTitle>
            <DialogDescription>
              Select the students you want to send this message.
            </DialogDescription>
          </DialogHeader>
          {/* body */}
          <StudentList
            selectedEnrollments={selectedEnrollments}
            setSelectedEnrollments={setSelectedEnrollments}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type='submit' onClick={handleSubmit}>
                Send Message
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>

        <div className='h-full flex overflow-hidden flex-col justify-between relative'>
          <div className='overflow-auto' id='main-chat'>
            {allMessages.length === 0 && (
              <div className='text-gray-800 text-center overflow-auto px-4 py-3 rounded-lg mt-2'>
                No messages yet.
              </div>
            )}
            {allMessages?.map((item, index) => (
              <Message
                key={index}
                message={item.message}
                timestamp={item.timestamp}
              />
            ))}
          </div>

          <form
            // onSubmit={handleSubmit}
            className='sticky bottom-0 w-full flex items-center justify-between gap-4 mt-3'
          >
            <textarea
              id='textarea-message'
              name='message'
              rows='1'
              className='flex-grow bg-gray-200 text-gray-800 focus:outline-none resize-none w-full rounded-md text-md px-4 py-3'
              placeholder='Type your message here'
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyPress}
            ></textarea>

            <DialogTrigger asChild>
              <Button className='flex justify-between items-center gap-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2'>
                <span>Send</span>
                <ChevronRight size={24} />
              </Button>
            </DialogTrigger>
          </form>
        </div>
      </Dialog>
    </Layout>
  );
};

export default Chats;
