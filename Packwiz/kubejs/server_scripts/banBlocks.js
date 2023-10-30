const bannedblocks = ['galosphere:combustion_table'];

BlockEvents.rightClicked(bannedblocks, event => {
    console.log(`${event.player.username} attempted to right click a ${event.block}`)        
    event.block.set('air')
    event.cancel()
    }
)