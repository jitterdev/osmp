global.bannedItems.forEach(item => {
    PlayerEvents.inventoryChanged(item, event => {
        event.player.tell([
            "This item is banned."
        ]);
        event.player.inventory.clear(event.item)
    })
    ServerEvents.recipes(e => {
        e.remove({ output: item })
    })
})