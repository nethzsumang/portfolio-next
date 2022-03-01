import PhoneSection from './contact/PhoneSection';
import EmailSection from './contact/EmailSection';
import AddressSection from './contact/AddressSection';

/**
 * ContactSection component
 * @author Kenneth Sumang
 */
export default function ContactSection () {
  return (
    <div className="contacts__container">
      <PhoneSection />
      <EmailSection />
      <AddressSection />
    </div>
  );
}