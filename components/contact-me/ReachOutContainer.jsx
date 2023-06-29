import Image from 'next/image';

/**
 * ReachOutContainer component
 * @author Kenneth Sumang
 */
export default function ReachOutContainer() {
  return (
    <>
      <p>You can reach out to me in these channels.</p>
      <div className="d-flex align-items-center justify-content-center">
        <a
          href="https://www.linkedin.com/in/kenneth-sumang/"
          className="contact-me__reach-out__logos"
          target="_blank"
        >
          <Image
            src="/images/linkedin-icon.png"
            height={22}
            width={28}
          />
        </a>
        <a
          href="viber://add?number=%2B639665636420"
          className="contact-me__reach-out__logos"
          target="_blank"
        >
          <Image
            src="/images/viber-icon.svg"
            height={24}
            width={30}
          />
        </a>
        <a href="mailto:work@kennethsumang.com" target="_blank">
          <Image
            src="/images/envelope.svg"
            height={24}
            width={24}
          />
        </a>
      </div>
    </>
  );
}