import styles from './LeftSection.module.css'
import Button from '../../shared/Button/Button'
import { BiMessageAltDetail } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'

const LeftSection = () => {
  return (
    <div className={`${styles.form_section_left}`}>
      <div className={`${styles.form_section_left_top_button}`}>
        <Button icon={<BiMessageAltDetail />} text=' VIA SUPPORT CHAT' />
        <Button icon={<BsTelephoneFill />} text=' VIA CALL' />
      </div>
      <div>
        <Button icon={<BiMessageAltDetail />} text=' VIA EMAIL FORM' isOutline={true} />
      </div>
      <div>
        <form action="">
          <div className={`${styles.form_group}`} >
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              name='name'
              id='name'
              placeholder='Enter your name'
              className={`${styles.form_control}`} />
          </div>
          <div className={`${styles.form_group}`} >
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name='email'
              id='email'
              placeholder='Enter your email'
              className={`${styles.form_control}`} />
          </div>
          <div className={`${styles.form_group}`} >
            <label htmlFor="message">Message</label> <br />
            <textarea
              name='message'
              id='message'
              maxLength={200}
              rows={8} />
          </div>
          <div>
            <Button icon={<BiMessageAltDetail />} text='SUBMIT' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LeftSection
