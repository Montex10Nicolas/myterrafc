// Priority: 0
ServerEvents.recipes(event => {
  event.replaceInput({ tag: '#tfc:all_windmill_blade' }, 'tfc:wool_cloth', '#tfc:sewing_light_cloth');
  event.replaceInput({ input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron');
  event.replaceInput({ input: 'magistuarmory:steel_ingot' }, 'magistuarmory:steel_ingot', 'tfc:metal/ingot/steel');
  event.replaceInput({ input: 'storagedrawers:drawers' }, { tag: 'minecraft:planks' }, { tag: 'tfc:lumber' });
  // event.replaceInput({ output: '#minecraft:trapdoors' });
  //
  //
  // supplemerntaries:safe change crafting
  //
  event.replaceInput({ input: "dawnoftimebuilder:limestone_bricks" }, {
    id: "dawnoftimebuilder:limestone_bricks"
  }, {
    tag: "tfc:rock/bricks"
  });
  event.replaceInput({ output: "mcw_tfc_aio:bridges/bamboo_bridges/dry_bamboo_bridge_pier" },
    "minecraft:string",
    { tag: "forge:string" }
  );

  event.replaceInput({ mod: "mcw_tfc_aio" },
    'minecraft:string',
    { tag: "forge:string" });

  event.replaceInput({ mod: "dawnoftimebuilder" },
    'minecraft:torch',
    'tfc:torch');
});
