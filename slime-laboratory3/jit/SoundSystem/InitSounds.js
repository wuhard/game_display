(function anonymous(context
) {
/*
	Index: 52
	Path:  SoundSystem.InitSounds
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_InitSounds() {
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
                        // 7 0::sounds
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 0::sounds
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.sounds = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(0);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, 0);
                                } else { 
                                   stack0.axCallProperty($names[2], [0], false);
                                }
                            }
                        }
                        // 7 0::_soundTransform
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        // 7 0:flash.media::SoundTransform
                        stack1 = scope0.findScopeProperty($names[4], true, false);
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        stack1 = context.constructprop($names[4], stack1, [0.5]);
                        // 7 0::_soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0._soundTransform = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[5], false, false);
                        // 7 0:flash.media::SoundChannel
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        stack1 = context.constructprop($names[6], stack1, []);
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        stack1 = null;
                        if (null == stack0) { p = 202; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                    case 202:
                        // 7 0::soundExplosion
                        stack0 = scope0.findScopeProperty($names[8], false, false);
                        // 7 0::SoundExplosion
                        stack1 = scope0.findScopeProperty($names[9], true, false);
                        stack1 = context.constructprop($names[9], stack1, []);
                        // 7 0::soundExplosion
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundExplosion = stack1;
                        } else {
                            context.setproperty($names[8], stack1, stack0);
                        }
                        // 7 0::soundDies
                        stack0 = scope0.findScopeProperty($names[10], false, false);
                        // 7 0::SoundDies
                        stack1 = scope0.findScopeProperty($names[11], true, false);
                        stack1 = context.constructprop($names[11], stack1, []);
                        // 7 0::soundDies
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundDies = stack1;
                        } else {
                            context.setproperty($names[10], stack1, stack0);
                        }
                        // 7 0::soundPoint
                        stack0 = scope0.findScopeProperty($names[12], false, false);
                        // 7 0::SoundPoint
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        stack1 = context.constructprop($names[13], stack1, []);
                        // 7 0::soundPoint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundPoint = stack1;
                        } else {
                            context.setproperty($names[12], stack1, stack0);
                        }
                        // 7 0::soundJump
                        stack0 = scope0.findScopeProperty($names[14], false, false);
                        // 7 0::SoundJump
                        stack1 = scope0.findScopeProperty($names[15], true, false);
                        stack1 = context.constructprop($names[15], stack1, []);
                        // 7 0::soundJump
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundJump = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
                        // 7 0::soundSelect
                        stack0 = scope0.findScopeProperty($names[16], false, false);
                        // 7 0::SoundSelect
                        stack1 = scope0.findScopeProperty($names[17], true, false);
                        stack1 = context.constructprop($names[17], stack1, []);
                        // 7 0::soundSelect
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundSelect = stack1;
                        } else {
                            context.setproperty($names[16], stack1, stack0);
                        }
                        // 7 0::soundBack
                        stack0 = scope0.findScopeProperty($names[18], false, false);
                        // 7 0::SoundBack
                        stack1 = scope0.findScopeProperty($names[19], true, false);
                        stack1 = context.constructprop($names[19], stack1, []);
                        // 7 0::soundBack
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundBack = stack1;
                        } else {
                            context.setproperty($names[18], stack1, stack0);
                        }
                        // 7 0::soundIncrease
                        stack0 = scope0.findScopeProperty($names[20], false, false);
                        // 7 0::SoundIncrease
                        stack1 = scope0.findScopeProperty($names[21], true, false);
                        stack1 = context.constructprop($names[21], stack1, []);
                        // 7 0::soundIncrease
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundIncrease = stack1;
                        } else {
                            context.setproperty($names[20], stack1, stack0);
                        }
                        // 7 0::soundDecrease
                        stack0 = scope0.findScopeProperty($names[22], false, false);
                        // 7 0::SoundDecrease
                        stack1 = scope0.findScopeProperty($names[23], true, false);
                        stack1 = context.constructprop($names[23], stack1, []);
                        // 7 0::soundDecrease
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundDecrease = stack1;
                        } else {
                            context.setproperty($names[22], stack1, stack0);
                        }
                        // 7 0::soundCheckpoint
                        stack0 = scope0.findScopeProperty($names[24], false, false);
                        // 7 0::SoundCheckpoint
                        stack1 = scope0.findScopeProperty($names[25], true, false);
                        stack1 = context.constructprop($names[25], stack1, []);
                        // 7 0::soundCheckpoint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundCheckpoint = stack1;
                        } else {
                            context.setproperty($names[24], stack1, stack0);
                        }
                        // 7 0::soundConfirmLong
                        stack0 = scope0.findScopeProperty($names[26], false, false);
                        // 7 0::SoundConfirmLong
                        stack1 = scope0.findScopeProperty($names[27], true, false);
                        stack1 = context.constructprop($names[27], stack1, []);
                        // 7 0::soundConfirmLong
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundConfirmLong = stack1;
                        } else {
                            context.setproperty($names[26], stack1, stack0);
                        }
                        // 7 0::soundWoosh
                        stack0 = scope0.findScopeProperty($names[28], false, false);
                        // 7 0::SoundWoosh
                        stack1 = scope0.findScopeProperty($names[29], true, false);
                        stack1 = context.constructprop($names[29], stack1, []);
                        // 7 0::soundWoosh
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundWoosh = stack1;
                        } else {
                            context.setproperty($names[28], stack1, stack0);
                        }
                        // 7 0::soundIcycleShake
                        stack0 = scope0.findScopeProperty($names[30], false, false);
                        // 7 0::SoundIcycleShake
                        stack1 = scope0.findScopeProperty($names[31], true, false);
                        stack1 = context.constructprop($names[31], stack1, []);
                        // 7 0::soundIcycleShake
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundIcycleShake = stack1;
                        } else {
                            context.setproperty($names[30], stack1, stack0);
                        }
                        // 7 0::soundIcycleImpact
                        stack0 = scope0.findScopeProperty($names[32], false, false);
                        // 7 0::SoundIcycleImpact
                        stack1 = scope0.findScopeProperty($names[33], true, false);
                        stack1 = context.constructprop($names[33], stack1, []);
                        // 7 0::soundIcycleImpact
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundIcycleImpact = stack1;
                        } else {
                            context.setproperty($names[32], stack1, stack0);
                        }
                        // 7 0::_musicTransform
                        stack0 = scope0.findScopeProperty($names[34], false, false);
                        // 7 0:flash.media::SoundTransform
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack2 = this.$BgmusicVolume;
                        stack1 = context.constructprop($names[4], stack1, [stack2]);
                        // 7 0::_musicTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0._musicTransform = stack1;
                        } else {
                            context.setproperty($names[34], stack1, stack0);
                        }
                        // 7 0::musicChannel
                        stack0 = scope0.findScopeProperty($names[35], false, false);
                        // 7 0:flash.media::SoundChannel
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        stack1 = context.constructprop($names[6], stack1, []);
                        // 7 0::musicChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicChannel = stack1;
                        } else {
                            context.setproperty($names[35], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        stack1 = null;
                        if (null == stack0) { p = 417; continue; };
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgmusicChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_musicTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                    case 417:
                        // 7 0::musicMenu
                        stack0 = scope0.findScopeProperty($names[36], false, false);
                        // 7 0::MusicMenu
                        stack1 = scope0.findScopeProperty($names[37], true, false);
                        stack1 = context.constructprop($names[37], stack1, []);
                        // 7 0::musicMenu
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicMenu = stack1;
                        } else {
                            context.setproperty($names[36], stack1, stack0);
                        }
                        // 7 0::musicLevel1
                        stack0 = scope0.findScopeProperty($names[38], false, false);
                        // 7 0::MusicLevel1
                        stack1 = scope0.findScopeProperty($names[39], true, false);
                        stack1 = context.constructprop($names[39], stack1, []);
                        // 7 0::musicLevel1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicLevel1 = stack1;
                        } else {
                            context.setproperty($names[38], stack1, stack0);
                        }
                        // 7 0::musicLevel2
                        stack0 = scope0.findScopeProperty($names[40], false, false);
                        // 7 0::MusicLevel2
                        stack1 = scope0.findScopeProperty($names[41], true, false);
                        stack1 = context.constructprop($names[41], stack1, []);
                        // 7 0::musicLevel2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicLevel2 = stack1;
                        } else {
                            context.setproperty($names[40], stack1, stack0);
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/InitSounds.js
})