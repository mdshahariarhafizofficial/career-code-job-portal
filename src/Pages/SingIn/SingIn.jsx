import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import loginLottie from '../../assets/loginLottie.json'
import AuthContext from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const SingIn = () => {
    const { signInUser, setUser, googleSignIn } = useContext(AuthContext);
    // Sign in user
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password} = Object.fromEntries(formData.entries());

        // Sign In
        signInUser(email, password)
        .then((result)=>{
            setUser(result.user)
            toast.success('Sign In Successful!')
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }

    return (
        <div className=' relative flex items-center justify-center my-20 w-full'>

            <div className="card w-full max-w-lg shrink-0 mb-10">
                <h4 className='text-2xl font-bold text-primary text-center'>Welcome back!</h4>
                <h2 className='text-4xl font-bold text-secondary my-3 text-center'>Member Login</h2>
                <p className='text-center text-accent'>Access to all features. No credit card <br /> required.</p>
                {/* Google */}
                <button onClick={()=>googleSignIn()} className="btn mx-6 py-6 my-4 bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>

                <div className="divider">OR continue with</div>

            {/* Form */}
            <form onSubmit={handleSignIn} className="card-body">
                <fieldset className="fieldset space-y-3">
                
                
                {/* Email */}
                <label className="label">Email*</label>
                <input type="email" name='email' className="input w-full py-6" required placeholder="Email" />

                {/* Password */}
                <label className="label">Password*</label>
                <input type="password" name='password' className="input w-full py-6" required placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn btn-secondary mt-4 py-6">Submit & Sing In</button>
                </fieldset>
            </form>
            <p className='text-center'>Don't have an Account? <Link className='text-primary font-medium' to='/sing-in'>Register Now!</Link></p>
                
                
            </div>

                <div className='absolute hidden md:block -right-20 -z-10'>
                    <Lottie animationData={loginLottie}></Lottie>
                </div>
        </div>
    );
};

export default SingIn;