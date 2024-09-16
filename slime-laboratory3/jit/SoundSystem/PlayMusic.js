(function anonymous(context
) {
/*
	Index: 55
	Path:  SoundSystem.PlayMusic
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_PlayMusic(local1 /* String */, local2 /* int */ = -1, local3 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force int coerce */
        local2 = (local2|0);
        /* Force Boolean coerce */
        local3 = (!!local3);
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LOCK_MUSIC
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LOCK_MUSIC'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLOCK_MUSIC;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 13; continue; };
                        return;
                    case 13:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bg_musicTransform;
                        stack1 = null;
                        if (null != stack0) { p = 22; continue; };
                        return;
                    case 22:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::MusicOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['MusicOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgMusicOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack0) { p = 33; continue; };
                        return;
                    case 33:
                        // JIT: potential type:7 0::String
                        stack0 = local1;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgLastMusicName;
                        stack0 = local1 == stack1;
                        stack1 = stack0;
                        if (!stack1) { p = 46; continue; };
                        // JIT: potential type:7 0::Boolean
                        stack0 = local3;
                        stack0 = !local3;
                    case 46:
                        if (!stack0) { p = 51; continue; };
                        return;
                    case 51:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgstopMusicFlag;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 68; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 = !!stack0;
                    case 68:
                        if (!stack0) { p = 94; continue; };
                        // 7 0::stopMusicFlag
                        stack0 = scope0.findScopeProperty($names[4], false, false);
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::stopMusicFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.stopMusicFlag = false;
                        } else {
                            context.setproperty($names[4], false, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 94; continue; };
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
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                    case 94:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 127; continue; };
                        // JIT: potential type:7 0::String
                        stack0 = local1;
                        stack1 = "";
                        if ("" != local1) { p = 120; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.StopMusic();
                        } else {
                            // 7 0::StopMusic
                            {
                                let t = stack0;
                                const m = t.$BgStopMusic || (t = sec.box(stack0), t.$BgStopMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
                        { p = 127; continue; };
                    case 120:
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
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
                    case 127:
                        // 7 0::musicVolume
                        stack0 = scope0.findScopeProperty($names[8], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgMUSIC_VOLUME;
                        // 7 0::musicVolume
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicVolume = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
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
                            context.setproperty($names[9], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 166; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                    case 166:
                        // 7 0::LastMusicName
                        stack0 = scope0.findScopeProperty($names[11], false, false);
//                        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::LastMusicName
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.LastMusicName = local1;
                        } else {
                            context.setproperty($names[11], local1, stack0);
                        }
                        { p = 302; continue; };
                    case 177:
                        // 7 0::musicChannel
                        stack0 = scope0.findScopeProperty($names[12], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgmusicMenu;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 10000;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 10000);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 10000);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [0, 10000], false);
                                }
                            }
                        }
                        // 7 0::musicChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicChannel = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 213; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                    case 213:
                        //JIT: Emit inline return
                        return;
                    case 217:
                        // 7 0::musicChannel
                        stack0 = scope0.findScopeProperty($names[12], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgmusicLevel1;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 10000;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 10000);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 10000);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [0, 10000], false);
                                }
                            }
                        }
                        // 7 0::musicChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicChannel = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 253; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                    case 253:
                        //JIT: Emit inline return
                        return;
                    case 257:
                        // 7 0::musicChannel
                        stack0 = scope0.findScopeProperty($names[12], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgmusicLevel2;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 10000;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 10000);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 10000);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[13], [0, 10000], false);
                                }
                            }
                        }
                        // 7 0::musicChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicChannel = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 293; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                    case 293:
                        //JIT: Emit inline return
                        return;
                    case 297:
                        //JIT: Emit inline return
                        return;
                    case 302:
//                        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
                        stack0 = local1;
                        local4 = local1;
                        stack0 = "menu";
                        stack1 = local4;
                        if (local4 !== "menu") { p = 320; continue; };
                        stack0 = 0;
                        { p = 452; continue; };
                    case 320:
                        stack0 = "level1";
                        stack1 = local4;
                        if (local4 !== "level1") { p = 335; continue; };
                        stack0 = 1;
                        { p = 452; continue; };
                    case 335:
                        stack0 = "stage1";
                        stack1 = local4;
                        if (local4 !== "stage1") { p = 350; continue; };
                        stack0 = 2;
                        { p = 452; continue; };
                    case 350:
                        stack0 = "level3";
                        stack1 = local4;
                        if (local4 !== "level3") { p = 365; continue; };
                        stack0 = 3;
                        { p = 452; continue; };
                    case 365:
                        stack0 = "stage3";
                        stack1 = local4;
                        if (local4 !== "stage3") { p = 380; continue; };
                        stack0 = 4;
                        { p = 452; continue; };
                    case 380:
                        stack0 = "level4";
                        stack1 = local4;
                        if (local4 !== "level4") { p = 395; continue; };
                        stack0 = 5;
                        { p = 452; continue; };
                    case 395:
                        stack0 = "stage4";
                        stack1 = local4;
                        if (local4 !== "stage4") { p = 410; continue; };
                        stack0 = 6;
                        { p = 452; continue; };
                    case 410:
                        stack0 = "level2";
                        stack1 = local4;
                        if (local4 !== "level2") { p = 425; continue; };
                        stack0 = 7;
                        { p = 452; continue; };
                    case 425:
                        stack0 = "stage2";
                        stack1 = local4;
                        if (local4 !== "stage2") { p = 440; continue; };
                        stack0 = 8;
                        { p = 452; continue; };
                    case 440:
                        { p = 450; continue; };
                        // unreachable
                        // unreachable
                    case 450:
                        stack0 = 9;
                    case 452:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 10) { p = [177, 217, 217, 217, 217, 217, 217, 257, 257, 297][stack0]; continue; } else { p = 297; continue; };
                    case 489:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/PlayMusic.js
})