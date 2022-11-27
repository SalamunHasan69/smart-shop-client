import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const handleLogin = data => {
    console.log(data);
    setLoginError('')
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error)
        setLoginError(error.message)
      });
  }

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="flex flex-col max-w-md p-6 border rounded-md mx-auto sm:p-10 my-20">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Log in</h1>
      </div>
      <form className="ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit(handleLogin)}>
        <div className="">
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
          <Link className="label mb-3"><span className="label-text"><small>Forget Password?</small></span></Link>
          <div>
            {loginError && <p className='text-red-700'>{loginError}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <input type="submit" value='Login' className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white" />
          <div className='flex items-center w-full my-3'>
            <hr className='w-full dark:text-gray-400' />
            <p>OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md btn btn-outline btn-primary">
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