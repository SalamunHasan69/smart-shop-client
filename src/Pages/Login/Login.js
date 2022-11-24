import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col max-w-md p-6 border rounded-md mx-auto sm:p-10  my-20">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Log in</h1>
      </div>
      <form className="space-y-12 ng-untouched ng-pristine ng-valid">
        <div className="space-y-4">
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
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white">Sign in</button>
          </div>
          <div className='flex items-center w-full my-3'>
            <hr className='w-full dark:text-gray-400' />
            <p>OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <button type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md btn btn-outline btn-primary">
            <FaGoogle></FaGoogle>
            <p>Login with Google</p>
          </button>
          <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account?
            <Link to='/signup' className="hover:underline dark:text-primary"> Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;