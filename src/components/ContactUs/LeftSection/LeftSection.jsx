import styles from './LeftSection.module.css'
import Button from '../../shared/Button/Button'
import { BiMessageAltDetail } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'
import Form from '../Form/Form'

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
      <Form />
    </div>
  )
}

export default LeftSection
