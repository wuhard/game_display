(function anonymous(context
) {
/*
	Index: 194
	Path:  levels/Level::m_playMusic
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_playMusic() {
        // Possible use a real "this"

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
                        // 7 0::IS_AD_ON
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgIS_AD_ON;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        if (!stack0) { p = 10; continue; };
                        return;
                    case 10:
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack1 = this.$BggetMusicName();
//                        stack2 = -1;// JIT: redundant assigment, value unused
//                        stack3 = false;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlayMusic(stack1, -1, false);
                        } else {
                            // 7 0::PlayMusic
                            {
                                let t = stack0;
                                const m = t.$BgPlayMusic || (t = sec.box(stack0), t.$BgPlayMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, -1, false);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1, -1, false], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_playMusic.js
})