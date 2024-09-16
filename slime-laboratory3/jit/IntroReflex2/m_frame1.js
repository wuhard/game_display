(function anonymous(context
) {
/*
	Index: 2297
	Path:  IntroReflex2::m_frame1
	Type:  PackageInternal
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_frame1() {
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
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.random();
        } else {
            // 7 0::random
            {
                let t = __Math;
                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgrandom ();
                } else { 
                    stack1 = __Math.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::alpha
        /* We sure that this safe set, represented in TRAIT as GetterSetter, with type: null  */ 
        this.$Bgalpha = stack1;
        return;
    }
//# sourceURL=http://jit/IntroReflex2/m_frame1.js
})