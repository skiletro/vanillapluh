ServerEvents.recipes(e => {
  // Crimson Grape Seeds
  e.shapeless(
    Item.of("nethervinery:crimson_grape_seeds", 1),
    [
      "minecraft:crimson_roots",
      "minecraft:crimson_roots"
    ]
  )

  // Warped Grape Seeds
  e.shapeless(
    Item.of("nethervinery:warped_grape_seeds", 1),
    [
      "minecraft:warped_roots",
      "minecraft:warped_roots"
    ]
  )

  // Bowler Hat
  e.shaped(
    Item.of("givemehats:bowler_hat", 1),
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

  // Tomato Conversion
  e.shapeless(
    Item.of("bettermcdonaldsmod:tomato", 1),
    [
      "farm_and_charm:tomato"
    ]
  )
  e.shapeless(
    Item.of("farm_and_charm:tomato", 1),
    [
      "bettermcdonaldsmod:tomato"
    ]
  )

  // Phantom membranes
  e.shapeless(
    Item.of("minecraft:phantom_membrane", 1),
    [
      "minecraft:diamond",
      "minecraft:feather"
    ]
  )

  // Creative blaze cakes
  e.shapeless(
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

  // Every other hat
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
  
  hats.forEach(item => {
    hats.forEach(item2 => {
      e.stonecutting(item, item2)
    })
  })

  e.stonecutting("minecraft:diamond", "kubejs:unrefined_diamond")

  // Sync Core
  // Require the player to use a nether star instead of an ender pearl
  e.replaceInput(
    { output: "sync:sync_core" },
    "minecraft:ender_pearl",
    "minecraft:nether_star"
  )
})
