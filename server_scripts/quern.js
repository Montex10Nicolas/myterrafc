// Priority: 0
ServerEvents.recipes(event => {
  event.remove('dfc:quern/copper_powder');
  event.remove('dfc:quern/cast_iron_powder');
  event.remove('dfc:quern/wrought_iron_powder');

  event.custom({
    "type": "tfc:quern",
    "ingredient": {
      "item": "tfc:metal/ingot/copper",
    },
    "result": {
      "item": "tfc:powder/native_copper",
      "count": 20
    }
  });
  event.custom({
    "type": "tfc:quern",
    "ingredient": {
      "item": "tfc:metal/ingot/wrought_iron",
    },
    "result": {
      "item": "tfc:powder/magnetite",
      "count": 20
    }
  });
  event.custom({
    "type": "tfc:quern",
    "ingredient": {
      "item": "tfc:metal/ingot/cast_iron",
    },
    "result": {
      "item": "tfc:powder/magnetite",
      "count": 20
    }
  });
})

