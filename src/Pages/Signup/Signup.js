import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex flex-col max-w-md p-6 border rounded-md mx-auto sm:p-10 my-20">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      </div>
      <form className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
          <div>
            <label for="name" className="block mb-2 text-sm">Name</label>
            <input type="text" name="name" id="name" placeholder="" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm">Email</label>
            <input type="email" name="email" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm">Password</label>
            </div>
            <input type="password" name="password" id="password" placeholder="" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <br />
          <p className='text-red-700'>{ }</p>
        </div>
        <div className="space-y-2">
          <div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white">Sign up</button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account?
            <Link to='/login' className="hover:underline dark:text-primary"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;