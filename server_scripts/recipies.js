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
  });

  event.recipes.tfc.damage_inputs_shapeless_crafting(
    event.recipes.minecraft.crafting_shapeless(
      Item.of("tfc:wood/lumber/oak", 8),
      [
        "afc:wood/log/black_oak",
        "#tfc:saws"
      ]
    )
  );

  event.recipes.tfc.advanced_shaped_crafting(
    'firmalife:barrel_stave', [
    'TTS',
    'H'
  ], {
    T: 'minecraft:dirt',
    S: 'minecraft:dirt',
    H: 'minecraft:dirt',
  }, 0, 0
  );

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('minecraft:hopper', 4), [
    'S S',
    ' C '
  ], {
    S: 'tfc:metal/sheet/black_steel',
    C: '#forge:chests/wooden'
  }, 0, 0
  );

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('minecraft:hopper', 6), [
    'S S',
    ' C '
  ], {
    S: 'tfc:metal/sheet/red_steel',
    C: '#forge:chests/wooden'
  }, 0, 0
  );

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('minecraft:hopper', 6), [
    'S S',
    ' C '
  ], {
    S: '#forge:sheets/blue_steel',
    C: '#forge:chests/wooden'
  }, 0, 0
  );
  // event.recipes.tfc.advanced_shaped_crafting(
  //   Item.of('firmalife:barrel_stave', index ? 4 : 2), [
  //   "TTS",
  //   "H  "
  // ], {
  //   "T": "firmalife:treated_lumber",
  //   "S": `tfc:metal/sheet/${sheet}`,
  //   H: '#tfc:hammers'
  // }, 0, 0
  // );
  //
  //

  const steel_sheets = ['black_steel', 'red_steel', 'blue_steel'];
  steel_sheets.forEach((sheet, index) => {
    event.recipes.tfc.advanced_shaped_crafting(
      Item.of('firmalife:compost_tumbler', index ? 4 : 2), [
      'SCS',
      'AGA'
    ], {
      S: `tfc:metal/sheet/${sheet}`,
      C: 'tfc:composter',
      A: '#tfc:axles',
      G: 'tfc:glue'
    }, 0, 0
    );

    event.recipes.tfc.damage_inputs_shaped_crafting(
      event.recipes.minecraft.crafting_shaped(
        Item.of('firmalife:barrel_stave', index ? 4 : 2),
        [
          "TTS",
          "H  "
        ], {
        T: "firmalife:treated_lumber",
        S: `tfc:metal/sheet/${sheet}`,
        H: "#tfc:hammers"
      }
      )
    );
  });

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('minecraft:iron_nugget', 10), [
    '   ',
    ' I ',
    '   '
  ], {
    I: 'tfc:metal/ingot/wrought_iron',
  }, 0, 0
  );

  event.recipes.tfc.advanced_shaped_crafting(
    Item.of('minecraft:iron_block', 1), [
    'III',
    'III',
    'III'
  ], {
    I: 'tfc:metal/ingot/wrought_iron',
  }, 0, 0
  );

  event.remove("firmalife:crafting/bacon");
  event.recipes.tfc.damage_inputs_shaped_crafting(
    event.recipes.minecraft.crafting_shaped(
      Item.of('firmalife:food/bacon'),
      [
        "PKS",
      ], {
      P: "tfc:food/pork",
      K: "#forge:tools/knives",
      S: "tfc:powder/salt"
    }
    )
  );
});


