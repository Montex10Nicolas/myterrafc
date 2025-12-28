// Priority: 0
ServerEvents.recipes(event => {
  event.recipes.tfc.heating("tfc:kaolin_clay", 500).resultItem("tfc:powder/kaolinite").chance(0.60);

  event.custom({
    type: "tfc:heating",
    ingredient: {
      item: "minecraft:iron_nugget"
    },
    result_fluid: {
      fluid: "tfc:metal/cast_iron",
      amount: 10
    },
    temperature: 1535
  });


  const heavySheets = ["bismuth_bronze", "bismuth", "black_bronze", "black_steel", "blue_steel", "brass", "bronze", "cast_iron",
    "copper", "gold", "nickel", "red_steel", "rose_gold", "silver", "steel", "sterling_silver", "tin",
    "wrought_iron", "zinc"];
  heavySheets.forEach(metal => {
    event.custom({
      type: "tfc:heating",
      ingredient: {
        item: `tfc_items:${metal}_heavy_sheet`
      },
      result_fluid: {
        fluid: `tfc:metal/${metal}`,
        amount: 600
      },
      temperature: 1080
    });
  });

});
