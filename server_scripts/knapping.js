// priority: 0
//

ServerEvents.recipes(event => {
  event.custom({
    type: "tfc:knapping",
    outside_slot_required: true,
    knapping_type: "tfc:clay",
    pattern: [
      "X   X",
      " XXX ",
      "XXXXX",
      "XXXXX",
      "XXXXX"
    ],
    result: {
      item: "supplementaries:urn"
    }
  });

  event.custom({
    type: "tfc:knapping",
    outside_slot_required: true,
    knapping_type: "tfc:clay",
    pattern: [
      "X   X",
      "XXXXX",
      "     ",
      "X   X",
      "XXXXX"
    ],
    result: {
      item: "supplementaries:flower_box",
      count: 2
    }
  });
});
