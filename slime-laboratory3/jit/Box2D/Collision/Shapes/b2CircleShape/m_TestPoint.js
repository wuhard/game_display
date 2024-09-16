(function anonymous(context
) {
/*
	Index: 1437
	Path:  Box2D/Collision/Shapes/b2CircleShape::m_TestPoint
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_TestPoint(local1 /* b2Transform */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$BgR;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[1], true, false);
            _e || console.warn('[m_TestPoint] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgposition;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['x'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::col1
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['col1'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgcol1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$Bgm_p;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        stack1 *= stack2;
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0::col2
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['col2'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgcol2;
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
                stack2 = temp.axGetProperty($names[3]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack3 = this.$Bgm_p;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[6]);
            }
        }
        stack2 *= stack3;
        stack1 += stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local4 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgposition;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['y'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgy;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::col1
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['col1'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgcol1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::y
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$Bgm_p;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        stack1 *= stack2;
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0::col2
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['col2'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgcol2;
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
                stack2 = temp.axGetProperty($names[6]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack3 = this.$Bgm_p;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[6]);
            }
        }
        stack2 *= stack3;
        stack1 += stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local5 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local2;
        // 7 0::x
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack0 = local2['x'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = local4;// JIT: redundant assigment, value unused
        stack0 -= local4;
        stack0 = +stack0;
        local4 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local2;
        // 7 0::y
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack0 = local2['y'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack0 = temp.$Bgy;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
//        stack1 = local5;// JIT: redundant assigment, value unused
        stack0 -= local5;
        stack0 = +stack0;
        local5 = stack0;
        stack0 = local4;
//        stack1 = local4;// JIT: redundant assigment, value unused
        stack0 *= local4;
        stack1 = local5;
//        stack2 = local5;// JIT: redundant assigment, value unused
        stack1 *= local5;
        stack0 += stack1;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$Bgm_radius;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$Bgm_radius;
        stack1 *= stack2;
        stack0 = stack0 <= stack1;
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/m_TestPoint.js
})