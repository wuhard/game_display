(function anonymous(context
) {
/*
	Index: 24
	Path:  Game::m_enterSettingsState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_enterSettingsState() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgsetFadeIn();
        // 7 0::SoundSystem
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgSoundSystem;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = "menu";// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.PlayMusic("menu");
        } else {
            // 7 0::PlayMusic
            {
                let t = stack0;
                const m = t.$BgPlayMusic || (t = sec.box(stack0), t.$BgPlayMusic);
                if( typeof m === "function" ) { 
                    m.call(t, "menu");
                } else { 
                   stack0.axCallProperty($names[1], ["menu"], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Game/m_enterSettingsState.js
})