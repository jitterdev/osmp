##########################################################
# Description: List of dimension effects for the Overworld.
# Creators: Bracken
##########################################################

scoreboard players set @s bp.overworld 10

execute if score @s bp.1_second matches 14 if score #bp.dimension_travel_dummy bp.dimension_travel_con matches 1 if entity @s[y=413,dy=400,tag=!exp.inside_vehicle] run function oral:dimension_crossing/beyond_the_clouds_to_faewild
