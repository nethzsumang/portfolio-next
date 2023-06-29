/**
 * HorizontalRuleWithText component
 * @author Kenneth Sumang
 */
export default function HorizontalRuleWithText({ text }) {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex flex-grow-1 bg-dark" style={{ height: '1px' }}></div>
      <h5 className="p-3">{text}</h5>
      <div className="d-flex flex-grow-1 bg-dark" style={{ height: '1px' }}></div>
    </div>
  );
}