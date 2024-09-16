(function anonymous(context
) {
/*
	Index: 960
	Path:  states/LevelState::m_callBackCommercialBreak
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_callBackCommercialBreak() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:com.poki::PokiFlashSDK
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgPokiFlashSDK;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.instance();
        } else {
            // 7 0::instance
            {
                let t = stack0;
                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bginstance ();
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.gameplayStart();
        } else {
            // 7 0::gameplayStart
            {
                let t = stack0;
                const m = t.$BggameplayStart || (t = sec.box(stack0), t.$BggameplayStart);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[2], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/LevelState/m_callBackCommercialBreak.js
})