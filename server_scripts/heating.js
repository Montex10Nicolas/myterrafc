// Priority: 0
ServerEvents.recipes(event => {
  event.recipes.tfc.heating("tfc:kaolin_clay", 500).resultItem("tfc:powder/kaolinite").chance(0.60);
});
