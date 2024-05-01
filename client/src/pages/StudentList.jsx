import React, { useState } from 'react';
import Layout from '@/components/shared/Layout';
import { Button } from '@/components/ui/button';

const StudentList = () => {
    const [selectedEnrollments, setSelectedEnrollments] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const startEnrollmentNumber = 210170116001;
    const enrollmentNumbers = Array.from({ length: 90 }, (_, index) => startEnrollmentNumber + index);

    const filteredEnrollments = enrollmentNumbers.filter(enrollment =>
        enrollment.toString().includes(searchTerm)
    );

    const handleCheckboxChange = (enrollment) => {
        if (selectedEnrollments.includes(enrollment)) {
            setSelectedEnrollments(selectedEnrollments.filter((item) => item !== enrollment));
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
        <Layout>
            <div className="mt-5">
                <p className='text-5xl'>Student-List</p>
                <div className="flex justify-between mt-4 mb-4">
                    <Button
                        variant="default"
                        size="default"
                        onClick={handleSelectAll}
                    >
                        {selectAll ? 'Deselect All' : 'Select All'}
                    </Button>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search enrollment..."
                            className="border border-gray-300 rounded-md px-4 py-2 mr-4"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-5 mb-2">
                      {filteredEnrollments.map((enrollment) => (
                          <div key={enrollment} className="flex items-center">
                              <input
                                  type="checkbox"
                                  id={enrollment}
                                  checked={selectedEnrollments.includes(enrollment)}
                                  onChange={() => handleCheckboxChange(enrollment)}
                                  className="mr-2"
                              />
                              <label htmlFor={enrollment}>{enrollment}</label>
                          </div>
                      ))}
                  </div>
                </div>
            
        </Layout>
    );
};

export default StudentList;
