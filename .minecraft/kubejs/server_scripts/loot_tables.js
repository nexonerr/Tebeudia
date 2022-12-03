onEvent('block.loot_tables', event => {
    event.addBlock(/kubejs:.*ender_ore/, table => {
        table.addPool(pool => {
            pool.rolls = 1;
            pool.survivesExplosion();
            pool.addItem('thermal:ender_pearl_dust',100,[1,4]);
        })
    })

})
