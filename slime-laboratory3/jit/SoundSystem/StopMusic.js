(function anonymous(context
) {
/*
	Index: 57
	Path:  SoundSystem.StopMusic
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_StopMusic(local1 /* Boolean */ = false, local2 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
        /* Force Boolean coerce */
        local2 = (!!local2);

        let stack0 = undefined;
        let stack1 = undefined;
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
                        // JIT: potential type:7 0::Boolean
                        stack0 = local2;
                        if (local2) { p = 15; continue; };
                        // 7 0::LastMusicName
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        stack1 = "";// JIT: redundant assigment, value unused
                        // 7 0::LastMusicName
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.LastMusicName = "";
                        } else {
                            context.setproperty($names[0], "", stack0);
                        }
                    case 15:
                        // 7 0::stopMusicFlag
                        stack0 = scope0.findScopeProperty($names[1], false, false);
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::stopMusicFlag
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.stopMusicFlag = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 35; continue; };
                        // 7 0::musicVolume
                        stack0 = scope0.findScopeProperty($names[2], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::musicVolume
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.musicVolume = 0;
                        } else {
                            context.setproperty($names[2], 0, stack0);
                        }
                    case 35:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        //JIT: Emit inline return
                        if (!local1) { return; }
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
                    case 57:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/SoundSystem/StopMusic.js
})