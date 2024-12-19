/**
 * Registers a new ore block.
 */
export default interface RegisterOre {
    // All IDs of the ore blocks, that drop the same resource e.g. redstone_ore and deepslate_redstone_ore.
    blockIds: string[];
}