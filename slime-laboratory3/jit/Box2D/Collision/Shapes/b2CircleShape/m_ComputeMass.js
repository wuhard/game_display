(function anonymous(context
) {
/*
	Index: 1440
	Path:  Box2D/Collision/Shapes/b2CircleShape::m_ComputeMass
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ComputeMass(local1 /* b2MassData */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
        // JIT: potential type:7 0::Number
        stack1 = local2;
        // 7 0:Box2D.Common::b2Settings
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$Bgb2Settings;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::b2_pi
        //Possible type:7 0:Box2D.Common::b2Settings
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['b2_pi'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgb2_pi;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        stack1 *= stack2;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$Bgm_radius;
        stack1 *= stack2;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack2 = this.$Bgm_radius;
        stack1 *= stack2;
        // 7 0::mass
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.mass = stack1;
        } else {
            context.setproperty($names[2], stack1, local1);
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::center
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['center'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgcenter;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgm_p;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::mass
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['mass'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgmass;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        stack2 = 0.5;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$Bgm_radius;
        stack2 *= stack3;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$Bgm_radius;
        stack2 *= stack3;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        //Possible type:7 0:http://www.box2d.org/ns/b2internal::m_radius
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack3 = this.$Bgm_p;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['x'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[5]);
            }
        }
//        stack4 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack4 = this.$Bgm_p;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['x'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgx;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[5]);
            }
        }
        stack3 *= stack4;
//        stack4 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack4 = this.$Bgm_p;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['y'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$Bgy;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[6]);
            }
        }
//        stack5 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_p
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack5 = this.$Bgm_p;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
            stack5 = stack5['y'];
        } else {
            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
            stack5 = temp.$Bgy;
            if (stack5 === undefined || typeof stack5 === 'function') {
                stack5 = temp.axGetProperty($names[6]);
            }
        }
        stack4 *= stack5;
        stack3 += stack4;
        stack2 += stack3;
        stack1 *= stack2;
        // 7 0::I
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.I = stack1;
        } else {
            context.setproperty($names[7], stack1, local1);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2CircleShape/m_ComputeMass.js
})