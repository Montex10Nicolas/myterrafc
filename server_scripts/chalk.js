// priority: 0

ServerEvents.recipes(event => {
  event.custom({
    type: "tfc:damage_inputs_shapeless_crafting",
    recipe: {
      type: "minecraft:crafting_shapeless",
      ingredients: [
        {
          tag: "tfc:chisels"
        },
        { item: "tfc:brick/chalk" }
      ],
      result: {
        item: "chalk:white_chalk"
      }
    }
  })

  colors.forEach(color => {
    event.remove({ id: `chalk:chalk_from_${color}_dye` });
    event.custom({
      type: "tfc:damage_inputs_shapeless_crafting",
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
          {
            tag: "forge:chalks"
          },
          { item: `minecraft:${color}_dye` }
        ],
        result: {
          item: `chalk:${color}_chalk`
        }
      }
    });
    if (color === "white") return;
    event.custom({
      type: "tfc:damage_inputs_shapeless_crafting",
      recipe: {
        type: "minecraft:crafting_shapeless",
        ingredients: [
          {
            tag: "tfc:chisels"
          },
          { item: "tfc:brick/chalk" },
          { item: `minecraft:${color}_dye` }
        ],
        result: {
          item: `chalk:${color}_chalk`
        }
      }
    });
  })
});
