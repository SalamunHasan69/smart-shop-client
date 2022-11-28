import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookNow = ({ bookingProduct, setBookingProduct }) => {
  const { pTitle, price } = bookingProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const pTitle = form.pTitle.value;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      name,
      email,
      pTitle,
      price,
      location,
      phone,
    }

    fetch('https://smart-shop-server-salamunhasan69.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          setBookingProduct(null);
          toast.success(`${pTitle} is booked`)
        }
      });

  }

  return (
    <div>
      <input type="checkbox" id="book-now" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-blue-100">
          <label htmlFor="book-now" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          {/* <h3 className="text-lg font-bold">{name}</h3> */}
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10 '>
            <input name='name' type="text" defaultValue={user?.name} disabled className="input w-full input-bordered " />
            <input name='email' type="email" defaultValue={user?.email} disabled className="input w-full input-bordered " />
            <input name='pTitle' type="text" value={pTitle} disabled className="input w-full input-bordered " />
            <input name='price' type="text" value={price} disabled className="input w-full input-bordered " />
            <input name='location' type="text" placeholder='Set location' className='input w-full input-bordered' required />
            <input name='phone' type="text" placeholder='Your phone number' className='input w-full input-bordered' required />
            <input className='btn btn-primary w-full mt-6' type="submit" value="Book" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;