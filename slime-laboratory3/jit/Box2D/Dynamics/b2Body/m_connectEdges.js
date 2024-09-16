(function anonymous(context
) {
/*
	Index: 315
	Path:  Box2D/Dynamics/b2Body::m_connectEdges
	Type:  Private
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_connectEdges(local1 /* b2EdgeShape */, local2 /* b2EdgeShape */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local3 = (+local3);
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack1 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack1 = local2.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local2;
                const m = t.$BgGetDirectionVector || (t = sec.box(local2), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetDirectionVector ();
                } else { 
                    stack1 = local2.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::y
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local2;
                const m = t.$BgGetDirectionVector || (t = sec.box(local2), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetDirectionVector ();
                } else { 
                    stack2 = local2.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::x
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.atan2(stack1, stack2);
        } else {
            // 7 0::atan2
            {
                let t = __Math;
                const m = t.$Bgatan2 || (t = sec.box(__Math), t.$Bgatan2);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgatan2 (stack1, stack2);
                } else { 
                    stack0 = __Math.axCallProperty($names[4], [stack1, stack2], false);
                }
            }
        }
        stack0 = +stack0;
        local4 = stack0;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
        stack1 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local3;
        stack1 -= local3;
//        stack2 = 0.5;// JIT: redundant assigment, value unused
        stack1 *= 0.5;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack0 = __Math.tan(stack1);
        } else {
            // 7 0::tan
            {
                let t = __Math;
                const m = t.$Bgtan || (t = sec.box(__Math), t.$Bgtan);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgtan (stack1);
                } else { 
                    stack0 = __Math.axCallProperty($names[5], [stack1], false);
                }
            }
        }
        stack0 = +stack0;
        local5 = stack0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
