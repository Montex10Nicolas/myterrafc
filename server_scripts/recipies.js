// priority: 0
//

ServerEvents.recipes(event => {
  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('sophisticatedbackpacks:backpack', 1), [
    'SLS',
    'SBS',
    'LLL'
  ], {
    S: '#forge:string',
    L: '#forge:leather',
    B: 'tfc_knapsacks:backpack',
  }, 0, 0
  );
  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('sophisticatedbackpacks:iron_backpack', 1), [
    'III',
    'IBI',
    'III'
  ], {
    I: 'tfc:metal/ingot/wrought_iron',
    B: 'sophisticatedbackpacks:backpack',
  }, 0, 0
  );
  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('sophisticatedbackpacks:iron_backpack', 1), [
    ' I ',
    'IBI',
    ' I '
  ], {
    I: 'tfc:metal/ingot/wrought_iron',
    B: 'sophisticatedbackpacks:copper_backpack',
  }, 0, 0
  );
  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('#minecraft:trapdoor', 2), [
    'LLL',
    'LLL'
  ],
    {
      L: '#tfc:lumber'
    }, 0, 0
  );

  // Logs
  tfcLogs.forEach(log => {
    event.recipes.tfc.advanced_shaped_crafting(
      Item.of(`everycomp:dot/tfc/${log}_beam`, 4), [
      'L',
      'B'
    ], {
      L: `tfc:wood/stripped_log/${log}`,
      B: "#tfc:rock/bricks"
    }, 0, 0
    );

    event.recipes.tfc.advanced_shaped_crafting(
      Item.of(`tfc:wood/planks/${log}_fence`, 6),
      [
        'LLL',
        'LLL'
      ], {
      L: `tfc:wood/lumber/${log}`
    }, 0, 0);
  })

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of("spartanweaponry:wooden_arrow"), [
    'L',
    'S',
    'F'
  ], {
    L: '#tfc:lumber',
    S: "#forge:rods/wooden",
    F: "minecraft:feather"
  }, 0, 0
  );

  const fig = ['fig', 'rubber_fig'];
  fig.map((log) => {
    event.recipes.tfc.advanced_shaped_crafting(
      Item.of("everycomp:dot/afc/fig_wall", 6), [
      'PLP',
      'PLP'
    ], {
      P: 'afc:wood/planks/fig',
      L: `afc:wood/log/${log}`
    }, 0, 0
    );

    event.recipes.tfc.advanced_shaped_crafting(
      Item.of("everycomp:dot/afc/fig_support_beam", 8), [
      'SSS',
      'LLL'
    ], {
      S: 'everycomp:dot/afc/fig_support_slab',
      L: `afc:wood/log/${log}`
    }, 0, 0
    );

    event.recipes.tfc.advanced_shapeless_crafting(
      Item.of("tfc:wood/lumber/oak", 8),
      [
        "afc:wood/log/black_oak",
        "#tfc:saws"
      ]
    );
  })
});

