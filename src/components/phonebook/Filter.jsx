import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";

const Filter = ({ value, onChange }) => (
  <label className={"form"}>
    Find contacts by name
    <input value={value} onChange={onChange} />
  </label>
);

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(null, mapDispatchToProps)(Filter);
