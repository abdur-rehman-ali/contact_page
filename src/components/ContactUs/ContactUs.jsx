import styles from './ContactUs.module.css'
import Header from './Header/Header'
import LeftSection from './LeftSection/LeftSection'
const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.form_section}`}>
        <LeftSection />
        <div>
          <img src="images/service.png" alt="Services Image Here" />
        </div>
      </div>

    </div>
  )
}

export default ContactUs
