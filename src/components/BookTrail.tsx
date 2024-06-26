import React from 'react';

const BookTrail = (props) => {
    const { toggleEnquiry } = props;

    return (
        <div className='w-full p-3 bg-[#0b93db4d] items-center justify-center flex'>
            {/* Find a Mentor */}
            <button
                onClick={toggleEnquiry}
                className='bg-brandSecondary w-2/3 py-2 px-3 border-2 border-black rounded-3xl hover:bg-brandPrimary font-poppins font-semibold transition-all duration-300'>
                Book a Free Trail
            </button>
        </div>
    );
};

export default BookTrail;