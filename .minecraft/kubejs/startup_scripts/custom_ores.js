//priority:1

onEvent('block.registry', event => {
   createOre(event,'Ender Ore','ender_ore');
   createOre(event,'Deepslate Ender Ore','deepslate_ender_ore');
})

function createOre(event,displayName,registryName){
    event.create(registryName)
        .material('stone')
        .hardness(2)
        .displayName(displayName)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:requires_iron_tool')
        .requiresTool(true)
}