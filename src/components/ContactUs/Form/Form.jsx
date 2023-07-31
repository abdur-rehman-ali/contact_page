import styles from './Form.module.css'
import Button from '../../shared/Button/Button'
import { BiMessageAltDetail } from 'react-icons/bi'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitData = (e) => {
    e.preventDefault()
    console.log(`Name: ${name} -- Email: ${email} -- Message: ${message} `);
    alert('Form submitted successfully!!!');
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div>
      <form action="#" onSubmit={submitData}>
        <div className={`${styles.form_group}`} >
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name='name'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className={`${styles.form_control}`} />
        </div>
        <div className={`${styles.form_group}`} >
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
            className={`${styles.form_control}`} />
        </div>
        <div className={`${styles.form_group}`} >
          <label htmlFor="message">Message</label> <br />
          <textarea
            name='message'
            id='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            maxLength={200}
            required
            rows={8} />
        </div>
        <div>
          <Button icon={<BiMessageAltDetail />} text='SUBMIT' />
        </div>
      </form>
    </div>
  )
}

export default Form
