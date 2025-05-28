import React, { useContext } from 'react';
import { Link } from 'react-router';
import registerLottie from '../../assets/registerLottie.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import toast from 'react-hot-toast';

const Register = () => {
    const {createUser, setUser} = useContext(AuthContext);

    // Create user
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, ...userData} = Object.fromEntries(formData.entries());
        console.log({email, ...userData});
        
        // Create User 
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            const {name, photo} = userData;

            updateProfile(auth.currentUser, {
                displayName: name,
                 photoURL: photo,
            }).then(() => {
               setUser({...user, displayName: name, photoURL: photo,})
               toast.success('Registration Successful!') 
            }).catch(() => {
                setUser(user)
            })
        }).catch((error) => {
            console.log(error);
            toast.error(error.message)
        })
    }



    return (
        <div className=' relative flex items-center justify-center my-20 w-full'>

            <div className="card w-full max-w-lg shrink-0 mb-10">
                <h4 className='text-2xl font-bold text-primary text-center'>Register</h4>
                <h2 className='text-4xl font-bold text-secondary my-3 text-center'>Start for free Today</h2>
                <p className='text-center text-accent'>Access to all features. No credit card <br /> required.</p>
                {/* Google */}
                <button className="btn mx-6 py-6 my-4 bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>

                <div className="divider">OR continue with</div>

            {/* Form */}
            <form onSubmit={handleCreateUser} className="card-body">
                <fieldset className="fieldset space-y-3">
                
                {/* Name */}
                <label className="label">Full Name*</label>
                <input type="text" name='name' className="input w-full py-6" required placeholder="Full Name" />
                
                {/* Photo */}
                <label className="label">Photo URL*</label>
                <input type="url" name='photo' className="input w-full py-6" required placeholder="Photo Url" />
                
                {/* Email */}
                <label className="label">Email*</label>
                <input type="email" name='email' className="input w-full py-6" required placeholder="Email" />

                {/* Password */}
                <label className="label">Password*</label>
                <input type="password" name='password' className="input w-full py-6" required placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>
                <button type='submit' className="btn btn-secondary mt-4 py-6">Submit & Register</button>
                </fieldset>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-primary font-medium' to='/sing-in'>Sing in</Link></p>
                
                
            </div>

                <div className='absolute -right-20 -z-10'>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
        </div>
    );
};

export default Register;