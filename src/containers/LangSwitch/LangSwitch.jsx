import { connect } from  'react-redux';
import DoubleSwitch from '../../components/DoubleSwitch/DoubleSwitch';
import { changeLang } from "../../actions";

const mapStateToProps = (state) => {
   const { lang } = state;
   const items = [];

   for (let value in lang.availableLangs) {
     const active = value === lang.currentLang;
     const title = lang.availableLangs[value];

     items.push({
       value,
       title,
       active
     });
   }

   console.log('lang items: ', items)
   return { items };
}

const mapDispatchToProps = dispatch => ({
  onSelect: lang => dispatch(changeLang(lang))
});

const LangSwitch = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoubleSwitch)

export default LangSwitch;