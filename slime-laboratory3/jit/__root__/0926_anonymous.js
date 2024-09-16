(function anonymous(context
) {
/*
	Index: 51
	Path:  __root__/0926_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 5:SoundSystem::MUSIC_VOLUME
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0.5;// JIT: redundant assigment, value unused
        // 7 5:SoundSystem::MUSIC_VOLUME
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MUSIC_VOLUME = 0.5;
        } else {
            context.setproperty($names[0], 0.5, stack0);
        }
        // 7 0::LastMusicName
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "";// JIT: redundant assigment, value unused
        // 7 0::LastMusicName
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LastMusicName = "";
        } else {
            context.setproperty($names[1], "", stack0);
        }
        // 7 0::musicVolume
        stack0 = scope0.findScopeProperty($names[2], false, false);
        // 7 5:SoundSystem::MUSIC_VOLUME
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgMUSIC_VOLUME;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::musicVolume
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.musicVolume = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        // 7 0::musicVolumeMultiplier
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::musicVolumeMultiplier
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.musicVolumeMultiplier = 1;
        } else {
            context.setproperty($names[3], 1, stack0);
        }
        // 7 0::stopMusicFlag
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::stopMusicFlag
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.stopMusicFlag = false;
        } else {
            context.setproperty($names[4], false, stack0);
        }
        // 7 0::lastExplosion
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::lastExplosion
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.lastExplosion = 0;
        } else {
            context.setproperty($names[5], 0, stack0);
        }
        // 7 0::lastPoint
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::lastPoint
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.lastPoint = 0;
        } else {
            context.setproperty($names[6], 0, stack0);
        }
        // 7 0::lastRandomValue
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0::lastRandomValue
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.lastRandomValue = -1;
        } else {
            context.setproperty($names[7], -1, stack0);
        }
        // 7 0::lastRandomExplosionValue
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0::lastRandomExplosionValue
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.lastRandomExplosionValue = -1;
        } else {
            context.setproperty($names[8], -1, stack0);
        }
        // 7 0::lastRandomBigExplosionValue
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = -1;// JIT: redundant assigment, value unused
        // 7 0::lastRandomBigExplosionValue
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.lastRandomBigExplosionValue = -1;
        } else {
            context.setproperty($names[9], -1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0926_anonymous.js
})