import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddAProduct = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);
  const navigate = useNavigate();

  const handleAddProduct = data => {
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            price: data.price,
            phone: data.phone,
            location: data.location,
            condition: data.condition,
            category: data.category,
            use: data.use,
            description: data.description,
            image: data.image
          }

          fetch('https://smart-shop-server.vercel.app/addProduct', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success('Added successfully');
              navigate('/dashboard/myProducts');
            })
        }
      })
  }

  return (
    <div>
      <h3 className='text-3xl my-4'>Add Product</h3>
      <div className='w-4/5 lg:w-3/5 mx-auto'>
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full mt-9 ">
            <label className="label"><span className="label-text">Name</span></label>
            <input type="text"
              {...register("name", {
                required: 'Please provide your product name'
              })}
              className="input input-bordered w-full " />
            {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Price</span></label>
            <input type="text"
              {...register("price", {
                required: 'Please provide a price'
              })}
              className="input input-bordered w-full " />
            {errors.price && <p className='text-red-700'>{errors.price?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Phone Number</span></label>
            <input type="text"
              {...register("phone", {
                required: 'Please provide your phone number'
              })}
              className="input input-bordered w-full " />
            {errors.phone && <p className='text-red-700'>{errors.phone?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Location</span></label>
            <input type="text"
              {...register("location", {
                required: 'Please provide your location'
              })}
              className="input input-bordered w-full " />
            {errors.location && <p className='text-red-700'>{errors.location?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Condition</span></label>
            <select {...register('condition')} className="select select-bordered w-full ">
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Category</span></label>
            <select {...register('category')} className="select select-bordered w-full ">
              <option>iPhone</option>
              <option>Samsung</option>
              <option>Google Pixel</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">How long has it been used?</span></label>
            <input type="text"
              {...register("use", {
                required: 'Please provide how long has it been used'
              })}
              className="input input-bordered w-full " />
            {errors.use && <p className='text-red-700'>{errors.use?.message}</p>}
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea {...register('description')} className="textarea textarea-bordered w-full"></textarea>
          </div>
          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Image</span></label>
            <input type="file"
              {...register("image", {
                required: 'Please provide your picture'
              })}
              className="" />
            {errors.image && <p className='text-red-700'>{errors.image?.message}</p>}
          </div>
          <input className='btn btn-primary w-full mt-7 ' value='Add' type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;