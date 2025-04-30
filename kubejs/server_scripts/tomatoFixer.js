ServerEvents.tags("item", event => {
  event.add("kubejs:tomatoes", [
    "bettermcdonaldsmod:tomato",
    "farm_and_charm:tomato"
  ])
})

// This event runs when recipes are being registered
ServerEvents.recipes(event => {
  // Replace all recipes that use specific tomato items with the tag
  // This will make all recipes accept any item from the "kubejs:tomatoes" tag
  event.replaceInput(
    { input: "bettermcdonaldsmod:tomato" },
    "bettermcdonaldsmod:tomato",
    "#kubejs:tomatoes"
  )

  event.replaceInput(
    { input: "farm_and_charm:tomato" },
    "farm_and_charm:tomato",
    "#kubejs:tomatoes"
  )
})
