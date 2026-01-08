// Priority: 0
//
// add(TagToAdd, ThingToAddItTo)
ServerEvents.tags('item', event => {
  event.add('tfc:compost_greens', 'kubastfca:sunflower_seeds');

  event.add('tfc:forge_fuel', '#tfcwoodwork:bark');
  event.add('tfc:forge_fuel', '#tfcwoodwork:bast');
  event.add('tfc:forge_fuel', '#tfcwoodwork:logs_log');
  event.add('tfc:forge_fuel', '#tfcwoodwork:logs_quarter');
  event.add('tfc:forge_fuel', '#tfcwoodwork:logs_half');
  event.add('tfc:forge_fuel', '#forge:bark');

  event.add('tfc:blast_furnace_fuel', 'tfc:ore/lignite');

  event.add('tfc:compost_greens', '#tfc:sandwich_bread');

  event.add('tfc:usable_on_tool_rack', '#tfc:starts_fires_with_durability');
  event.add('tfc:usable_on_tool_rack', 'mcw_tfc_aio:pliers');
  event.add('tfc:usable_on_tool_rack', 'tfc:wool_cloth');

  const clothes = [
    'sns:black_steel_toe_hiking_boots',
    'tfc:metal/boots/black_steel',
    'tfc:metal/boots/red_steel',
    'tfc:metal/boots/blue_steel'
  ];

  clothes.map(boot => {
    event.add('curios:clothes_socks', boot);
    event.add('minecraft:freeze_immune_wearables', boot);
  })

  event.add('sns:allowed_in_seed_pouch', 'kubastfca:seeds/tea');
  event.add('sns:allowed_in_seed_pouch', '#tfc:wild_fruits');
  event.add('sns:allowed_in_seed_pouch', '#tfc:plants');

  // event.add('artisanal:powders/copper', 'dfc:metal/powder/copper');
  // event.add('artisanal:powders/iron', 'dfc:metal/powder/cast_iron');
  // event.add('artisanal:powders/iron', 'dfc:metal/powder/wrought_iron');
  tfcLogs.map(log => {
    const tfcwoodwork = ['debarked_log', 'debarked_half', 'debarked_quarter'];
    tfcwoodwork.map(woodWork => {
      event.add('firmalife:oven_fuel', `tfcwoodwork:${woodWork}/${log}`)
      event.add('firmalife:smoking_fuel', `tfcwoodwork:${woodWork}/${log}`)
      event.add('tfc:pit_kiln_logs', `tfcwoodwork:${woodWork}/${log}`)
      event.add('tfc:makes_tannin', `tfcwoodwork:${woodWork}/${log}`)
      event.add('minecraft:logs', `tfcwoodwork:${woodWork}/${log}`)
    })
  });

  afcLogs.map(log => {
    const afcLogsType = ['wood', 'log', 'stripped_log', 'stripped_wood'];
    afcLogsType.map(type => {
      event.add('tfcwoodwork:logs_log', `afc:wood/${type}/${log}`);
    })
  });

  rockType.map(type => {
    dfcRocks.map(rock => {
      event.add('rnr:loose_rock_items', `dfc:rock/${type}/${rock}`);
    })
  });

  event.add("tfc:foods/usable_in_sandwich", "kubastfca:pemmican")
  event.add("firmalife:foods/cooked_meats_and_substitutes", "kubastfca:pemmican")
});

ServerEvents.tags('block', event => {
  event.add('creepycrawlies:worms_can_spawn_on', '#tfc:mud');

  const kubastfcaMineable = [
    'kubastfca:crop/sunflower',
    'kubastfca:seeds/sunflower',
    'kubastfca:dead_crop/sunflower',
    'kubastfca:dead_crop/tea',
    'kubastfca:crop/tea',
    'kubastfca:seeds/tea',
  ]

  kubastfcaMineable.map((seed) => {
    event.add('tfc:mineable_with_scythe', seed);
    event.add('tfc:mineable_with_knife', seed);
  })
})

