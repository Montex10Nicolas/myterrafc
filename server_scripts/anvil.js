// Priority: 0
ServerEvents.recipes(event => {
  event.remove({ id: 'tfc:anvil/metal/rod/cast_iron' });
  event.custom({
    "type": "tfc:anvil",
    "input": {
      "item": "tfc:metal/ingot/cast_iron",
    },
    "result": {
      "item": "tfc:metal/rod/cast_iron",
      "count": 2
    },
    "tier": 2,
    "rules": [
      "punch_last",
    ],
    "apply_forging_bonus": true
  });
  // event.custom(
  //   {
  //     "type": "tfc:anvil",
  //     "input": {
  //       "item": "tfc:metal/ingot/bronze"
  //     },
  //     "result": {
  //       "item": "minecraft:cobblestone"
  //     },
  //     "tier": 2,
  //     "rules": [
  //       "punch_last",
  //       "bend_not_last",
  //       "draw_not_last"
  //     ],
  //     "apply_forging_bonus": true
  //   }
  // )
});
