##########################################################
# Description: Provides safe travel. Will run when a player crosses dimensions from the Clouds to the Faewild.
# Creators: jitter
##########################################################

execute in bracken:the_faewild run forceload add ~ ~
execute in bracken:the_faewild align xz run tp @s ~0.5 12 ~0.5
execute at @s[gamemode=!spectator] run setblock ~ 11 ~ minecraft:oak_leaves[persistent=true] keep
execute at @s[gamemode=!spectator] run fill ~ ~1 ~ ~ ~0 ~ air 
effect give @s slow_falling 40 2 true
execute in bracken:the_faewild run function bracken:remove_forceload