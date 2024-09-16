(function anonymous(context
) {
/*
	Index: 458
	Path:  Box2D/Common/b2Color::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Number */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::uint
        stack1 = scope0.findScopeProperty($names[0], true, false);
        stack2 = 255;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[1], true, false);
        stack3 = temp.$Bgb2Math;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[1]);
        }
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local1;
//        stack5 = 0;// JIT: redundant assigment, value unused
//        stack6 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
           stack3 = stack3.Clamp(local1, 0, 1);
        } else {
            // 7 0::Clamp
            {
                let t = stack3;
                const m = t.$BgClamp || (t = sec.box(stack3), t.$BgClamp);
                if( typeof m === "function" ) { 
                    stack3 = t.$BgClamp (local1, 0, 1);
                } else { 
                    stack3 = stack3.axCallProperty($names[2], [local1, 0, 1], false);
                }
            }
        }
        stack2 *= stack3;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.uint(stack2);
        } else {
            // 7 0::uint
            {
                let t = stack1;
                const m = t.$Bguint || (t = sec.box(stack1), t.$Bguint);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bguint (stack2);
                } else { 
                    stack1 = stack1.axCallProperty($names[0], [stack2], false);
                }
            }
        }
        // 7 3::_r
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
        this.$Bg_r = (stack1>>>0);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::uint
        stack1 = scope0.findScopeProperty($names[0], true, false);
        stack2 = 255;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[1], true, false);
        stack3 = temp.$Bgb2Math;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[1]);
        }
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local2;
//        stack5 = 0;// JIT: redundant assigment, value unused
//        stack6 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
           stack3 = stack3.Clamp(local2, 0, 1);
        } else {
            // 7 0::Clamp
            {
                let t = stack3;
                const m = t.$BgClamp || (t = sec.box(stack3), t.$BgClamp);
                if( typeof m === "function" ) { 
                    stack3 = t.$BgClamp (local2, 0, 1);
                } else { 
                    stack3 = stack3.axCallProperty($names[2], [local2, 0, 1], false);
                }
            }
        }
        stack2 *= stack3;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.uint(stack2);
        } else {
            // 7 0::uint
            {
                let t = stack1;
                const m = t.$Bguint || (t = sec.box(stack1), t.$Bguint);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bguint (stack2);
                } else { 
                    stack1 = stack1.axCallProperty($names[0], [stack2], false);
                }
            }
        }
        // 7 3::_g
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
        this.$Bg_g = (stack1>>>0);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::uint
        stack1 = scope0.findScopeProperty($names[0], true, false);
        stack2 = 255;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[1], true, false);
        stack3 = temp.$Bgb2Math;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[1]);
        }
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
//        stack5 = 0;// JIT: redundant assigment, value unused
//        stack6 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
           stack3 = stack3.Clamp(local3, 0, 1);
        } else {
            // 7 0::Clamp
            {
                let t = stack3;
                const m = t.$BgClamp || (t = sec.box(stack3), t.$BgClamp);
                if( typeof m === "function" ) { 
                    stack3 = t.$BgClamp (local3, 0, 1);
                } else { 
                    stack3 = stack3.axCallProperty($names[2], [local3, 0, 1], false);
                }
            }
        }
        stack2 *= stack3;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.uint(stack2);
        } else {
            // 7 0::uint
            {
                let t = stack1;
                const m = t.$Bguint || (t = sec.box(stack1), t.$Bguint);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bguint (stack2);
                } else { 
                    stack1 = stack1.axCallProperty($names[0], [stack2], false);
                }
            }
        }
        // 7 3::_b
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::uint  */ 
        this.$Bg_b = (stack1>>>0);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/b2Color/constructor.js
})