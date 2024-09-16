(function anonymous(context
) {
/*
	Index: 1036
	Path:  states/SplashState::m_setGoogleSignedIn
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setGoogleSignedIn(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 20; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack0 = this.$BgsplashHud;
                        stack1 = null;
                        if (null == stack0) { p = 16; continue; };
                    case 16:
                        //JIT: Emit inline return
                        return;
                    case 20:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:7 0::SplashHudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack0 = this.$BgsplashHud;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null == stack0) { return; }
                    case 29:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_setGoogleSignedIn.js
})