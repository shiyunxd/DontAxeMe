

// I feel the need to put it here because I literally have no idea what i was while making this, i never even learned js sob
// please let me know if there is anything that should be changed for better performance


const Armor_Stand = Java.type('net.minecraft.entity.item.EntityArmorStand');
let isOn = true


register('renderEntity', (entity) => {
    if((entity.distanceTo(Player.getX(), Player.getY(), Player.getZ()) <= 4.5) && isOn) {
        const minecraftItem = entity.entity.func_71124_b(0); // check for main hand item
        if(minecraftItem === null ||  entity.getTicksExisted() > 30) {
            return;
        }
        let item = new Item(minecraftItem);
        if(item.getID() === 286) { // checks if main hand item is item 286 (gold axe)
            entity.entity.func_70106_y(); // sets dead (dead entities are click-thru)
            // ChatLib.chat("found berz aks")
        }
    }
}).setFilteredClass(Armor_Stand);

// I also do not know how to make a config file, the command is purely for failsafe/debugging
// massive copium from me 
register("command", () => {
    if (isOn) {
        isOn = false
        ChatLib.chat("[§bDontAxeMe§r] §cOff")
        return
    }
    if (!isOn) {
        isOn = true
        ChatLib.chat("[§bDontAxeMe§r] §aOn")
        return
    }

}).setName("noaxe")