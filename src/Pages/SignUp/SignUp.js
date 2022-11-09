import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignIn = event => {

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row ">
                <div >

                    <img className='shadow-2xl bg-base-100' src='https://i2-prod.nottinghampost.com/incoming/article6856252.ece/ALTERNATES/s1200c/0_JAJ_TEM_240322RotariCakes_001JPG.jpg' alt=''></img>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 ">
                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Please Register!!!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center'>Already Have an Account? <Link className='text-orange-500' to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;