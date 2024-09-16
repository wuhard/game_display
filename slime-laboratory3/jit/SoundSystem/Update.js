(function anonymous(context
) {
/*
	Index: 53
	Path:  SoundSystem.Update
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgstopMusicFlag;
                        if (!stack0) { p = 74; continue; };
                        // 7 0::musicVolume
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgmusicVolume;
//                        stack2 = 0.04;// JIT: redundant assigment, value unused
                        stack1 -= 0.04;
                        // 7 0::musicVolume
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicVolume = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
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
                        if (null == stack0) { p = 51; continue; };
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
                    case 51:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicVolume;
                        stack1 = 0;
                        if (!(0 >= stack0)) { p = 74; continue; };
                        // 7 0::stopMusicFlag
                        stack0 = scope0.findScopeProperty($names[3], false, false);
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::stopMusicFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.stopMusicFlag = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.stop();
                        } else {
                            // 7 0::stop
                            {
                                let t = stack0;
                                const m = t.$Bgstop || (t = sec.box(stack0), t.$Bgstop);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                    case 74:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 124; continue; };
                    case 81:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = local1;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[5], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 0;
                        if (!(0 < stack0)) { p = 122; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = stack0;
                        local2 = stack1;
                        stack1 = local1;
                        stack2 = local1;
                        local3 = stack2;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[5], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0--;
                        local4 = stack0;
                        stack0 = local2;
                        stack1 = local3;
                        stack2 = local4;
                        context.setproperty(context.runtimename($names[5], local3), local4, local2);
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 122:
                        local1 = (local1 | 0) + 1;
                    case 124:
                        stack0 = local1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bgsounds;
                        // 7 0::length
                        //Possible type:7 0::sounds
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[6]);
                            }
                        }
                        if (stack1 > local1) { p = 81; continue; };
                        // 7 0::lastPoint
                        stack0 = scope0.findScopeProperty($names[7], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::lastPoint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastPoint = 0;
                        } else {
                            context.setproperty($names[7], 0, stack0);
                        }
                        // 7 0::lastExplosion
                        /* We sure that this scope owner, represented in TRAIT as Slot  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::lastExplosion
                        //Possible type:7 0::sounds
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglastExplosion;
                        stack0 = (stack0 | 0) + 1;
                        local3 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 7 0::lastExplosion
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.lastExplosion = local3;
                        } else {
                            context.setproperty($names[8], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BglastExplosion;
                        stack1 = 10;
                        //JIT: Emit inline return
                        if (!(10 < stack0)) { return; }
                        // 7 0::lastExplosion
                        stack0 = scope0.findScopeProperty($names[8], false, false);
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::lastExplosion
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.lastExplosion = 10;
                        } else {
                            context.setproperty($names[8], 10, stack0);
                        }
                    case 179:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/Update.js
})