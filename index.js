const Armor_Stand = Java.type('net.minecraft.entity.item.EntityArmorStand');

register('renderEntity', (entity, pos, partialTicks, event) => {
    if(entity.distanceTo(Player.getX(), Player.getY(), Player.getZ()) <= 4.5) {
        const minecraftItem = entity.entity.func_71124_b(0); // check for main hand item
        if(minecraftItem === null ||  entity.getTicksExisted() > 30) {
            return;
        }
        let item = new Item(minecraftItem);
        if(item.getID() === 286) {
            entity.entity.func_70106_y();
        }
    }
}).setCriteria(Armor_Stand);