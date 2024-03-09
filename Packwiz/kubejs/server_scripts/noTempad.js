const dimensionList = ['bracken:varskspace', 'bracken:dormis', 'bracken:pax', 'bracken:void', 'bracken:sanctum', 'bracken:omnidrone', 'limbo:limbo_dim'];

ItemEvents.rightClicked(event => {
    if (!event.item.id.includes('tempad:')) return
    let dimension = String(event.level.dimension);
    if (dimensionList.includes(dimension)) {
        event.player.tell("The fabric of reality rejects the Tempad's power here.");
        event.cancel()
    }
})