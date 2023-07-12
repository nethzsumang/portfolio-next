import HistoryHeader from '../components/history/HistoryHeader';
import Timeline from '../components/history/Timeline';

/**
 * History component
 * @author Kenneth Sumang
 */
export default function History() {
  return (
    <div className="history__container __full-height container__div">
      <main>
        <HistoryHeader />
        <Timeline />
      </main>
    </div>
  );
}