(function anonymous(context
) {
/*
	Index: 2430
	Path:  Main::m_activate
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_activate(local1 /* Event */) {
        // Possible use a real "this"

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
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlayLastMusic(true);
                        } else {
                            // 7 0::PlayLastMusic
                            {
                                let t = stack0;
                                const m = t.$BgPlayLastMusic || (t = sec.box(stack0), t.$BgPlayLastMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t, true);
                                } else { 
                                   stack0.axCallProperty($names[3], [true], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 3::IS_ACTIVE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_ACTIVE = true;
                    case 25:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Main/m_activate.js
})