LootJS.modifiers(event => {
  let blocks = [
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "ad_astra:mars_diamond_ore",
    "ad_astra:venus_diamond_ore",
    "deeperdarker:sculk_stone_diamond_ore",
    "deeperdarker:gloomslate_diamond_ore"
  ]

  blocks.forEach(block => {
    event.addBlockLootModifier(block).replaceLoot("minecraft:diamond", "kubejs:unrefined_diamond")
  })
})

ServerEvents.recipes(event => {
  event.stonecutting("minecraft:diamond", "kubejs:unrefined_diamond")
})