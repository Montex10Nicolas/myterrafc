// Priority: 0
//
ItemEvents.modification(event => {
  const clothes = [
    'sns:black_steel_toe_hiking_boots',
    'sns:red_steel_toe_hiking_boots',
    'sns:blue_steel_toe_hiking_boots',
  ];

  clothes.map(clothe => {
    event.modify(clothe, item => {
      item.maxDamage = 3481
    });
  })
})
