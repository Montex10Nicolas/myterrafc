// Priority: 0

LootJS.modifiers((event) => {
  event
    .addBlockLootModifier("kubastfca:crop/sunflower[age=5]")
    .addLoot(Item.of("kubastfca:sunflower_seeds", 3))
  event
    .addBlockLootModifier("kubastfca:crop/sunflower")
    .addLoot("kubastfca:seeds/sunflower");

  event
    .addEntityLootModifier("minecraft:spider")
    .removeLoot("minecraft:spider_eye");
});
