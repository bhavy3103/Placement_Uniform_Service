// eslint-disable-next-line react/prop-types
const Message = ({ message, timestamp }) => {
  const dateTime = new Date(timestamp);

  // Get hours, minutes, day, month, and year
  const hours = dateTime.getHours() % 12 || 12;
  const minutes = dateTime.getMinutes();
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const period = dateTime.getHours() >= 12 ? ' pm' : ' am';
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedDateTime = `${hours}.${formattedMinutes}${period}, ${day}/${month}/${year}`;

  // Split message by newline characters and render each part separately
  // eslint-disable-next-line react/prop-types
  const messageParts = message?.split('\n');

  return (
    <div className='flex justify-between items-start bg-blue-600 text-white px-4 py-3 rounded-lg mt-2'>
      <div>
        {messageParts?.map((part, index) => (
          // Render each part or an empty line if the part is empty
          <div key={index}>{part || '\u00A0'}</div>
        ))}
      </div>
      <div className='text-sm min-w-40 text-gray-200 text-right'>
        <p>{formattedDateTime}</p>
      </div>
    </div>
  );
};

export default Message;
