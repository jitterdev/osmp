# osmp
## time to bring me my money...

### this is the modpack for osmp3. it uses packwiz/unsup for installation and updating, so it's relatively simple to do (assuming you're somewhat competent.)

tutorial:
1. download [unsup 0.2.3](https://git.sleeping.town/unascribed/unsup/releases/download/v0.2.3/unsup-0.2.3.jar) and the [unsup.ini](https://github.com/jitterdev/osmp/blob/master/unsup.ini) config file.
2. put these 2 files in the .minecraft folder of an empty fabric 1.20.1 instance in whatever launcher you use. don't put it in any subfolder, it should be pretty much just like this:

![image](https://github.com/jitterdev/osmp/assets/64605731/9eee0fa2-f315-466e-aca8-30e3cbb222c7)

3. add `-javaagent:unsup-0.2.3.jar` to your JVM arguments, then launch your game.
4. when you reach the "select flavors" menu, click the boxes of the mods you want to disable. mods with a `[!]` at the start of them are **already disabled by default. checking their box will enable them.** if you arent sure what mods to disable or enable, just dont click anything and just click done.

