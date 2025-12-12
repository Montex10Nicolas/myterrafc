// Priority: 0
ServerEvents.recipes(event => {
  event.remove({ id: "tfc:welding/cast_iron_double_ingot" });
  event.remove({ id: "tfc:heating/kaolin_clay" });
  event.remove({ mod: "minecraft" });
  event.remove('sophisticatedbackpacks:backpack');
  event.remove('magistuarmory:steel_ingot');
  event.remove('tfc:metal/rod/cast_iron');
  event.remove('spartanweaponry:wooden_arrow');
  event.remove("sophisticatedbackpacks:iron_backpack");
});
