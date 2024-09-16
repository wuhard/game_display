(function anonymous(context
) {
/*
	Index: 1151
	Path:  entities/Hero::m_getSlimeOutlineColor
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::uint
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getSlimeOutlineColor() {
        // Possible use a real "this"

        let stack0 = undefined;
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::IS_FROST
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgIS_FROST;
                        if (!stack0) { p = 13; continue; };
                        stack0 = 2063615;
                        return 2063615;
                    case 13:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.GetSlimeOutlineColor();
                        } else {
                            // 7 0::GetSlimeOutlineColor
                            {
                                let t = stack0;
                                const m = t.$BgGetSlimeOutlineColor || (t = sec.box(stack0), t.$BgGetSlimeOutlineColor);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgGetSlimeOutlineColor ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [], false);
                                }
                            }
                        }
                        return (stack0>>>0);
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_getSlimeOutlineColor.js
})