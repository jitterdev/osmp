ServerEvents.recipes(event => {
    global.bannedItems.forEach(item => {
        event.remove({ output: item })
    })
    event.remove({id:'createbb:misc/brass_call_bell'})
    event.remove({id:'createbb:phase2/copper_zinc_catalyst'})
    event.remove({id:'spelunkery:mineomite'})
    event.remove({id:'createbb:misc/tray'})
    event.remove({output:'#oralsmp:guns'})

    event.shapeless(
        Item.of('createbb:copper_zinc_catalyst', 1),[
            '2x create:crushed_raw_zinc',
            '2x create:crushed_raw_copper'
        ]
    )

    event.shaped(
        Item.of('createbb:brass_call_bell', 1),
        [ 
            ' S ', 
            'PPP',
            '   '  
        ],
        {
            S: '#c:brass_plates',
            P: '#c:brass_ingots'
        }
    )

    event.shaped(
        Item.of('createbb:tray', 1),
        [ 
            '   ', 
            'A A',
            ' A '  
        ],
        {
            A: '#c:iron_plates' 
        }
    )
})