//        stack1 = local5;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local2;
                const m = t.$BgGetDirectionVector || (t = sec.box(local2), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetDirectionVector ();
                } else { 
                    stack2 = local2.axCallProperty($names[1], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.MulFV(local5, stack2);
        } else {
            // 7 0::MulFV
            {
                let t = stack0;
                const m = t.$BgMulFV || (t = sec.box(stack0), t.$BgMulFV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgMulFV (local5, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[7], [local5, stack2], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[8], true, false);
            _e || console.warn('[m_connectEdges] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local6 = stack0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
//        stack1 = local6;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetNormalVector();
        } else {
            // 7 0::GetNormalVector
            {
                let t = local2;
                const m = t.$BgGetNormalVector || (t = sec.box(local2), t.$BgGetNormalVector);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetNormalVector ();
                } else { 
                    stack2 = local2.axCallProperty($names[9], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.SubtractVV(local6, stack2);
        } else {
            // 7 0::SubtractVV
            {
                let t = stack0;
                const m = t.$BgSubtractVV || (t = sec.box(stack0), t.$BgSubtractVV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgSubtractVV (local6, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[10], [local6, stack2], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[8], true, false);
            _e || console.warn('[m_connectEdges] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local6 = stack0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
        // 7 0:Box2D.Common::b2Settings
        temp = scope0.findScopeProperty($names[11], true, false);
        stack1 = temp.$Bgb2Settings;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[11]);
        }
        // 7 0::b2_toiSlop
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['b2_toiSlop'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgb2_toiSlop;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[12]);
            }
        }
//        stack2 = local6;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.MulFV(stack1, local6);
        } else {
            // 7 0::MulFV
            {
                let t = stack0;
                const m = t.$BgMulFV || (t = sec.box(stack0), t.$BgMulFV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgMulFV (stack1, local6);
                } else { 
                    stack0 = stack0.axCallProperty($names[7], [stack1, local6], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[8], true, false);
            _e || console.warn('[m_connectEdges] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local6 = stack0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
//        stack1 = local6;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetVertex1();
        } else {
            // 7 0::GetVertex1
            {
                let t = local2;
                const m = t.$BgGetVertex1 || (t = sec.box(local2), t.$BgGetVertex1);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetVertex1 ();
                } else { 
                    stack2 = local2.axCallProperty($names[13], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.AddVV(local6, stack2);
        } else {
            // 7 0::AddVV
            {
                let t = stack0;
                const m = t.$BgAddVV || (t = sec.box(stack0), t.$BgAddVV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgAddVV (local6, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[14], [local6, stack2], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[8], true, false);
            _e || console.warn('[m_connectEdges] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local6 = stack0;
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack1 = local1.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local1;
                const m = t.$BgGetDirectionVector || (t = sec.box(local1), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetDirectionVector ();
                } else { 
                    stack1 = local1.axCallProperty($names[1], [], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local2;
                const m = t.$BgGetDirectionVector || (t = sec.box(local2), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetDirectionVector ();
                } else { 
                    stack2 = local2.axCallProperty($names[1], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.AddVV(stack1, stack2);
        } else {
            // 7 0::AddVV
            {
                let t = stack0;
                const m = t.$BgAddVV || (t = sec.box(stack0), t.$BgAddVV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgAddVV (stack1, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[14], [stack1, stack2], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[8], true, false);
            _e || console.warn('[m_connectEdges] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        stack1 = stack0;
        local7 = stack1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Normalize();
        } else {
            // 7 0::Normalize
            {
                let t = stack0;
                const m = t.$BgNormalize || (t = sec.box(stack0), t.$BgNormalize);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[15], [], false);
                }
            }
        }
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[6], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[6]);
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack1 = local1.GetDirectionVector();
        } else {
            // 7 0::GetDirectionVector
            {
                let t = local1;
                const m = t.$BgGetDirectionVector || (t = sec.box(local1), t.$BgGetDirectionVector);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetDirectionVector ();
                } else { 
                    stack1 = local1.axCallProperty($names[1], [], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
           stack2 = local2.GetNormalVector();
        } else {
            // 7 0::GetNormalVector
            {
                let t = local2;
                const m = t.$BgGetNormalVector || (t = sec.box(local2), t.$BgGetNormalVector);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetNormalVector ();
                } else { 
                    stack2 = local2.axCallProperty($names[9], [], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.Dot(stack1, stack2);
        } else {
            // 7 0::Dot
            {
                let t = stack0;
                const m = t.$BgDot || (t = sec.box(stack0), t.$BgDot);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgDot (stack1, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[16], [stack1, stack2], false);
                }
            }
        }
        stack1 = 0;
        stack0 = stack0 > 0;
        local8 = stack0;
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack0 = local1;
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack1 = local2;
//        stack2 = local6;// JIT: redundant assigment, value unused
//        stack3 = local7;// JIT: redundant assigment, value unused
//        stack4 = local8;// JIT: redundant assigment, value unused
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
            local1.SetNextEdge(local2, local6, local7, local8);
        } else {
            // 7 0:http://www.box2d.org/ns/b2internal::SetNextEdge
            {
                let t = local1;
                const m = t.$BgSetNextEdge || (t = sec.box(local1), t.$BgSetNextEdge);
                if( typeof m === "function" ) { 
                    m.call(t, local2, local6, local7, local8);
                } else { 
                   local1.axCallProperty($names[17], [local2, local6, local7, local8], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack0 = local2;
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2EdgeShape// JIT: redundant assigment, value unused
        stack1 = local1;
//        stack2 = local6;// JIT: redundant assigment, value unused
//        stack3 = local7;// JIT: redundant assigment, value unused
//        stack4 = local8;// JIT: redundant assigment, value unused
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
            local2.SetPrevEdge(local1, local6, local7, local8);
        } else {
            // 7 0:http://www.box2d.org/ns/b2internal::SetPrevEdge
            {
                let t = local2;
                const m = t.$BgSetPrevEdge || (t = sec.box(local2), t.$BgSetPrevEdge);
                if( typeof m === "function" ) { 
                    m.call(t, local1, local6, local7, local8);
                } else { 
                   local2.axCallProperty($names[18], [local1, local6, local7, local8], false);
                }
            }
        }
        stack0 = local4;
        return (+local4);
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_connectEdges.js
})