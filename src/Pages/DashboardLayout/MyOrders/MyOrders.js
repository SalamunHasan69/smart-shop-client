import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })
  console.log(bookings);
  return (
    <div>
      <h3 className='text-3xl my-4'>My Orders</h3>
      <div className='grid lg:grid-cols-3 gap-4 mx-auto'>
        {
          bookings.map((booking, i) => <div key={i} className="max-w-xs rounded-md shadow-md bg-blue-100">
            <img src={booking.image} alt="" className="object-cover object-center w-full rounded-t-md h-[60%] dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-wide text-black">{booking.pTitle}</h2>
                <p className='text-black font-bold'>Price: {booking.price}</p>
              </div>
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary text-white">Pay</button>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyOrders;