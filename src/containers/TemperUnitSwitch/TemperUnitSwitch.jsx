import { connect } from  'react-redux';
import DoubleSwitch from '../../components/DoubleSwitch/DoubleSwitch';
import { changeTemperUnit } from "../../actions";

const mapStateToProps = (state) => {
   const { temperUnit } = state;
   const items = [];

   for (let value in temperUnit.temperUnits) {
     const active = value === temperUnit.currentTemperUnit;
     const title = temperUnit.temperUnits[value];

     items.push({
       value,
       title,
       active
     });
   }

   return { items };
}

const mapDispatchToProps = dispatch => ({
  onSelect: temperUnit => dispatch(changeTemperUnit(temperUnit))
});

const TemperUnitSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoubleSwitch)

export default TemperUnitSwitch;