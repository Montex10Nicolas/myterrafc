// Priority: 0
ServerEvents.recipes(event => {
  event.custom({
    type: "tfc:barrel_instant",
    "input_item": {
      "ingredient": {
        "item": "tfc:powder/flux"
      }
    },
    "input_fluid": {
      "ingredient": "minecraft:water",
      "amount": 200
    },
    "output_fluid": {
      "fluid": "tfc:limewater",
      "amount": 200
    }
  })
});
