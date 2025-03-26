//sound = require("sound");

const modMindExp = Vars.mods.locateMod("mindustry-expansion").meta;

modMindExp.displayName = Core.bundle.get("mod.me.name");
modMindExp.author = Core.bundle.get("mod.me.author");
modMindExp.description = Core.bundle.get("mod.me.description");

// music
const bossmusic1 = Vars.tree.loadMusic("arachnotheme");
const ambimusic1 = Vars.tree.loadMusic("CTTW");

Events.on(ClientLoadEvent, e => {
    Vars.control.sound.bossMusic.add(bossmusic1);
    Vars.control.sound.ambientMusic.add(ambimusic1);
});
