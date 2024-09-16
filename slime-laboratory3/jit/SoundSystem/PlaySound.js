(function anonymous(context
) {
/*
	Index: 61
	Path:  SoundSystem.PlaySound
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_PlaySound(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::SoundOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['SoundOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgSoundOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        { p = 712; continue; };
                    case 19:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 0;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 0;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 0);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 68; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundJump;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 0;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 0), 3, stack0);
                    case 68:
                        //JIT: Emit inline return
                        return;
                    case 72:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 1;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 121; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundPoint;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 1;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 1), 3, stack0);
                    case 121:
                        //JIT: Emit inline return
                        return;
                    case 125:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 2;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 174; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundDies;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 2;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 2), 3, stack0);
                    case 174:
                        //JIT: Emit inline return
                        return;
                    case 178:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 3;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 226; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundIncrease;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 3;
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 3), 3, stack0);
                    case 226:
                        //JIT: Emit inline return
                        return;
                    case 230:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 4;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 279; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundDecrease;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 4;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 4), 3, stack0);
                    case 279:
                        //JIT: Emit inline return
                        return;
                    case 283:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 5;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 5;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 5);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 332; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundSelect;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 5;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 5), 3, stack0);
                    case 332:
                        //JIT: Emit inline return
                        return;
                    case 336:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 6;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 6;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 6);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 385; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundBack;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 6;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 6), 3, stack0);
                    case 385:
                        //JIT: Emit inline return
                        return;
                    case 389:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 7;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 7;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 7);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 438; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundExplosion;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 7;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 7), 3, stack0);
                    case 438:
                        //JIT: Emit inline return
                        return;
                    case 442:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 8;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 8);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 491; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundCheckpoint;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 8), 3, stack0);
                    case 491:
                        //JIT: Emit inline return
                        return;
                    case 495:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 8;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 8);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 544; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundConfirmLong;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 8), 3, stack0);
                    case 544:
                        //JIT: Emit inline return
                        return;
                    case 548:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 9;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 9;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 9);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 597; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundWoosh;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 9;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 9), 3, stack0);
                    case 597:
                        //JIT: Emit inline return
                        return;
                    case 601:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 8;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 8);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 650; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundIcycleShake;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 8;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 8), 3, stack0);
                    case 650:
                        //JIT: Emit inline return
                        return;
                    case 654:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 9;
                        // 27 {3, 5:SoundSystem, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.media, 3, 2, 0:flash.display, 0:flash.utils, 0:flash.events, 1:SoundSystem}::*
                        {
                            let simple = 9;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[2], 9);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (stack0) { p = 703; continue; };
                        // 7 0::soundChannel
                        stack0 = scope0.findScopeProperty($names[3], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgsoundIcycleImpact;
//                        stack2 = 0;// JIT: redundant assigment, value unused
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.play(0, 1);
                        } else {
                            // 7 0::play
                            {
                                let t = stack1;
                                const m = t.$Bgplay || (t = sec.box(stack1), t.$Bgplay);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgplay (0, 1);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [0, 1], false);
                                }
                            }
                        }
                        // 7 0::soundChannel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundChannel = stack1;
                        } else {
                            context.setproperty($names[3], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgsoundChannel;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$Bg_soundTransform;
                        // 7 0::soundTransform
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.soundTransform = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$Bgsounds;
                        stack1 = 9;
                        stack2 = 3;
                        context.setproperty(context.runtimename($names[2], 9), 3, stack0);
                    case 703:
                        //JIT: Emit inline return
                        return;
                    case 707:
                        //JIT: Emit inline return
                        return;
                    case 712:
//                        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
                        stack0 = local1;
                        local3 = local1;
                        stack0 = "jump";
                        stack1 = local3;
                        if (local3 !== "jump") { p = 728; continue; };
                        stack0 = 0;
                        { p = 922; continue; };
                    case 728:
                        stack0 = "point";
                        stack1 = local3;
                        if (local3 !== "point") { p = 742; continue; };
                        stack0 = 1;
                        { p = 922; continue; };
                    case 742:
                        stack0 = "hurt";
                        stack1 = local3;
                        if (local3 !== "hurt") { p = 756; continue; };
                        stack0 = 2;
                        { p = 922; continue; };
                    case 756:
                        stack0 = "increase";
                        stack1 = local3;
                        if (local3 !== "increase") { p = 770; continue; };
                        stack0 = 3;
                        { p = 922; continue; };
                    case 770:
                        stack0 = "decrease";
                        stack1 = local3;
                        if (local3 !== "decrease") { p = 784; continue; };
                        stack0 = 4;
                        { p = 922; continue; };
                    case 784:
                        stack0 = "select";
                        stack1 = local3;
                        if (local3 !== "select") { p = 798; continue; };
                        stack0 = 5;
                        { p = 922; continue; };
                    case 798:
                        stack0 = "confirm";
                        stack1 = local3;
                        if (local3 !== "confirm") { p = 812; continue; };
                        stack0 = 6;
                        { p = 922; continue; };
                    case 812:
                        stack0 = "back";
                        stack1 = local3;
                        if (local3 !== "back") { p = 826; continue; };
                        stack0 = 7;
                        { p = 922; continue; };
                    case 826:
                        stack0 = "explosion";
                        stack1 = local3;
                        if (local3 !== "explosion") { p = 840; continue; };
                        stack0 = 8;
                        { p = 922; continue; };
                    case 840:
                        stack0 = "checkpoint";
                        stack1 = local3;
                        if (local3 !== "checkpoint") { p = 854; continue; };
                        stack0 = 9;
                        { p = 922; continue; };
                    case 854:
                        stack0 = "start";
                        stack1 = local3;
                        if (local3 !== "start") { p = 868; continue; };
                        stack0 = 10;
                        { p = 922; continue; };
                    case 868:
                        stack0 = "woosh";
                        stack1 = local3;
                        if (local3 !== "woosh") { p = 882; continue; };
                        stack0 = 11;
                        { p = 922; continue; };
                    case 882:
                        stack0 = "icycle_shake";
                        stack1 = local3;
                        if (local3 !== "icycle_shake") { p = 896; continue; };
                        stack0 = 12;
                        { p = 922; continue; };
                    case 896:
                        stack0 = "icycle_impact";
                        stack1 = local3;
                        if (local3 !== "icycle_impact") { p = 910; continue; };
                        stack0 = 13;
                        { p = 922; continue; };
                    case 910:
                        { p = 920; continue; };
                        // unreachable
                        // unreachable
                    case 920:
                        stack0 = 14;
                    case 922:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 15) { p = [19, 72, 125, 178, 230, 283, 283, 336, 389, 442, 495, 548, 601, 654, 707][stack0]; continue; } else { p = 707; continue; };
                    case 974:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/PlaySound.js
})