import JumbotronSection from '../components/index/JumbotronSection';
import WhatIDoSection from '../components/index/WhatIDoSection';

/**
 * Home component
 * @author Kenneth Sumang
 */
export default function Home() {
  return (
    <div className="container container__div">
      <main>
        <JumbotronSection />
        <WhatIDoSection />
      </main>
    </div>
  )
}
