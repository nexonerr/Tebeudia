/// <reference path="./globals.d.ts" />
/// <reference path="./registries.d.ts" />
/**
 * 
 * The event fires on: **startup**, **server**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
/**
 * 
 * The event fires on: **startup**, **client**.
 * 
 * The event is **not** cancellable.
*/
declare function onEvent(name: "item.tooltip", handler: (event: Internal.ItemTooltipEventJS) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$LoadFromFile", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogColors", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$UnWatch", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.VillagerTradesEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AddReloadListenerEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StopTracking", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseInputEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerChangeGameTypeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$CameraSetup", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDamageEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$MouseScrollEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderHandEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.blakebr0.cucumber.event.RegisterRecipesEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegisterCommandsEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangeGameModeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$FluidPlaceBlockEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$AllowDespawn", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Exhaustion", handler: (event: any) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.modifiers.ModifierManager$ModifiersLoadedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkWatchEvent$Watch", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderNameplateEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "com.supermartijn642.core.render.RenderWorldEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityJoinWorldEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$RenderFogEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingVisibilityEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TagsUpdatedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$PotentialSpawns", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.ItemTooltipEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingGetProjectileEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityLeaveWorldEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$WorldTickEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RegisterClientCommandsEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.DifficultyChangeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.DrawSelectionEvent$HighlightBlock", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityMobGriefingEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PostLayer", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionExpiryEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Load", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionColorCalculationEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawBackground", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.PlaySoundAtEntityEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.OnDatapackSyncEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$CheckSpawn", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseClickedEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerAboutToStartEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.BlockStateChangeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EntityConstructing", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenOpenEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.blay09.mods.balm.api.event.server.ServerReloadedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderArmEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDestroyBlockEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelLastEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.ManaRegenCalcEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FogDensity", handler: (event: any) => void);
declare function onForgeEvent(name: "vazkii.botania.api.mana.ManaItemsEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.village.WandererTradesEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Block", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDeathEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$Size", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$RenderTickEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedInEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerContainerEvent$Close", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.FOVModifierEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingDropsEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Load", handler: (event: any) => void);
declare function onForgeEvent(name: "net.blay09.mods.cookingforblockheads.api.event.FoodRegistryInitEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Load", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RecipesUpdatedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionApplicableEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BiomeLoadingEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.RegistryEvent$IdMappingEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSpawnEvent$SpecialSpawn", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.item.ItemExpireEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "journeymap.client.api.event.forge.EntityRadarUpdateEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.MovementInputUpdateEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseReleasedEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$MouseDragEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.BeginFrameEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingAttackEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Chat", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLevelStageEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerNegotiationEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientPlayerNetworkEvent$LoggedOutEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$DrawScreenEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Nodes", handler: (event: any) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.RenderLayerEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkEvent$Unload", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$PlayerTickEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingPackSizeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.server.permission.events.PermissionGatherEvent$Handler", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$TabListNameFormat", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.ZombieEvent$SummonAidEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.ChunkFullyLoadedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LootingLevelEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$StartTracking", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$KeyInputEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.MaterialsLoadedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.LootTableLoadEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$PreLayer", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardCharTypedEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingSetAttackTargetEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$NameFormat", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.EntityViewRenderEvent$FieldOfView", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ClientChatReceivedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "squeek.appleskin.api.event.HUDOverlayEvent$Saturation", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionAddedEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ClientTickEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.WorldEvent$Save", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.server.ServerStartingEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.jozufozu.flywheel.event.ReloadRenderersEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.InputEvent$RawMouseEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingChangeTargetEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.VanillaGameEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "com.legacy.structure_gel.api.events.WritableRegistryInitEvent$RegisterDimensionType", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$CropGrowEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.CommandEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$BackgroundDrawnEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderLivingEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ContainerScreenEvent$DrawForeground", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$Color", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.EnderManAngerEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.TickEvent$ServerTickEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderGameOverlayEvent$Text", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyReleasedEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "com.endertech.minecraft.forge.events.RandomTickEvent$Fluid", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.EntityEvent$EnteringSection", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.AttachCapabilitiesEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.ItemAttributeModifierEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.RenderTooltipEvent$GatherComponents", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingHurtEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$KeyboardKeyPressedEvent$Pre", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.sound.PlaySoundSourceEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.PotionEvent$PotionRemoveEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.player.PlayerEvent$SaveToFile", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingFallEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.BlockEvent$NeighborNotifyEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.client.event.ScreenEvent$InitScreenEvent$Post", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.entity.living.LivingEvent$LivingUpdateEvent", handler: (event: any) => void);
declare function onForgeEvent(name: "net.minecraftforge.event.world.ChunkDataEvent$Save", handler: (event: any) => void);
declare function onForgeEvent(name: "slimeknights.tconstruct.library.events.ToolEquipmentChangeEvent", handler: (event: any) => void);
declare function onEvent(name: "minecraft.sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "sound_event.registry", handler: (event: Registry.SoundEvent) => void);
declare function onEvent(name: "minecraft.fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "fluid.registry", handler: (event: Registry.Fluid) => void);
declare function onEvent(name: "minecraft.block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "block.registry", handler: (event: Registry.Block) => void);
declare function onEvent(name: "minecraft.item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "item.registry", handler: (event: Registry.Item) => void);
declare function onEvent(name: "minecraft.enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "enchantment.registry", handler: (event: Registry.Enchantment) => void);
declare function onEvent(name: "minecraft.mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "mob_effect.registry", handler: (event: Registry.MobEffect) => void);
declare function onEvent(name: "minecraft.entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "entity_type.registry", handler: (event: Registry.EntityType) => void);
declare function onEvent(name: "minecraft.block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "block_entity_type.registry", handler: (event: Registry.BlockEntityType) => void);
declare function onEvent(name: "minecraft.potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "potion.registry", handler: (event: Registry.Potion) => void);
declare function onEvent(name: "minecraft.particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "particle_type.registry", handler: (event: Registry.ParticleType) => void);
declare function onEvent(name: "minecraft.motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "motive.registry", handler: (event: Registry.Motive) => void);
declare function onEvent(name: "minecraft.custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "custom_stat.registry", handler: (event: Registry.CustomStat) => void);
declare function onEvent(name: "minecraft.point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "point_of_interest_type.registry", handler: (event: Registry.PointOfInterestType) => void);
declare function onEvent(name: "minecraft.villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "villager_type.registry", handler: (event: Registry.VillagerType) => void);
declare function onEvent(name: "minecraft.villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
declare function onEvent(name: "villager_profession.registry", handler: (event: Registry.VillagerProfession) => void);
declare function onEvent(name: "mekanism.gas.registry", handler: (event: Registry.Gas) => void);
declare function onEvent(name: "mekanism.infuse_type.registry", handler: (event: Registry.InfuseType) => void);
declare function onEvent(name: "mekanism.pigment.registry", handler: (event: Registry.Pigment) => void);
declare function onEvent(name: "mekanism.slurry.registry", handler: (event: Registry.Slurry) => void);
