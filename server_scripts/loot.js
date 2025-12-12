// Priority: 0

LootJS.modifiers((event) => {
  event.enableLogging();
  event
    .addBlockLootModifier("kubastfca:crop/sunflower[age=5]")
    .addLoot(Item.of("kubastfca:sunflower_seeds", 3))
  event
    .addBlockLootModifier("kubastfca:crop/sunflower")
    .addLoot("kubastfca:seeds/sunflower");
});
