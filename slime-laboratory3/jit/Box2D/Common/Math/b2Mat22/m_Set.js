(function anonymous(context
) {
/*
	Index: 693
	Path:  Box2D/Common/Math/b2Mat22::m_Set
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_Set(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local2 = NaN;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.cos(local1);
        } else {
            // 7 0::cos
            {
                let t = __Math;
                const m = t.$Bgcos || (t = sec.box(__Math), t.$Bgcos);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgcos (local1);
                } else { 
                    stack0 = __Math.axCallProperty($names[1], [local1], false);
                }
            }
        }
        stack0 = +stack0;
        local2 = stack0;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.sin(local1);
        } else {
            // 7 0::sin
            {
                let t = __Math;
                const m = t.$Bgsin || (t = sec.box(__Math), t.$Bgsin);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgsin (local1);
                } else { 
                    stack0 = __Math.axCallProperty($names[2], [local1], false);
                }
            }
        }
        stack0 = +stack0;
        local3 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col1
        //Possible type:7 0::Math
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        stack1 = local2;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = local2;
        } else {
            context.setproperty($names[3], local2, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol2;
        stack1 = local3;
        stack1 = -local3;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col1
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol1;
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = local3;
        } else {
            context.setproperty($names[4], local3, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::col2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgcol2;
//        stack1 = local2;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = local2;
        } else {
            context.setproperty($names[4], local2, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/m_Set.js
})