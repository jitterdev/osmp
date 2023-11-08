PlayerEvents.inventoryChanged(event => {
    if (!global.bannedItems.includes(event.item.id)) return;
    event.player.tell([
        "This item is banned."
    ]);
    event.player.inventory.clear(event.item);
})