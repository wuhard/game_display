(function anonymous(context
) {
/*
	Index: 59
	Path:  SoundSystem.TurnOffMusicVolume
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_TurnOffMusicVolume() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // 7 0::musicVolumeMultiplier
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::musicVolumeMultiplier
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicVolumeMultiplier = 0;
                        } else {
                            context.setproperty($names[0], 0, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bg_musicTransform;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgmusicVolume;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgmusicVolumeMultiplier;
                        stack1 *= stack2;
                        // 7 0::volume
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.volume = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null == stack0) { return; }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
                    case 40:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/TurnOffMusicVolume.js
})