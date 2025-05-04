// This effectively removes the crafting terminal from the game, as there is an unpatched bug that allows duplication.
let terminal = "toms_storage:ts.crafting_terminal"

ServerEvents.recipes(event => {
  event.remove({ output: terminal })
})

BlockEvents.rightClicked(terminal, event => {
  event.player.tell("Sorry, that is not allowed.")
  event.cancel()
})

BlockEvents.placed(terminal, event => {
  event.player.tell("Sorry, that is not allowed.")
  event.block.set("minecraft:air")
})
