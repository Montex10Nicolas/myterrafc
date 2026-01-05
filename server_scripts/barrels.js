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
  });

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:blue_dye",
      "amount": 1
    },
    "added_fluid": {
      "ingredient": "tfc:green_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:cyan_dye",
      "amount": 1
    }
  });

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:green_dye",
      "amount": 1
    },
    "added_fluid": {
      "ingredient": "tfc:blue_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:cyan_dye",
      "amount": 1
    }
  });

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:blue_dye",
      "amount": 1
    },
    "added_fluid": {
      "ingredient": "tfc:white_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:light_blue_dye",
      "amount": 1
    }
  });

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:white_dye",
      "amount": 1
    },
    "added_fluid": {
      "ingredient": "tfc:blue_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:light_blue_dye",
      "amount": 1
    }
  });
});
