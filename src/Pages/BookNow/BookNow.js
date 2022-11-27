import React from 'react';

const BookNow = ({ bookingProduct }) => {
  const { pTitle, price } = bookingProduct;

  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-blue-100">
          <label htmlFor="book-now" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {/* <h3 className="text-lg font-bold">{name}</h3> */}
          <form className='grid grid-cols-1 gap-3 mt-10 '>
            <input type="text" disabled className="input w-full input-bordered " />
            <input type="email" disabled className="input w-full input-bordered " />
            <input type="text" value={pTitle} disabled className="input w-full input-bordered " />
            <input type="text" value={price} disabled className="input w-full input-bordered " />
            <input type="text" placeholder='Set location' className='input w-full input-bordered' />
            <input type="text" placeholder='Your phone number' className='input w-full input-bordered' />
            <input className='btn btn-primary w-full mt-6' type="submit" value="Book" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;