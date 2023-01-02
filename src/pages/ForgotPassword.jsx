import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = e => {
    setEmail(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('The email was sent')
    } catch (error) {
      toast.error('Could not send email')
    }
  }

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            className='emailInput'
            type='email'
            placeholder='Email'
            value={email}
            id='email'
            onChange={onChange}
          />
          <Link className='forgotPaswordLink' to='/sign-in'>
            Sign In
          </Link>
          <div className='signInText'>Send Reset Link</div>
          <button className='signInButton'>
            <ArrowRightIcon fill='#FFF' width='34px' height='34px' />
          </button>
        </form>
      </main>
    </div>
  )
}
