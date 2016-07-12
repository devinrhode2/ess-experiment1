import Ember from 'ember';

let $_buttons_list = [
  "button",
  "[type='button']",
  "[type='reset']",
  "[type='submit']",
]

/// Append pseudo-classes to a selector(s).
//need to consider making this a handlebars helper
function _assign_psuedo($inputs, $pseudo) {
  return $inputs.map((selector)=>{
    return selector + ':' + $pseudo
  })
}

export default Ember.Controller.extend({
  "$all-buttons": $_buttons_list,
  "$_buttons-list": $_buttons_list,
  "$all-buttons-active": _assign_psuedo($_buttons_list, 'active'),
  "$all-buttons-focus": _assign_psuedo($_buttons_list, 'focus'),
  "$all-buttons-hover": _assign_psuedo($_buttons_list, 'hover'),

  color: '',
  r: 0,
  g: 0,
  b: 0,
  opacity: 1,
  size: '22'
});
