##########################################################
# Description: Will run when a player crosses dimensions from the Faewild to the Clouds.
# Creators: jitter
##########################################################

execute in nfb_dimensions:beyond_the_clouds run tp @s ~ 305 ~
execute at @s run forceload add ~ ~
execute at @s[gamemode=!spectator] run fill ~ ~1 ~ ~ ~0 ~ air 
effect give @s slow_falling 20 2 true
execute in nfb_dimensions:beyond_the_clouds run function bracken:remove_forceload