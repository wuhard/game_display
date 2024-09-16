(function anonymous(context
) {
/*
	Index: 509
	Path:  Box2D/Collision/b2AABB::m_Combine
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_Combine(local1 /* b2AABB */, local2 /* b2AABB */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::lowerBound
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglowerBound;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::lowerBound
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['lowerBound'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BglowerBound;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::x
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::lowerBound
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['lowerBound'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$BglowerBound;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::x
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['x'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.min(stack2, stack3);
        } else {
            // 7 0::min
            {
                let t = __Math;
                const m = t.$Bgmin || (t = sec.box(__Math), t.$Bgmin);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgmin (stack2, stack3);
                } else { 
                    stack1 = __Math.axCallProperty($names[3], [stack2, stack3], false);
                }
            }
        }
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::lowerBound
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglowerBound;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::lowerBound
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['lowerBound'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BglowerBound;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::lowerBound
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['lowerBound'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$BglowerBound;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::y
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[4]);
            }
        }
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.min(stack2, stack3);
        } else {
            // 7 0::min
            {
                let t = __Math;
                const m = t.$Bgmin || (t = sec.box(__Math), t.$Bgmin);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgmin (stack2, stack3);
                } else { 
                    stack1 = __Math.axCallProperty($names[3], [stack2, stack3], false);
                }
            }
        }
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::upperBound
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BgupperBound;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::upperBound
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['upperBound'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BgupperBound;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::x
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::upperBound
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['upperBound'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$BgupperBound;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::x
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['x'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.max(stack2, stack3);
        } else {
            // 7 0::max
            {
                let t = __Math;
                const m = t.$Bgmax || (t = sec.box(__Math), t.$Bgmax);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgmax (stack2, stack3);
                } else { 
                    stack1 = __Math.axCallProperty($names[6], [stack2, stack3], false);
                }
            }
        }
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::upperBound
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BgupperBound;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::upperBound
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['upperBound'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BgupperBound;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::upperBound
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['upperBound'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$BgupperBound;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::y
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[4]);
            }
        }
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.max(stack2, stack3);
        } else {
            // 7 0::max
            {
                let t = __Math;
                const m = t.$Bgmax || (t = sec.box(__Math), t.$Bgmax);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgmax (stack2, stack3);
                } else { 
                    stack1 = __Math.axCallProperty($names[6], [stack2, stack3], false);
                }
            }
        }
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/b2AABB/m_Combine.js
})