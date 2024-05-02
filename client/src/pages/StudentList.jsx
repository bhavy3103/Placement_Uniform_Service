import { useState } from 'react';
import { Button } from '@/components/ui/button';

// eslint-disable-next-line react/prop-types
const StudentList = ({ selectedEnrollments, setSelectedEnrollments }) => {
//   const [selectedEnrollments, setSelectedEnrollments] = useState([])
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const startEnrollmentNumber = 210170116001;
  const enrollmentNumbers = Array.from(
    { length: 90 },
    (_, index) => startEnrollmentNumber + index
  );

  const filteredEnrollments = enrollmentNumbers.filter((enrollment) =>
    enrollment.toString().includes(searchTerm)
  );

  const handleCheckboxChange = (enrollment) => {
    if (selectedEnrollments?.includes(enrollment)) {
      setSelectedEnrollments(
        selectedEnrollments?.filter((item) => item !== enrollment)
      );
    } else {
      setSelectedEnrollments([...selectedEnrollments, enrollment]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedEnrollments([]);
    } else {
      setSelectedEnrollments(enrollmentNumbers);
    }
    setSelectAll(!selectAll);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='overflow-hidden'>
      <div className='flex justify-between items-center mb-2 overflow-hidden border-b pb-2'>
        <Button variant='default' size='default' onClick={handleSelectAll}>
          {selectAll ? 'Deselect All' : 'Select All'}
        </Button>
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search enrollment...'
            className='border border-gray-300 rounded-md px-4 py-2 mr-4'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className='grid grid-cols-3 h-80 overflow-auto md:grid-cols-3 gap-5'>
        {filteredEnrollments.map((enrollment) => (
          <div key={enrollment} className='flex items-center mx-auto'>
            <input
              type='checkbox'
              id={enrollment}
              checked={selectedEnrollments?.includes(enrollment)}
              onChange={() => handleCheckboxChange(enrollment)}
              className='mr-2'
            />
            <label htmlFor={enrollment}>{enrollment}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
