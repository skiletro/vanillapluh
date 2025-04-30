// Make bats drop phantom membranes
EntityEvents.death(event => {
  if (event.entity.type == 'minecraft:bat') {
    event.entity.block.popItem('minecraft:phantom_membrane')
  }
})

// Also add a crafting recipe
ServerEvents.recipes(event => {
  event.shapeless(
    Item.of("minecraft:phantom_membrane", 1),
    [
      "minecraft:diamond",
      "minecraft:feather"
    ]
  )
})