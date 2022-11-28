import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('User created successfully')
        navigate('/')
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="flex flex-col max-w-md p-6 border rounded-md mx-auto sm:p-10 my-20">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign up</h1>
      </div>
      <form className="ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleSignup)}>
        <div>
          <div>
            <label for="name" className="block mb-2 text-sm">Name</label>
            <input {...register("name", {
              required: 'Please provide your name'
            })}
              type='text'
              className="w-full px-3 py-2 border rounded-md" required />
            {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm">Email</label>
            <input {...register("email", {
              required: 'Please provide an email'
            })}
              type='email'
              className="w-full px-3 py-2 border rounded-md" required />
            {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label for="password" className="text-sm">Password</label>
            </div>
            <input {...register("password", {
              required: 'Please provide a password',
              minLength: { value: 6, message: "Password must be 6 characters" }
            })}
              type='password'
              className="w-full px-3 py-2 border rounded-md" required />
            {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
          </div>
        </div>
        <div className="mt-6">
          <div className='flex justify-start'>
            {/* <div className='flex justify-start'>
              <label for="using" className="text-sm mr-2">User</label>
              <input type="radio" name="radio-3" className="radio radio-primary" />
            </div> */}
            <div className='flex justify-start mr-2'>
              <label for="buying" className="text-sm mr-2">Buyer</label>
              <input type="radio" name="radio-2" className="radio radio-primary" checked />
            </div>
            <div className='flex justify-start'>
              <label for="selling" className="text-sm mr-2">Seller</label>
              <input type="radio" name="radio-2" className="radio radio-primary" />
            </div>
          </div>
          <input type="submit" value='Sign up' className="w-full mt-2 px-8 py-3 font-semibold rounded-md bg-primary text-white" />
          <p className="mt-2 text-sm text-center dark:text-gray-400">Already have an account?
            <Link to='/login' className="hover:underline dark:text-primary"> Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;