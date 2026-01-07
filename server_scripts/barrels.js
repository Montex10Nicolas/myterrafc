// Priority: 0
// Instant
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

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:white_dye",
      "amount": 1
    },
    "added_fluid": {
      "ingredient": "tfc:gray_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:light_gray_dye",
      "amount": 1
    }
  });

  event.custom({
    type: "tfc:barrel_instant_fluid",
    "primary_fluid": {
      "ingredient": "tfc:white_dye",
      "amount": 2
    },
    "added_fluid": {
      "ingredient": "tfc:black_dye",
      "amount": 1
    },
    "output_fluid": {
      "fluid": "tfc:light_gray_dye",
      "amount": 1
    }
  });
});
// Sealed
ServerEvents.recipes(event => {
  // IDK what would be the best thing to use instead of soda ash
  colors.forEach(color => {
    event.custom({
      "type": "tfc:barrel_sealed",
      "input_item": {
        "ingredient": {
          "item": "tfc:powder/soda_ash"
        }
      },
      "input_fluid": {
        "ingredient": `tfc:${color}_dye`,
        "amount": 1000
      },
      "output_item": {
        "item": `minecraft:${color}_dye`
      },
      "duration": 4000
    })
  })
});
