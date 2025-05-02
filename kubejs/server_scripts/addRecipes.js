function stonecutterHelper(event, itemArray) {
  itemArray.forEach(item1 => {
    itemArray.forEach(item2 => {
      if (item1 != item2) {
        event.stonecutting(item1, item2)
      }
    })
  })
}

ServerEvents.recipes(event => {
  // Crimson Grape Seeds
  event.shapeless(
    Item.of("nethervinery:crimson_grape_seeds", 1),
    [
      "minecraft:crimson_roots",
      "minecraft:crimson_roots"
    ]
  )

  // Warped Grape Seeds
  event.shapeless(
    Item.of("nethervinery:warped_grape_seeds", 1),
    [
      "minecraft:warped_roots",
      "minecraft:warped_roots"
    ]
  )

  // ---
  // Hats
  // ---
  // Then make it possible to use the stonecutter to get all of the other hats.
  const hats = [
    "givemehats:bowler_hat",
    "givemehats:bunny_ears",
    "givemehats:bunny_space_helmet",
    "givemehats:cat_ears",
    "givemehats:cowboy_hat",
    "givemehats:crown",
    "givemehats:deer_stalker_hat",
    "givemehats:electric_mouse_ears",
    "givemehats:fez_hat",
    "givemehats:floating_hat",
    "givemehats:fox_ears",
    "givemehats:golem_bucket",
    "givemehats:irish_hat",
    "givemehats:jojo_hat",
    "givemehats:russian_hat",
    "givemehats:sailor_hat",
    "givemehats:santa_hat",
    "givemehats:slime_hat",
    "givemehats:strider_hat",
    "givemehats:top_hat",
    "givemehats:topest_hat",
    "givemehats:witch_hat",
    "givemehats:wolf_ears",
    "givemehats:woolrus_hat",
    "givemehats:viking_hat",
    "givemehats:dwarven_hat",
    "givemehats:hippie_vibes",
    "givemehats:halo"
  ];

  hats.forEach(hat => {
    event.shaped(
      Item.of(hat, 1),
      [
        "AAA",
        "ABA",
        "B B"
      ],
      {
        A: "minecraft:black_dye",
        B: "minecraft:leather"
      }
    )
  })

  stonecutterHelper(event, hats)

  // Creative Blaze Cakes
  event.shapeless(
    Item.of("create:creative_blaze_cake", 1),
    [
      "create:blaze_cake",
      "create:blaze_cake",
      "create:blaze_cake",
      "minecraft:nether_star",
      "minecraft:nether_star",
      "minecraft:nether_star",
      "deeperdarker:heart_of_the_deep",
      "deeperdarker:heart_of_the_deep",
      "deeperdarker:heart_of_the_deep"
    ]
  )

  // Shroom Blocks
  const shrooms = [
    "minecraft:brown_mushroom_block",
    "minecraft:red_mushroom_block",
    "minecraft:mushroom_stem"
  ];
  stonecutterHelper(event, shrooms)
})
