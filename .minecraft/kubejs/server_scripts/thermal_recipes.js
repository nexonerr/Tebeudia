onEvent("recipes", event => {
    //Ender dust stuff
    event.shapeless('minecraft:ender_pearl',['2x thermal:ender_pearl_dust']);
    event.remove({output:'ae2:ender_dust'});
    event.recipes.create.crushing('thermal:ender_pearl_dust',"minecraft:ender_pearl");
    event.recipes.create.milling('thermal:ender_pearl_dust',"minecraft:ender_pearl");
})